import React, {useState} from 'react'
import Header from './components/header'
import RandomPlanet from './components/random-planet'
import {Container} from 'reactstrap'
import SwapiService from './utils/swapi-service'
import {SwapiServiceProvider} from './components/provider'
import {PeoplePage, Home, StarShipPage, PlanetPage, Login, SecretPage} from './components/pages'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Redirect} from 'react-router'
const swapiService = new SwapiService()


class App extends React.Component {
  state = {
    loggedIn: false
  }
  onLogin = () => this.setState({loggedIn: true})

  render() {
    const {loggedIn} = this.state
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
              <Route path="/starships" exact component={StarShipPage} />
              <Route path="/starships/:id" component={StarShipPage} />
              <Route path="/planets" exact component={PlanetPage} />
              <Route path="/planets/:id" component={PlanetPage} />
              <Route path="/login" render={() => <Login loggedIn={loggedIn} onLogin={this.onLogin} />} />
              <Route
                path="/secret-page"
                render={() => <SecretPage loggedIn={loggedIn} />}
              />
            </main>
          </Container>
        </div>
      </Router>
    </SwapiServiceProvider>
  )
  }
}

export default App
