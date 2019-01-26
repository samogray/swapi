import React from 'react'
import {ListGroup, ListGroupItem, Media, Button} from 'reactstrap'
import Spinner from '../spinner'

import SwapiService from '../../utils/swapi-service'

class ItemDetails extends React.Component {
  swapiService = new SwapiService()

  state = {
    //hasError: false,
    loading: true,
    item: null,
    image: null,
  }

  componentDidMount() {
    this.loadItem()
  }

  componentDidUpdate(prevProps) {
    if (this.props.activeItem !== prevProps.activeItem) {
      this.setState({loading: true})
      this.loadItem()
    }
  }

  loadItem = () => {
    const {activeItem=1, getData, getImageUrl} = this.props
    if (!activeItem) {
      return
    }

    getData(activeItem).then((item) => this.setState({
      item,
      loading: false,
      image: getImageUrl(item)
    }))
    .catch(this.onErrror)
  }

  render() {
    if (this.state.handleError) {
      this.foo()
    }

    const {
      item,
      loading,
      image,
    } = this.state


    return loading ? (
      <Spinner />
    ) : (
      <Media>
        <Media left href="#">
          <Media
            object
            src={image}
            className="picture"
            alt="Generic placeholder image"
          />
        </Media>
        <Media body>
          <Media heading>name: {item.name}</Media>
          <ListGroup>
            {this.props.renderDetails(item)}
          </ListGroup>
          <Button onClick={this.handleError}>Generate error</Button>
        </Media>
      </Media>
    )
  }
}

export default ItemDetails
