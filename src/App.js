import React from "react";
import Container from "@material-ui/core/Container";
import { Route, Switch } from 'react-router-dom';
import OldExamples from "./OldExamples";
import List from "./List";
import List2 from "./List2";
import List3 from "./List3";
import List4 from "./List4";
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
          <Route path="/list3" component={List3} />
          <Route path="/list4" component={List4} />
        </Switch>
        <div style={{ minHeight: "500px" }}></div>
      </Container>
    </div>
  );
}

export default App;
