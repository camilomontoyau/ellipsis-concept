import React from 'react';
import Container from '@material-ui/core/Container';
import Example1 from './Example1';
import Example2 from './Example2';


function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Example1 />
        <Example2 />
      </Container>
    </div>
  );
}

export default App;
