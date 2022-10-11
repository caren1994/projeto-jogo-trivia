import { LOGIN, FAIL_REQ, QUESTIONS_REQ, SCORE_PLAYER } from '../actions/actionTypes';

// questions = [
//   {
//     correct_answer = string,
//     incorrect_answers = 3 [string]
//     type:verdadeiro ou falso ou multipla escolha => string,
//     category: string,
//     question: string
//   }
// ]

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 10,
  gravatarEmail: '',
  questions: [],
  requisition: {
    failed: false,
    errorMessage: '',
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
      },
    };
  case QUESTIONS_REQ:
    return {
      ...state,
      requisition: {
        failed: false,
        errorMessage: '',
      },
      questions: action.payload.results,
    };
  case SCORE_PLAYER:
    return {
      ...state,
      score: action.payload,
    };
  default:
    return state;
  }
}
