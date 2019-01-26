import React from 'react'
import Spinner from '../spinner'


const withData = (Component, getData) => {
  return class extends React.Component {
      state = {
        data: null,
        loading: true,
      }

      componentDidMount() {
        getData().then((data) => this.setState({data, loading: false})).catch(this.onErrror)  
      }

      render() {
        const {loading, data} = this.state
        return loading ? <Spinner/> : <Component {...this.props} data={data}/>
      }
  }
}

export default withData
