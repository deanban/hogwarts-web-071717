import React from 'react';
import Hog from './Hog.js'

export default class HogContainer extends React.Component{

  allHogs = () => {
    return this.props.hogs.map(hog => {return <Hog {...hog}/>})
  }

  render(){

    return(
      <div className="ui link four stackable cards">
        {this.allHogs()}
      </div>
    )
  }
}
