import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import ItemList from './item-list'
import Details from './details'
import SwapiService from '../../utils/swapi-service'
import './style.css'

class PeoplePage extends React.Component {
  swapiService = new SwapiService()

  state = {
    error: false,
    currentItem: 1,
    loading: true,
    errorInfo: '',
  }

  componentDidMount() {
    //this.loadPeopleList()
  }

  onPeoplesLoaded = peoples => this.setState({
    peoples,
  })

  onErrror = (errorInfo) => this.setState({error: true, loading: false, errorInfo})

  componentDidCatch(error, errorInfo) {
    console.log('componentDidCatch', error, errorInfo)
    this.onErrror(`${error.toString()}${errorInfo.componentStack.toString()}`)
  }

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
            />
          </Col>
           <Col xs="8">
            <Details personId={currentItem}/>
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            <ItemList
              getData={this.swapiService.getAllPlanets()}
              // handleClick={this.handleClick}
            />
          </Col>
           <Col xs="8">
            <Details personId={currentItem}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default PeoplePage
