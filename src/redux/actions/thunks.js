import { login, failApi, setQuestions } from './index';

export default function getToken(user) {
  return async (dispatch) => {
    try {
      const getRequestToken = await (await fetch('https://opentdb.com/api_token.php?command=request')).json();
      const { token } = getRequestToken;
      localStorage.setItem('token', token);
      dispatch(login(user));

      const urlQuestions = `https://opentdb.com/api.php?amount=5&token=${token}`

      const data = await (await fetch(urlQuestions)).json();

      //TODO:Verificar o restorno da Api e fazer o Logout!
      dispatch(setQuestions(data))
    } catch (e) {
      dispatch(failApi(error));
    }
  };
}
