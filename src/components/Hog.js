import React from 'react'

export default class Hog extends React.Component{

	greasedOrNot = () =>{
		return this.props.greased ? 'Yes' : 'Oil me baby!'
	}

	render(){
		return(
			<div className='pigTile'>
				<div className="header">{this.props.name}</div>
			    <div className="hogs">
	            	<p>Specialty: {this.props.specialty}</p>
	            	<p>Greased: {this.greasedOrNot()}</p>
	            	<p>Weight as a ratio: {this.props["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</p>
	            	<p>Highest Medal Achieved: {this.props['highest medal achieved']}</p>
	          	</div>
	        </div>
	    )
	}
}
