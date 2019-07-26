
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './css/App.css';
import './css/grails.css';
import './css/main.css';
//import Edit from './app/Edit';
//import FeedDuck from './app/FeedDuck';
import AddDuckFeedForm from './app/AddDuckFeedForm';
//import Show from './app/Show';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />

       <Route path='/FeedDuck' component={AddDuckFeedForm} />

      </div>
  </Router>,

  document.getElementById('root')
);
