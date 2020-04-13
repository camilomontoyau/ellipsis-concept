import React from 'react';
import Container from '@material-ui/core/Container';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';
import Example4 from './Example4';
import Example5 from './Example5';
import Example6 from './Example6';
import Example7 from './Example7';


function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Example1 />
        <Example2 />
        <Example3 />
        <Example4 />
        <Example5 />
        <Example6 />
        <Example7 />
        <div style={{minHeight:'500px'}}></div>
      </Container>
    </div>
  );
}

export default App;
