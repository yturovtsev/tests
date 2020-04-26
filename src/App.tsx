import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Basic } from './containers/Basic/Basic';
import ReduxThunk from './containers/Redux-thunk/Redux-thunk';
import './assets/App.css';
import reduxThunkStore from './containers/Redux-thunk/store/store';

export default () => (
  <Router>
    <nav>
      <div className="nav-wrapper">
        <ul>
          <li>
            <Link to="/basic">Basic</Link>
          </li>
          <li>
            <Link to="/redux-thunk">Redux-thunk</Link>
          </li>
        </ul>
      </div>
    </nav>

    <Switch>
      <Route path="/basic">
        <Basic />
      </Route>
      <Route path="/redux-thunk">
        <Provider store={reduxThunkStore}>
          <ReduxThunk />
        </Provider>
      </Route>
    </Switch>
  </Router>
);
