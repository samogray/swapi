import React from 'react'
import {ListGroup, ListGroupItem, Media, Button} from 'reactstrap'
import Spinner from '../spinner'

import SwapiService from '../../utils/swapi-service'

class Details extends React.Component {
  swapiService = new SwapiService()

  state = {
    hasError: false,
    loading: true
  }

  componentDidMount() {
    this.loadPerson()
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.setState({loading: true})
      this.loadPerson()
    }
  }

  componentDidCatch() {
    console.log('componentDidCatch')
    this.setState({hasError: true})
  }

  onPersonLoaded = ({name, birthYear, height, eyeColor, gender, pic}) =>
    this.setState({
      name,
      birthYear,
      height,
      eyeColor,
      gender,
      pic,
      loading: false
    })

  loadPerson = () => {
    if (!this.props.personId) {
      return
    }

    this.swapiService
      .getPerson(this.props.personId)
      .then(this.onPersonLoaded)
      .catch(this.onErrror)
  }

  handleError = () => this.setState({handleError: true})

  render() {
    if (this.state.handleError) {
      this.foo()
    }

    const {
      name,
      birthYear,
      height,
      eyeColor,
      gender,
      loading,
      pic,
    } = this.state
    console.log('render Details component')

    return loading ? (
      <Spinner />
    ) : (
      <Media>
        <Media left href="#">
          <Media
            object
            src={pic}
            className="picture"
            alt="Generic placeholder image"
          />
        </Media>
        <Media body>
          <Media heading>name: {name}</Media>
          <ListGroup>
            <ListGroupItem>Birth Year: {birthYear}</ListGroupItem>
            <ListGroupItem>Gender: {gender}</ListGroupItem>
            <ListGroupItem>Height: {height}</ListGroupItem>
            <ListGroupItem>Eye color: {eyeColor}</ListGroupItem>
          </ListGroup>
          <Button onClick={this.handleError}>Generate error</Button>
        </Media>
      </Media>
    )
  }
}

export default Details
