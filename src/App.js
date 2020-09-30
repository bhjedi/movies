import React from "react";
import "./App.css";
import Film from "./Film";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Film />
          </Route>
          <Route path="/movies">
            <Film />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
