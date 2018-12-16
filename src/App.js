import React, {Component} from 'react'
import Header from './components/header'
import RandomPlanet from './components/random-planet'
import {Container} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <main>
         <RandomPlanet />
        </main>
      </Container>
    )
  }
}

export default App
