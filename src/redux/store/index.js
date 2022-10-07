import { legacy_createStore as createStore } from 'redux';
import rootReducer from '../reducer';

const store = createStore(rootReducer);

if (window.Cypress) {
  window.store = store;
}

export default store;
