import React from 'react'
import withData from '../hoc/get-data'
import withSwapiService from '../hoc/with-swapi-service'
import ItemList from '../item-list'

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

const renderPlanetList = Wrapped(ItemList,
({name}) => (
  <span>
    {name}
  </span>
))

const mapPersonMetodtsToProps = (swapiService) => ({
  getData: swapiService.getAllPeople,
})

const mapStarShipsMetodtsToProps = (swapiService) => ({
  getData: swapiService.getAllStarships,
})

const mapPlanetsMetodtsToProps = (swapiService) => ({
  getData: swapiService.getAllPlanets,
})

export const PeopleList = withSwapiService(withData(renderPersonList), mapPersonMetodtsToProps)
export const StarshipsList = withSwapiService(withData(renderStarShipList), mapStarShipsMetodtsToProps)
export const PlanetsList = withSwapiService(withData(renderPlanetList), mapPlanetsMetodtsToProps)
