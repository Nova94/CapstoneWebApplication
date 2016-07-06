import React, { Component } from 'react';

// components
// import GoogleUIWrapper from './GoogleUIWrapper'
import ReviewList from './ReviewList.jsx';
import { Reviews } from '../api/reviews.js';


// App component - represents the whole app
export default class App extends Component {
    getReviewContent() {
        return (<ReviewList/>);
    }
    
    render() {
        return (
			<div className="container">
				<div id="navBar">  
					<div id="psuBarIcon"></div>
					<p id="psuHeaderText">Portland State University Capstone Website</p>
					<p id="psuLogin">Login</p>
				</div>
               
            	<h2>Team Members</h2>
               {this.getReviewContent()}
           </div>
        );
    }
}
