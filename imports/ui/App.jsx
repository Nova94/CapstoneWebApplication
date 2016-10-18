import React, {Component} from 'react';
import GoogleUIWrapper from './GoogleUIWrapper';
import {Reviews} from '../api/reviews'; //Do Not Remove
import {Resumes} from '../api/resumes'; //Do Not Remove
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data';
import AdminDashboard from './admin/AdminDashboard';
import StudentDashboard from './student/StudentDashboard';
import Homepage from './Homepage';
import NotFoundPage from './NotFoundPage';

Template.registerHelper("Reviews", Reviews);
Template.registerHelper("Resumes", Resumes);

// App component - represents the whole app
export default class App extends Component {
    constructor(props) {
        super(props);
    }

    getDashboard () {
        let component = <Homepage />;
        if (this.props.user) {
            switch (this.props.user.role) {
                case 'admin':
                    component = <AdminDashboard />;
                    break;
                case 'student':
                    component = <StudentDashboard />;
                    break;
                default:
                    component = <NotFoundPage />;
            }
        }
        return component;
    }

    render() {
        const footerStyle = {
            'display': 'block',
            'borderRadius': '0 0 10px 10px',
            'backgroundColor': '#6E8D25',
            'height': '50px',
            'width': 'auto'
        };

        const headerStyle = {
            'display': 'block',
            'padding': '15px',
            'color': 'white',
            'backgroundColor': '#6E8D25',
            'borderRadius': '10px 10px 0 0',
            'height': '50px',
            'width': 'auto'
        };

        const psuIconStyle = {'height':'25px', 'width':'25px', 'marginRight': '10px'};
        return (
            <div style={{'margin': '10px'}}>
                <div style={headerStyle}>
                    <img  style={psuIconStyle} src="/img/psuIcon.png"/>
                    PSU Capstone Website
                </div>
                <link rel="icon" sizes="16x16 32x32" href="/favicon.ico"/>

                <GoogleUIWrapper />

                <div style={{'backgroundColor': 'white', 'padding': '20px'}}>
                    {this.getDashboard()}
                </div>

                <div style={footerStyle}>
                    <p id="footerText">CS Capstone | PSU</p>
                </div>
            </div>
        );
    }
}

export default createContainer(() => ({
    user: Meteor.user()
}), App);
