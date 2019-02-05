import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import {PeopleDetails} from '../details/render-details'
import ErrorBoundry from '../error-boundry'
import SwapiService from '../../utils/swapi-service'
import {PeopleList} from '../list-nav'
import {SwapiServiceProvider} from '../provider'
import './style.css'

class PeoplePage extends React.Component {
  swapiService = new SwapiService()

  state = {
    currentItem: 1
  }

  
  onItemSelected = id => this.setState({currentItem: id})

  render() {
    const {currentItem, error, errorInfo} = this.state
    return error ? (
      <div>`Component is failed ${errorInfo}`</div>
    ) : (
      <SwapiServiceProvider value={this.swapiService}>
        <Container style={{marginTop: '36px'}}>
          <Row>
            <Col xs="4">
              <PeopleList
                onItemSelected={this.onItemSelected}
                activeItem={currentItem}
              />
            </Col>
            <Col xs="8">
              <ErrorBoundry>
                <PeopleDetails
                  activeItem={currentItem}
                />
              </ErrorBoundry>
            </Col>
          </Row>
        </Container>
      </SwapiServiceProvider>
    )
  }
}

export default PeoplePage
