import React from 'react'
import withIdData from '../hoc/get-data-id'
import withSwapiService from '../hoc/with-swapi-service'
import {ListGroupItem} from 'reactstrap'
import {Fragment} from 'react'

import Details from './index'


const Wrapped = (Wrap, renderFn) => props => <Wrap {...props}>{renderFn}</Wrap>

const renderPersonDetails = Wrapped(
  Details,
  ({birthYear, gender, height, eyeColor}) => (
    <Fragment>
      <ListGroupItem>Birth Year: {birthYear}</ListGroupItem>
      <ListGroupItem>Gender: {gender}</ListGroupItem>
      <ListGroupItem>Height: {height}</ListGroupItem>
      <ListGroupItem>Eye color: {eyeColor}</ListGroupItem>
    </Fragment>
  )
)

const renderStarShipDetails = Wrapped(
  Details,
  ({name, model, starshipClass}) => console.log(name, model, starshipClass) || (
    <Fragment>
      <ListGroupItem>Name: {name}</ListGroupItem>
      <ListGroupItem>Model: {model}</ListGroupItem>
      <ListGroupItem>Starship Class: {starshipClass}</ListGroupItem>
    </Fragment>
  )
)

const renderPlanetsDetails= Wrapped(
  Details,
  ({population, rotation, diameter}) => (
    <Fragment>
      <ListGroupItem>Population: {population}</ListGroupItem>
      <ListGroupItem>rotation: {rotation}</ListGroupItem>
      <ListGroupItem>diameter: {diameter}</ListGroupItem>
    </Fragment>
  )
)

const mapPersonDetails = (swapiService) => ({
  getData: swapiService.getPerson,
  getImageUrl: swapiService.getPersonImg
})

const mapPlanetDetails = (swapiService) => ({
  getData: swapiService.getPlanet,
  getImageUrl: swapiService.getPlanetImg
})

const mapStarShipDetails = (swapiService) => ({
  getData: swapiService.getStarship,
  getImageUrl: swapiService.getStarshipImg
})

export const PeopleDetails = withSwapiService(
  withIdData(renderPersonDetails),
  mapPersonDetails
)

export const PlanetDetails =  withSwapiService(
  withIdData(renderPlanetsDetails),
  mapPlanetDetails
)

export const StarShipDetails =  withSwapiService(
  withIdData(renderStarShipDetails),
  mapStarShipDetails
)
