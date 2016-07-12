import React, { Component } from 'react';

// components
// import GoogleUIWrapper from './GoogleUIWrapper'
import ReviewList from './ReviewList.jsx';
import ReviewForm from './ReviewForm';
import { Reviews } from '../api/reviews';


// App component - represents the whole app
export default class App extends Component {
    getReviewContent() {
        return (<ReviewList/>);
    }

    getReviews() {
        console.log(Reviews);
        return Reviews;
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
               <ReviewForm />
           </div>
        );
    }
}
