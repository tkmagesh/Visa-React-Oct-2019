import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { spinnerReducer } from '../spinner/reducers/spinnerReducer';
import { bugsReducer } from '../bugTracker/reducers/bugsReducer';

const rootReducer = combineReducers({
    bugsData : bugsReducer,
    spinnerData : spinnerReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;