import React, { Component } from 'react';

// components
import ReviewList from './ReviewList.jsx';
import ReviewForm from './ReviewForm';
import GoogleUIWrapper from './GoogleUIWrapper'

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
        </div>
          <GoogleUIWrapper />
          <h2>Team Members</h2>
          <ReviewForm />
      </div>
        );
    }
}
