import React from 'react'
import {ListGroup, ListGroupItem, Media, Button} from 'reactstrap'
import Spinner from '../spinner'

import SwapiService from '../../utils/swapi-service'

class ErrorBoundry extends React.Component {
  swapiService = new SwapiService()

  state = {
    hasError: false,
  }

  onErrror = (errorInfo) => this.setState({hasError: true, errorInfo})

  componentDidCatch(error, errorInfo) {
    console.log('componentDidCatch', error, errorInfo)
    this.onErrror(`${error.toString()}${errorInfo.componentStack.toString()}`)
  }

  render() {
    return this.state.hasError ? <div>{this.state.errorInfo}</div> : this.props.children
  }
}

export default ErrorBoundry
