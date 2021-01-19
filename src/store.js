import { createStore } from 'redux';
import { mainReducer } from './redux';

const store = createStore(mainReducer);

export default store;

