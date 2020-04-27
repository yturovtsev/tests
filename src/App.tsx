import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
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
            <NavLink exact activeClassName="active" to="/basic">
              Basic
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/redux-thunk">
              Redux-thunk
            </NavLink>
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
