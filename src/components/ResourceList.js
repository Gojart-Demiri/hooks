import React from 'react'
import Axios from 'axios';

class ResourceList extends React.Component {

    state = {
        data: false 
    }
    async componentDidMount() {
        const { resource } = this.props
        const response = await Axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
      this.setState ({
          data:response.data
      })

    }

    async componentDidUpdate() {
        const { resource } = this.props
        const response = await Axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
      this.setState ({
          data:response.data
      })
    }
    render() {
        return (
            <div>
            {this.state.data &&
            this.state.data.map((item,index) => (
                <div key={index}>{item.title}</div>
            )
            )}</div>
        )
    }

}

export default ResourceList;