import React from 'react';
import Container from 'react-bootstrap/Container';


class Welcome extends React.Component {
  render() {
    return (
      <Container className='text-center'>
        <div>
            <h1>Love Letters</h1>
            <p>Love Letter is a card game introduced in May 2012 and designed by Seiji Kanai. Each player aims to deliver a love letter to the Princess with the assistance of relatives and acquaintances.</p>
        </div>
        <div>
            <p>Sign in or Sign up here</p>
        </div>
        <div>
            <p>@nonisaurus</p>
            <div>
                <p>instagram icon</p>
                <p>linked in icon</p>
                <p>github icon</p>
            </div>
        </div>
      </Container>
    );
  }
}

export default Welcome;
