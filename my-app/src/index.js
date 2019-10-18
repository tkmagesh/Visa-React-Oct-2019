import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './store';
import  Spinner from './spinner';
import BugTracker from './bugTracker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<p>
				<Link to="/">Bug Tracker</Link>
				<br/>
				<Link to="/spinner">Spinner</Link>
				<br />
				</p>
			  <Route exact path="/" component={BugTracker} />
		      <Route path="/bugs" component={BugTracker} />
		      <Route path="/spinner" component={Spinner} />
		    </div> 
	    </Router>
	</Provider>
	, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
