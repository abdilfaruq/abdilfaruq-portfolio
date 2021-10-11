import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Main from "./containers/Main";
import ProjectsPage from "./containers/ProjectsPage";
function App() {
  return (
    <div>
      <Router basename="/home">
        <Switch>
          <Route path="/" component={Main} exact/>
          <Route path="/projects" component={ProjectsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;