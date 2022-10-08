import { USER } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

export default function PlayerReducer(state = INITIAL_STATE, action) {
  switch (action.payload) {
  case USER:
    return {
      ...state,
      email: action.payload.email,
      name: action.payload.name,
    };

  default:
    return state;
  }
}
