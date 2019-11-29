//  封装的react路由守卫
 import React, { Component } from 'react'
 import local from '../api'
  const withTest = WrappedComponent => {
      return class extends Component{
        async componentWillMount() {
              let Authorization = localStorage.getItem('Authorization')
             local.get('/verify',{
                headers: {
                    Authorization
                }
             })
          }
          render() {
              return <WrappedComponent data={this.state.data} {...this.props} /> 
          }
      }
  }
  export default withTest