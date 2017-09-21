import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
// import Hogs from '../porkers_data.js'
import HogContainer from './HogContainer.js'
import Hog from './Hog.js'
import Hogs from '../porkers_data'

class App extends Component {
  constructor(){
    super()

    this.state = {
      hogs: Hogs
    }
  }




  render() {
    return (
      <div className="App">
        <Nav/>
        <HogContainer hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;

