import React, { Component } from 'react'

export default class SelectBox extends React.Component{

	handleChange = (event)=>{
		this.props.filterHogs(event.target.value)
	}

	render(){
		return(
			<div>
				<select onChange={this.handleChange}>
		            <option value="">Sort</option>
		            <option value="Name">Name</option>
		            <option value="Weight">Weight</option>
	          </select>
	          <select onChange={this.handleChange}>
		            <option value="">Filter</option>
		            <option value="Greased">Greased</option>
		            <option value="Dry">Dry</option>
	          </select><br /><br />
	        </div>
		)
	}
} 

