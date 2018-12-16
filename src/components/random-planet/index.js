import React from 'react'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Col
} from 'reactstrap'

import Spinner from '../spinner'

import SwapiService from '../../utils/swapi-service'

class RandomPlanet extends React.Component {
  swapiService = new SwapiService()

  state = {
    planet: {},
    loading: true,
    error: false,
  }

  componentDidMount() {
    const id = Math.floor(Math.random() * 25) + 2
    this.updatePlanet(id)
  }

  onPlanetLoaded = planet => this.setState({planet, loading: false})

  onErrror = () => this.setState({error: true, loading: false})

  updatePlanet = id =>
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onErrror)

  render() {

    const {
      population,
      name,
      rotation,
      diameter,
      pic
    } = this.state.planet

    return (
      <div>
        <Card>
          <Container>
            {!this.state.error ? (
              <Row>
                <Col xs="3">
                  <CardImg top width="100%" src={pic} alt={name} />
                </Col>
                <Col xs="8">
                  <CardBody>
                    <CardTitle>
                      <span>Name: </span>
                      <span>{name}</span>
                    </CardTitle>
                    <ListGroup>
                      <ListGroupItem>
                        <span>Population: </span>
                        <span>{population}</span>
                      </ListGroupItem>
                      <ListGroupItem>
                        <span>Rotation Period :</span>
                        <span>{rotation}</span>
                      </ListGroupItem>
                      <ListGroupItem>
                        <span>Diameter :</span>
                        <span>{diameter}</span>
                      </ListGroupItem>
                    </ListGroup>
                  </CardBody>
                </Col>
              </Row>
            ) : (
              <div>Error message</div>
            )}
            {this.state.loading && <Spinner />}
          </Container>
        </Card>
      </div>
    )
  }
}

export default RandomPlanet
