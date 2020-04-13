import React from 'react';
import Container from '@material-ui/core/Container';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';


function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Example1 />
        <Example2 />
        <Example3 />
      </Container>
    </div>
  );
}

export default App;
