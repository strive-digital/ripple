import React, { Component } from 'react'
import { render } from 'react-dom'


class Root extends Component {
  render() {
    return (
      <div> Hello World </div>
    )
  }
}


render(<Root />, document.getElementById('root'))
