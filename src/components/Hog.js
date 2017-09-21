import React from 'react'

export default class Hog extends React.Component{

	constructor(){
		super()

		this.state={
      		display: false
    	}
	}

	handleClick = () => {
    	this.setState({
      	display: !(this.state.display)
    	})
  	}

	greasedOrNot = () =>{
		return this.props.greased ? 'Yes' : 'Oil me baby!'
	}

	hogImage = () => {
    	let hogName = this.props.name.replace(/\s/g, '_') + '.jpg'
    	return `./hog-imgs/${hogName}`
  }

	render(){
		return(
			<div className='fade' onClick={this.handleClick}>
				<div className='pigTile'>
					<div className="">
	          			<img src={this.hogImage()}/>
	        		</div>
	        		 <div className="hoggyText">{this.props.name}</div>
				   { this.state.display ? <div>
		            	<p className='subtleText'>Specialty: {this.props.specialty}</p>
		            	<p className='normalText'>Greased: {this.greasedOrNot()}</p>
		            	<p className='normalText'>Weight as a ratio: {this.props["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</p>
		            	<p className='achievementText'>Highest Medal Achieved: {this.props['highest medal achieved']}</p>
		          	</div>
		          	
		          	: null}

		        	</div>

		    </div>
	    )
	}
}
