import React from 'react'
import {Container, Row, Col, ListGroup, ListGroupItem, Media} from 'reactstrap'
import ItemList from './item-list'
// import PeoopleDetails from './details'
import SwapiService from '../../utils/swapi-service'

class PeoplePage extends React.Component {
  swapiService = new SwapiService()

  state = {
    peoples: [],
    error: false,
    activeHero: 1,
  }

  componentDidMount() {
    this.loadPeopleList()
  }

  onPlanetLoaded = peoples => this.setState({peoples, loading: false})

  onErrror = () => this.setState({error: true, loading: false})

  loadPeopleList = () =>
    this.swapiService
      .getAllPeople()
      .then(this.onPlanetLoaded)
      .catch(this.onErrror)

  handleClick = (id) => this.setState({activeHero: id})

  render() {
    console.log(this.state.peoples)
    const {peoples, activeHero, error} = this.state
    return (
      error ? <div>Component is failed</div> : <Container style={{marginTop: '36px'}}>
        <Row>
          <Col xs="4">
            <ItemList
              items={peoples}
              activeItem={activeHero}
              handleClick={this.handleClick}
            />
          </Col>
           <Col xs="8">
          {/* <PeoopleDetails /> */}
            <Media>
              <Media left href="#">
                <Media
                  object
                  data-src="holder.js/64x64"
                  alt="Generic placeholder image"
                />
              </Media>
              <Media body>
                <Media heading>Luk</Media>
                <ListGroup>
                  <ListGroupItem>Cras justo odio</ListGroupItem>
                  <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                  <ListGroupItem>Morbi leo risus</ListGroupItem>
                  <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                  <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
              </Media>
            </Media>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default PeoplePage
