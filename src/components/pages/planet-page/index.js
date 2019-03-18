import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import {PlanetDetails} from '../../details/render-details'
import ErrorBoundry from '../../error-boundry'
import {PlanetsList} from '../../list-nav'
import {withRouter} from 'react-router-dom'

class PlanetsPage extends React.Component {
  onItemSelected = (itemId) => {
    this.props.history.push(`/planets/${itemId}`)
  }

  render() {
    const {id=1} = this.props.match.params
    return (
      <Container style={{marginTop: '36px'}}>
        <Row>
          <Col xs="4">
            <PlanetsList
              onItemSelected={this.onItemSelected}
              activeItem={id}
            />
          </Col>
          <Col xs="8">
            <ErrorBoundry>
              <PlanetDetails activeItem={id} />
            </ErrorBoundry>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default withRouter(PlanetsPage)
