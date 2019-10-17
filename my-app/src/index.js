import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import  Spinner from './spinner';
import * as spinnerActionCreators from './spinner/actions';
import store from './store';
import { bindActionCreators } from 'redux';

let actionDispatchers = bindActionCreators(spinnerActionCreators, store.dispatch);
     
function renderSpinner(){
    let value = store.getState();
  
    ReactDOM.render(<Spinner value={value}  {...actionDispatchers}/>,
        document.getElementById('root'));
}
renderSpinner();
store.subscribe(renderSpinner);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
