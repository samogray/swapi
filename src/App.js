import React, {Component} from 'react'
import Header from './components/header'
import RandomPlanet from './components/random-planet'
import HeroList from './components/hero-list'
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
       <HeroList />
      </div>
    )
  }
}

export default App
