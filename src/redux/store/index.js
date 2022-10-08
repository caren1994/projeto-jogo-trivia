import { legacy_createStore as createStore } from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

if (window.Cypress) {
  window.store = store;
}

export default store;
