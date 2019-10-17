import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import store from './store';
import { bindActionCreators } from 'redux';

import  Spinner from './spinner';
import * as spinnerActionCreators from './spinner/actions';

import BugTracker from './bugTracker';
import * as bugActionCreators from './bugTracker/actions';

let bugActionDispatchers = bindActionCreators(bugActionCreators, store.dispatch);
let spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, store.dispatch);
     
function renderSpinner(){
    let storeState = store.getState(),
        value = storeState.spinnerData,
        bugs = storeState.bugsData
  
    ReactDOM.render(
        <div>
            <Spinner value={value}  {...spinnerActionDispatchers}/>
            <hr/>
            <BugTracker {...{bugs, ...bugActionDispatchers}} />
        </div>,
        document.getElementById('root'));
}
renderSpinner();
store.subscribe(renderSpinner);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
