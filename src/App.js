import React from "react";
import Container from "@material-ui/core/Container";
import { Route, Switch } from 'react-router-dom';
import OldExamples from "./OldExamples";
import List from "./List";
import List2 from "./List2";
import Nav from "./Nav";


function App() {
  return (
    <div>
      <Nav />
      <Container maxWidth="lg">
        <Switch>
          <Route exact path="/" component={OldExamples} />
          <Route path="/list" component={List} />
          <Route path="/list2" component={List2} />
        </Switch>
        <div style={{ minHeight: "500px" }}></div>
      </Container>
    </div>
  );
}

export default App;
