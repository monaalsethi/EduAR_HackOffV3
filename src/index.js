import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './Home'
import Video from './Video'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <Router>
				<div>
					<Route exact path="/" component={Home} />
					
					<Route exact path="/Video/:url" component= {Video} />
				</div>
			</Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
