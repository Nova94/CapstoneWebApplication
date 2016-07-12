import React, { Component } from 'react';

// components
// import GoogleUIWrapper from './GoogleUIWrapper'
import ReviewList from './ReviewList.jsx';
import ReviewForm from './ReviewForm';
import { Reviews360 } from '../api/reviews360';


// App component - represents the whole app
export default class App extends Component {
    getReviewContent() {
        return (<ReviewList/>);
    }

    getReview360() {
        console.log(Reviews360);
        return Reviews360;
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
               <ReviewForm id="ReviewFormTemplate" collection={ this.getReview360() } type="insert"/>
           </div>
        );
    }
}
