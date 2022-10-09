import { LOGIN, FAIL_REQ, QUESTIONS_REQ } from '../actions/actionTypes';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
  questions: []
};

export default function PlayerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        gravatarEmail: action.payload.email,
        name: action.payload.name,
      };
    case FAIL_REQ:
      // TODO:Tratar o Erro da Chamada a Api!
      return state;
    case QUESTIONS_REQ:
      return {
        ...state,
        questions: action.payload.results
      }

    default:
      return state;
  }
}
