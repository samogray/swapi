import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import {StarShipDetails} from '../../details/render-details'
import ErrorBoundry from '../../error-boundry'
import {StarshipsList} from '../../list-nav'
import {withRouter} from 'react-router-dom'

class StarshipsPage extends React.Component {
  onItemSelected = (itemId) => {
    this.props.history.push(`/starships/${itemId}`)
  }

  render() {
    const {id=15} = this.props.match.params
    return (
      <Container style={{marginTop: '36px'}}>
        <Row>
          <Col xs="4">
            <StarshipsList
              onItemSelected={this.onItemSelected}
              activeItem={id}
            />
          </Col>
          <Col xs="8">
            <ErrorBoundry>
              <StarShipDetails activeItem={id} />
            </ErrorBoundry>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default withRouter(StarshipsPage)
