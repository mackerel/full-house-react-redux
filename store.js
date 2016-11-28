import { createStore } from 'redux';
import { combineForms } from 'react-redux-form';

const initialHousehold = { address:"", zip:"", us_state:"" };

const store = createStore(combineForms({
  household: initialHousehold,
}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
