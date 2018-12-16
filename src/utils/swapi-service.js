export default class Swapi {
  _URL = 'https://swapi.co/api/'
  PIC_URL = 'https://starwars-visualguide.com/assets/img/planets/'


  getResource = async url => {
    const response = await fetch(`${this._URL}${url}`)
    if (!response.ok) {
      throw new Error (`Error fetching data from ${this._URL}${url}, ${response.status}`)
    }
    return  await response.json()
  }

  getPerson = async (id) =>  {
    const people = await this.getResource(`people/${id}/`)
    return this._getTransformPeople(people)
  }

  getPlanet = async (id) =>  {
    const planet = await this.getResource(`planets/${id}/`)
    return this._getTransformPlanet(planet)
  }

  getStarship = async (id) =>  {
    const starShip = await this.getResource(`starships/${id}/`)
    return this._getTransformStarships(starShip)
  }

  getAllPeople = async () => {
    const {results} = await this.getResource(`people/`)
    return results.map(this._getTransformPeople)
  }

  getAllPlanets = async () => {
    const {results} = await this.getResource(`planets/`)
    return results.map(this._getTransformPlanet)
  }

  getAllStarships = async () => {
    const {results} = await this.getResource(`starships/`)
    return results.map(this._getTransformStarships)
  }

  _getTransformPlanet = ({url, name, population, rotation_period, diameter}) => ({
    id: this._getIdFromUrl(url),
    name,
    population,
    rotation: rotation_period,
    diameter,
    pic:`${this.PIC_URL}/${this._getIdFromUrl(url)}.jpg`
  })

  _getTransformPeople = ({url, name, height, mass, birth_year, gender}) => ({
    id: this._getIdFromUrl(url),
    name,
    height,
    birthYear: birth_year,
    mass,
    gender,
  })

  _getTransformStarships = ({url, name, model, manufacturer, cost_in_credits, passengers}) => ({
    id: this._getIdFromUrl(url),
    name,
    model,
    costInCredits: cost_in_credits,
    manufacturer,
    passengers,
  })

  _getIdFromUrl = (url) => {
    const idRegexp = /\/([0-9]*)\/$/
    return url.match(idRegexp)[1]
  }
 
}
