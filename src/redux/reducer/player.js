const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

export default function PlayerReducer(state = INITIAL_STATE, action) {
  switch (action.payload) {
  case '':

    return state;

  default:
    return state;
  }
}
