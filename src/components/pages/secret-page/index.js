import React from 'react'
import {Link} from 'react-router-dom'


const SecretPage = ({loggedIn}) => loggedIn ?
<h1>Secret Page is open</h1> :
<h1>This page is closed, plese login  <Link to="/login"  className="btn btn-primary">Login page</Link>
</h1> 

export default SecretPage
