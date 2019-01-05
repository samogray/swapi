import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import ItemList from './item-list'
import Details from './details'
import SwapiService from '../../utils/swapi-service'
import './style.css'

class PeoplePage extends React.Component {
  swapiService = new SwapiService()

  state = {
    peoples: [],
    error: false,
    currentPerson: 1,
    loading: true,
  }

  componentDidMount() {
    this.loadPeopleList()
  }

  onPeoplesLoaded = peoples => this.setState({
    peoples,
    loading: false,
  })

  onErrror = () => this.setState({error: true, loading: false})

  loadPeopleList = () =>
    this.swapiService
      .getAllPeople()
      .then(this.onPeoplesLoaded)
      .catch(this.onErrror)

  handleClick = (id) => this.setState({currentPerson: id})

  render() {
    const {peoples, currentPerson, error} = this.state
    return (
      error ? <div>Component is failed</div> : <Container style={{marginTop: '36px'}}>
        <Row>
          <Col xs="4">
            <ItemList
              items={peoples}
              activeItem={currentPerson}
              handleClick={this.handleClick}
            />
          </Col>
           <Col xs="8">
            <Details personId={currentPerson}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default PeoplePage
