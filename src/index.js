import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import swapiService from './utils/swapi-service'

const swapi = new swapiService()

swapi.getPerson(1)
.then(data => console.log(data))
.catch(err => console.error(err))

ReactDOM.render(<App />, document.getElementById('root'));
