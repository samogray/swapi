import React from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'

class ItemList extends React.Component {
  render() {
    const {items, activeItem, handleClick} = this.props
    return (
      <ListGroup flush>
        {items.map(({name, id}) => (
          <ListGroupItem
            action
            tag="button"
            type="button"
            key={id}
            active={activeItem === id}
            onClick={() => handleClick(id)}
          >
            {name}
          </ListGroupItem>
        ))}
      </ListGroup>
    )
  }
}

export default ItemList
