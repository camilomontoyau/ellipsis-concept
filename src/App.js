import React from 'react';
import Container from '@material-ui/core/Container';
import Example1 from './examples/Example1';
import Example2 from './examples/Example2';
import Example3 from './examples/Example3';
import Example4 from './examples/Example4';
import Example5 from './examples/Example5';
import Example6 from './examples/Example6';
import Example7 from './examples/Example7';
import Example8 from './examples/Example8';
import Example9 from './examples/Example9';
import Example10 from './examples/Example10';


function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Example1 />
        <Example2 />
        <Example3 />
        <Example4 />
        <Example5 />
        <Example6 />
        <Example7 />
        <Example8 />
        <Example9 />
        <Example10 />
        <div style={{minHeight:'500px'}}></div>
      </Container>
    </div>
  );
}

export default App;
