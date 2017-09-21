import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer'
import Hogs from '../porkers_data'
import SelectBox from './SelectBox.js'

class App extends Component {

  constructor(){
    super();
    this.state={
      hogs: Hogs
    }
  }

  handleChange = (selection) =>{
  	
  	let hogs = this.state.hogs
  	
  	switch(selection){
  		
  		case 'Name':
 
  			this.setState({
  				hogs: hogs.sort((a, b) => {
    				var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
    					if (nameA < nameB) //sort string ascending
        					return -1 
    					if (nameA > nameB)
        				return 1
    				return 0 //default return value (no sorting)
				})
  			})
  			break

      	case "Weight":
        
       		this.setState({

         		hogs: hogs.sort((hog1, hog2) => {

           		let weight1 = hog1['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
           		let weight2 = hog2['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
           		
           		return weight1 - weight2

         		})
       		})
       		break

        case "Greased":

	        this.setState({
	          
		        hogs: Hogs.filter((hog) => {
		        	return hog.greased
		        })
	        })
        	break

      	case "Dry":		
	    	
	    	this.setState({

		      	hogs: Hogs.filter((hog) => {
		        	return !(hog.greased)
		      	})
	    	})
        	break

      	default:
	    	this.setState({hogs: Hogs})
	    	break
    }
}


  render() {
    return (
      <div className="App">
          <Nav/>

          <SelectBox filterHogs={this.handleChange}/>
          <HogContainer hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App

