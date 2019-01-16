import React from 'react'
import Spinner from '../spinner'
import {ListGroup, ListGroupItem} from 'reactstrap'


class ItemList extends React.Component {

  state = {
    itemList: [],
    loading: true,
  }

  componentDidMount() {
    const {getData} = this.props
    getData 
      .then((itemList) => this.setState({itemList, loading: false}) )
      .catch(this.onErrror)  
  }
  

  render() {
   
    const {itemList, loading} = this.state
    const {onItemSelected, activeItem=1} = this.props
    console.log('activeItem', activeItem)
    return  ( loading ? <Spinner /> :
      <ListGroup flush>
        {itemList.map((item) => {
          const {id, name} = item
          const label = this.props.children(item)
          return (
            <ListGroupItem
              action
              tag="button"
              type="button"
              key={id}
              active={activeItem.toString().toLowerCase() === id}
              onClick={() => onItemSelected(id)}
            >
              {label || name}
            </ListGroupItem>
          )
        })}
      </ListGroup>
    )
  }
}

export default ItemList
