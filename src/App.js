import React, {Component} from 'react'
import Header from './components/header'
import RandomPlanet from './components/random-planet'
import PeoplePage from './components/people-page'
import {Container} from 'reactstrap'

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Header />
          <main>
            <RandomPlanet />
          </main>
        </Container>
       <PeoplePage />
      </div>
    )
  }
}

export default App
