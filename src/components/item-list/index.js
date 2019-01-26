import React from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'


const ItemList = ({data=[], children, onItemSelected, activeItem = 1}) => {
  return (
    <ListGroup flush>
      {data.map(item => {
        const {id, name} = item
        const label = children(item)
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



export default ItemList
