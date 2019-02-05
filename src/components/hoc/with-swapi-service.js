import React from 'react'
import {SwapiServiceConsumer} from '../provider'

const WithSwapiService = (Component, mapMetodtsProps) => {
  return (props) => <SwapiServiceConsumer>
      {(swapiService) => {
        const serviceProps = mapMetodtsProps(swapiService)
        return <Component {...serviceProps} {...props}/>
      }}
  </SwapiServiceConsumer>
}

export default WithSwapiService
