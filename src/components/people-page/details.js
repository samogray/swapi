import React from 'react'
import {ListGroup, ListGroupItem, Media} from 'reactstrap'
import Spinner from '../spinner'

import SwapiService from '../../utils/swapi-service'


class Details extends React.Component {
  swapiService = new SwapiService()

  state = {
    error: false,
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

  render() {
    const {name, birthYear, height, eyeColor, gender, loading, pic} = this.state
    console.log('render Details component')

    return (
      loading ? <Spinner /> : <Media>
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
        </Media>
      </Media>
    )
  }
}

export default Details
