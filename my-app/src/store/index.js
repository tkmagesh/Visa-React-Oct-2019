import { createStore, combineReducers } from 'redux';
import { spinnerReducer } from '../spinner/reducers/spinnerReducer';
import { bugsReducer } from '../bugTracker/reducers/bugsReducer';

const rootReducer = combineReducers({
    bugsData : bugsReducer,
    spinnerData : spinnerReducer
});

const store = createStore(rootReducer);

export default store;