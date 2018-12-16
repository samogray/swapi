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

import SwapiService from '../../utils/swapi-service'

const PIC_URL = 'https://starwars-visualguide.com/assets/img/planets/'
class RandomPlanet extends React.Component {

  swapiService = new SwapiService()

  state = {
    population: null,
    name: '',
    rotation: null,
    diameter: null,
  }

  componentDidMount() {
    const id = Math.floor(Math.random() * 25) + 2
    this.updatePlanet(id)
  }

  updatePlanet = (id) => this.swapiService.getPlanet(id)
  .then(({name, rotation_period, diameter, population}) => {
    this.setState({
      id,
      name,
      population,
      rotation: rotation_period,
      diameter,
    })
  })
  .catch(err => console.error(err))


  render() {
    const {population, name, rotation, diameter, id} = this.state
    console.log(this.state)
    return (
      <div>
        <Card>
          <Container>
            <Row>
              <Col xs="3">
                <CardImg
                  top
                  width="100%"
                  src={`${PIC_URL}/${id}.jpg`}
                  alt="Card image cap"
                />
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
          </Container>
        </Card>
      </div>
    )
  }
}

export default RandomPlanet
