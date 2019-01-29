import React from 'react'
import SwapiService from '../../utils/swapi-service'
import withIdData from '../hoc/get-data-id'
import {ListGroupItem} from 'reactstrap'
import {Fragment} from 'react'

import Details from './index'

const {getPerson, getPersonImg, getPlanetImg, getPlanet} = new SwapiService()

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

const renderPlanetsDetails = Wrapped(
  Details,
  ({population, rotation, diameter}) => (
    <Fragment>
      <ListGroupItem>Population: {population}</ListGroupItem>
      <ListGroupItem>rotation: {rotation}</ListGroupItem>
      <ListGroupItem>diameter: {diameter}</ListGroupItem>
    </Fragment>
  )
)

export const PeopleDetails = withIdData(
  renderPersonDetails,
  getPerson,
  getPersonImg
)
export const PlanetDetails = withIdData(
  renderPlanetsDetails,
  getPlanet,
  getPlanetImg
)
