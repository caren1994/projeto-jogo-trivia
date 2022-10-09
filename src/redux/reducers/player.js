import { LOGIN, FAIL_REQ, QUESTIONS_REQ } from '../actions/actionTypes';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
  questions: [],
  requisition: {
    failed: false,
    errorMessage: ''
  },
};

export default function PlayerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        requisition: {
          failed: false,
          errorMessage: '',
        },
        gravatarEmail: action.payload.email,
        name: action.payload.name,
      };
    case FAIL_REQ:
      return {
        ...state,
        requisition: {
          failed: true,
          errorMessage: action.payload,
        }
      };
    case QUESTIONS_REQ:
      return {
        ...state,
        requisition: {
          failed: false,
          errorMessage: '',
        },
        questions: action.payload.results
      }

    default:
      return state;
  }
}
