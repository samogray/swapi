import React from 'react'
import Header from './components/header'
import RandomPlanet from './components/random-planet'
import {Container} from 'reactstrap'
import SwapiService from './utils/swapi-service'
import {SwapiServiceProvider} from './components/provider'
import {PeoplePage, Home} from './components/pages'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const swapiService = new SwapiService()
const App = () => {
  return (
    <SwapiServiceProvider value={swapiService}>
      <Router>
        <div>
          <Container>
            <Header />
            <RandomPlanet />
            <main>
              <Route path="/" exact component={Home} />
              <Route path="/people" exact component={PeoplePage} />
              <Route path="/people/:id" component={PeoplePage} />
            </main>
          </Container>
        </div>
      </Router>
    </SwapiServiceProvider>
  )
}

export default App
