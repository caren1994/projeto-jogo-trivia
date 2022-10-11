import { FAIL_REQ, LOGIN, QUESTIONS_REQ, SCORE_PLAYER } from './actionTypes';

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const setQuestions = (payload) => ({
  type: QUESTIONS_REQ,
  payload,
});

export const failApi = (payload) => ({ type: FAIL_REQ, payload });

export const scorePlayer = (payload) => ({ type: SCORE_PLAYER, payload });
