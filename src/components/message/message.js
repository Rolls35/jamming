import React, { Component } from 'react';
import './message.css';
class Message extends Component {
	render(){
		const success = (<p>PlayList have been added successfully</p>)
		const fail = (<p>Error, Playlist not added</p>)
		let visibility = "none"
	    


		return(
			<div>
			<div className="border-message" style={{visibility:this.props.success !== null ? "visible" : "hidden", 
													color: this.props.success ? "green" : "red",
													borderColor: this.props.success ? "green" : "red" }
												}>
				{this.props.success ? success : fail }
			</div>
			</div>
			);
	  }

	}

export default Message;