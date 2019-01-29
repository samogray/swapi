import React from 'react'
import {ListGroup, Media} from 'reactstrap'

const Details = ({data, data: {name}, children, image}) => (
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
      <Media heading>name: {name}</Media>
      <ListGroup>{children(data)}</ListGroup>
    </Media>
  </Media>
)

export default Details

