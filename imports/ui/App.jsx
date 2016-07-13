import React, { Component } from 'react';

// components
import ReviewList from './ReviewList.jsx';
import ReviewForm from './ReviewForm';
import ResumeForm from './ResumeForm';
import GoogleUIWrapper from './GoogleUIWrapper';
import { Reviews } from '../api/reviews'; //Do Not Remove
import { Resumes } from '../api/resumes'; //Do Not Remove

// App component - represents the whole app
export default class App extends Component {
    getReviewContent() {
        return (<ReviewList/>);
    }

    render() {
        return (
            <div>
                <div id="banner">
                    <div id="psuBarIcon"></div>
                    <p id="psuHeaderText">Portland State University Capstone Website</p>
                </div>
                <GoogleUIWrapper />
                <h2>Team Members</h2>
                <ResumeForm />
                <ReviewForm />
            </div>
        );
    }
}
