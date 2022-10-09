import { FAIL_REQ, LOGIN, QUESTIONS_REQ } from './actionTypes';

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const setQuestions = (payload) => ({
  type: QUESTIONS_REQ,
  payload,
})

export const failApi = (payload) => ({ type: FAIL_REQ, payload });
