import React from "react";
import Container from "@material-ui/core/Container";
import { Route, Switch, Link } from 'react-router-dom';
import OldExamples from "./OldExamples";
import List from "./List";


function App() {
  return (
    <div>
      <nav>
      <Link to="/">Old Examples</Link>
      <Link to="/list">List example</Link>
      </nav>
      <Container maxWidth="lg">
        <Switch>
          <Route exact path="/" component={OldExamples} />
          <Route path="/list" component={List} />
        </Switch>
        <div style={{ minHeight: "500px" }}></div>
      </Container>
    </div>
  );
}

export default App;
