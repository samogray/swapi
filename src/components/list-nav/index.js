import React from 'react'
import SwapiService from '../../utils/swapi-service'
import withData from '../hoc/get-data'
import ItemList from '../item-list'

const {getAllPeople, getAllStarships} = new SwapiService()

const Wrapped = (Wrap, renderFn) => (props) => <Wrap {...props}>{renderFn}</Wrap>

const renderPersonList = Wrapped(ItemList,
({name, gender}) => (
  <span>
    {name} <strong>{gender}</strong>
  </span>
))

const renderStarShipList = Wrapped(ItemList,
({name}) => (
  <span>
    {name}
  </span>
))

export const PeopleList = withData(renderPersonList, getAllPeople)
export const StarshipsList = withData(renderStarShipList, getAllStarships)
