export const USER = 'USER';
export const QUESTIONS_API = 'QUESTIONS_API';
export const FAIL_REQ = 'FAIL_REQ';

export const user = (payload) => ({
  type: USER,
  payload,
});

export const responseApi = (payload) => ({
  type: QUESTIONS_API,
  payload,
});

export const failApi = (erro) => ({ type: FAIL_REQ, erro });

export function getRequest() {
  return async (dispatch) => {
    const getRequestApi = await fetch('https://opentdb.com/api_token.php?command=request');
    const token = await getRequestApi.json();
    console.log(token);
    try {
      if (token.response_code === 0) {
        localStorage.setItem('token', token.token);
        const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token.token}`);
        const data = await response.json();
        dispatch(responseApi(data));
      }
    } catch (e) {
      dispatch(failApi(error));
    }
  };
}
