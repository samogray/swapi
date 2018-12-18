import React from 'react'
import {Container, Row, Col, ListGroup, ListGroupItem, Media} from 'reactstrap'
import SwapiService from '../../utils/swapi-service'

class HeroList extends React.Component {
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
    const {peoples, activeHero} = this.state
    return (
      <Container style={{marginTop: '36px'}}>
        <Row>
          <Col xs="4">
            <ListGroup flush>
              {peoples.map(({name, id}) => (
                <ListGroupItem
                  action
                  tag="button"
                  type="button"
                  key={id}
                  active={activeHero === id}
                  onClick={() => this.handleClick(id)}
                >
                  {name}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col xs="8">
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

export default HeroList
