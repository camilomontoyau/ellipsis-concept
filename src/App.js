import React from "react";
import Container from "@material-ui/core/Container";
import OldExamples from "./OldExamples";
import { Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
      <Link to="/">Old Examples</Link>
      <Link to="/list">List example</Link>
      </nav>
      <Container maxWidth="lg">
        <Switch>
          <Route path="/" component={OldExamples} />
        </Switch>
        <div style={{ minHeight: "500px" }}></div>
      </Container>
    </div>
  );
}

export default App;
