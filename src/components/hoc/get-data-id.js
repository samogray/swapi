import React from 'react'
import Spinner from '../spinner'


const withIdData = (Component, getData, ...rest) => {
const [getImageUrl, ] = rest
  return class extends React.Component {
      state = {
        data: null,
        loading: true,
      }

      componentDidMount() {
        this.loadData();
      }

      componentDidUpdate(prevProps) {
        if (this.props.activeItem !== prevProps.activeItem) {
          this.setState({loading: true})
          this.loadData();
        }
      }

      loadData = () => getData(this.props.activeItem).then((data) => this.setState({
        data,
        loading: false,
        image: getImageUrl(data)
      })).catch(this.onErrror)


      render() {
        const {loading, data, image} = this.state
        return loading ? <Spinner/> : <Component {...this.props} data={data} image={image} />
      }
  }
}

export default withIdData
