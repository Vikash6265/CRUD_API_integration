import React from 'react'
import Navbar from './components/Navbar';
import Form from './components/Form';
import ListGroup from './components/ListGroup';
import { Container } from '@mui/material';

const App = () => {
  return (
    <>
     <Navbar/>
     <Container>
      <Form/>
      <ListGroup/>
     </Container>
    </>
  )
}

export default App;
