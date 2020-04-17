import React from "react";
import Container from "@material-ui/core/Container";
import OldExamples from "./OldExamples";
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
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
