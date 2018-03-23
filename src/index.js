import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SubPage from './SubPage/SubPage.js'
import registerServiceWorker from './registerServiceWorker';
import {
  Router,
  Route,
  browserHistory,
} from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route exact path="/" component={App}></Route>
    <Route path="/subPage" component={SubPage}></Route>
  </Router>

, document.getElementById('root'));
registerServiceWorker();
