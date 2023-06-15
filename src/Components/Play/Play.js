import React from 'react';
import { Container } from 'react-bootstrap';

import { getAllCards } from '../API/api';

class Play extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    getAllCards()
    .then((response) => {
      console.log('response >>>>', response)
  })
  .catch((error) => {
      console.log('something went wrong to display all cards >>', error)
  })

  }

  render() {
    return (
      <Container className='text-center'>            
        <h1>Lets Play</h1>
      </Container>
    );
  }
}

export default Play;