import {createStore} from 'redux'
import household from './reducers/household'
export default createStore(household, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
