import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Basic } from "./containers/Basic/Basic";
import "./assets/App.css";

function App() {
  return (
    <Router>
      <nav>
        <div className="nav-wrapper">
          <ul>
            <li>
              <Link to="/basic">Basic</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Switch>
        <Route path="/basic">
          <Basic />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
