import { FAIL_REQ, LOGIN } from './actionTypes';

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const failApi = (erro) => ({ type: FAIL_REQ, erro });
