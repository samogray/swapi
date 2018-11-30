export default class Swapi {
  _URL = 'https://swapi.co/api/'

  getResource = async url => {
    const response = await fetch(`${this._URL}${url}`)
    if (!response.ok) {
      throw new Error (`Error fetching data from ${this._URL}${url}, ${response.status}`)
    }
    return  await response.json()
  }

  getPerson = (id) =>  this.getResource(`people/${id}/`)

  getAllPeaple = async () => {
    const {results} = await this.getResource(`people/`)
    return results
  }
}
