import { login, failApi } from "./index";

export function getToken(user) {
  return async (dispatch) => {
    try {
      const getRequestToken = await (await fetch('https://opentdb.com/api_token.php?command=request')).json();
      const { token } = getRequestToken;
      localStorage.setItem('token', token);
      dispatch(login(user));
    } catch (e) {
      dispatch(failApi(error));
    }
  };
}

