async function getToken() {
  try {
    const getRequestToken = await (await fetch('https://opentdb.com/api_token.php?command=request')).json();
    const { token } = getRequestToken;
    localStorage.setItem('token', token);
  } catch (error) {
    throw new Error(error);
  }
}

export default getToken;
