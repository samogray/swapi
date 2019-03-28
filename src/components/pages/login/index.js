import React from 'react'
import {Redirect} from 'react-router'

const SecretPage = ({loggedIn, onLogin}) =>
  loggedIn ? (
    <Redirect to="/secret-page" />
  ) : (
    <div>
      <div>
        <h1>Login Page</h1>
        <button className="btn btn-primary" onClick={onLogin}>
          Login
        </button>
      </div>
    </div>
  )
export default SecretPage
