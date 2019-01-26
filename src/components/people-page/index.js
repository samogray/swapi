import React from 'react'
import {Container, Row, Col, ListGroupItem} from 'reactstrap'
import ItemList from '../item-list'
import ItemDetails from './details'
import ErrorBoundry from '../error-boundry'
import SwapiService from '../../utils/swapi-service'
import {PeopleList, StarshipsList} from '../list-nav'
import {Fragment} from 'react'
import './style.css'

class PeoplePage extends React.Component {
  swapiService = new SwapiService()

  state = {
    currentItem: 1
  }

  renderPersonDetails = ({birthYear, gender, height, eyeColor}) => (
    <Fragment>
      <ListGroupItem>Birth Year: {birthYear}</ListGroupItem>
      <ListGroupItem>Gender: {gender}</ListGroupItem>
      <ListGroupItem>Height: {height}</ListGroupItem>
      <ListGroupItem>Eye color: {eyeColor}</ListGroupItem>
    </Fragment>
  )

  renderPlanetsDetails = ({population, rotation, diameter}) => (
    <Fragment>
      <ListGroupItem>Population: {population}</ListGroupItem>
      <ListGroupItem>rotation: {rotation}</ListGroupItem>
      <ListGroupItem>diameter: {diameter}</ListGroupItem>
    </Fragment>
  )

  onItemSelected = id => this.setState({currentItem: id})

  render() {
    const {currentItem, error, errorInfo} = this.state
    return error ? (
      <div>`Component is failed ${errorInfo}`</div>
    ) : (
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
              <ItemDetails
                getData={this.swapiService.getPerson}
                getImageUrl={this.swapiService.getPersonImg}
                activeItem={currentItem}
                renderDetails={this.renderPersonDetails}
              />
              {/* <ItemDetails
                getData={this.swapiService.getPlanet}
                getImageUrl={this.swapiService.getPlanetImg}
                activeItem={currentItem}
                renderDetails={this.renderPlanetsDetails}
              /> */}
            </ErrorBoundry>
          </Col>
        </Row>
        <br />
        <br />
        {/* <Row>
          <Col xs="4">
            <ItemList
              getData={this.swapiService.getAllPlanets()}
              onItemSelected={this.onItemSelected}
              //activeItem={currentItem}
            />
          </Col>
           <Col xs="8">
            <Details personId={currentItem}/>
          </Col>
        </Row> */}
      </Container>
    )
  }
}

export default PeoplePage
