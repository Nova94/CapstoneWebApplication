import React, { Component } from 'react';

// components
import ReviewForm from './forms/ReviewForm';
import ResumeForm from './forms/ResumeForm';
import { Button } from 'react-bootstrap';
import StudentDashboard from './student/StudentDashboard';

import GoogleUIWrapper from './GoogleUIWrapper';
import { Reviews } from '../api/reviews'; //Do Not Remove
import { Resumes } from '../api/resumes'; //Do Not Remove

Template.registerHelper("Reviews", Reviews);
Template.registerHelper("Resumes", Resumes);

// App component - represents the whole app
export default class App extends Component {
    render() {
        return (
            <div>
                <div id="banner">
                    <div id="psuBarIcon"></div>
                    <p id="psuHeaderText">Portland State University Capstone Website</p>
                </div>
                <GoogleUIWrapper />
                <br></br>
                <br></br>
                <StudentDashboard/>
            </div>
        );
    }
}
