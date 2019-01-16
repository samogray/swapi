import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import ItemList from './item-list'
import Details from './details'
import ErrorBoundry from '../error-boundry'
import SwapiService from '../../utils/swapi-service'
import './style.css'

class PeoplePage extends React.Component {
  swapiService = new SwapiService()

  state = {
    currentItem: 1,
    loading: true,
  }

  componentDidMount() {
    //this.loadPeopleList()
  }

  onPeoplesLoaded = peoples => this.setState({
    peoples,
  })


  onItemSelected = (id) => this.setState({currentItem: id})

  render() {
    const {peoples, currentItem, error, errorInfo} = this.state
    return (
      error ? <div>`Component is failed ${errorInfo}`</div> : <Container style={{marginTop: '36px'}}>
        <Row>
          <Col xs="4">
            <ItemList
              getData={this.swapiService.getAllPeople()}
              onItemSelected={this.onItemSelected}
              activeItem={currentItem}
            >
              {({name, gender}) => <span>{name} <strong>{gender}</strong></span>}
            </ItemList>
          </Col>
           <Col xs="8">
           <ErrorBoundry>
              <Details personId={currentItem}/>
            </ErrorBoundry>
          </Col>
        </Row>
        <br/>
        <br/>
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
