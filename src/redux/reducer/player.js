import { USER, FAIL_REQ } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

export default function PlayerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER:
    return {
      ...state,
      gravatarEmail: action.payload.email,
      name: action.payload.name,
    };
  case FAIL_REQ:
    // TODO:Tratar o Erro da Chamada a Api!
    return state;

  default:
    return state;
  }
}
