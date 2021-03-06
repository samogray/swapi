import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import {PeopleDetails} from '../../details/render-details'
import ErrorBoundry from '../../error-boundry'
import {PeopleList} from '../../list-nav'
import {withRouter} from 'react-router-dom'
import './style.css'

class PeoplePage extends React.Component {
  onItemSelected = (itemId) => {
    this.props.history.push(`/people/${itemId}`)
  }

  render() {
    const {id=1} = this.props.match.params
    return (
      <Container style={{marginTop: '36px'}}>
        <Row>
          <Col xs="4">
            <PeopleList
              onItemSelected={this.onItemSelected}
              activeItem={id}
            />
          </Col>
          <Col xs="8">
            <ErrorBoundry>
              <PeopleDetails activeItem={id} />
            </ErrorBoundry>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default withRouter(PeoplePage)
