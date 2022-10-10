import { login, failApi, setQuestions } from './index';

export default function getToken(user, history) {
  return async (dispatch) => {
    try {
      const getRequestToken = await (await fetch('https://opentdb.com/api_token.php?command=request')).json();
      const { token } = getRequestToken;
      localStorage.setItem('token', token);

      dispatch(login(user));

      const urlQuestions = `https://opentdb.com/api.php?amount=5&token=${token}`;

      const data = await (await fetch(urlQuestions)).json();

      const invalidTokenCode = 3;
      if (data.response_code === invalidTokenCode) {
        throw new Error('Token Inválido!');
      }
      dispatch(setQuestions(data));
      history.push('/game');
    } catch (e) {
      localStorage.removeItem('token');
      dispatch(failApi(e.message));
      history.push('/');
    }
  };
}
