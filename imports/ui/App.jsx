import React, {Component} from 'react';
import GoogleUIWrapper from './GoogleUIWrapper';
import {Reviews} from '../api/reviews'; //Do Not Remove
import {Resumes} from '../api/resumes'; //Do Not Remove
import {Nav, NavItem} from 'react-bootstrap';
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory } from 'react-router'

Template.registerHelper("Reviews", Reviews);
Template.registerHelper("Resumes", Resumes);

// App component - represents the whole app
export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTab: 1
        };
    }

    componentDidUpdate () {
        // make sure the current selected tab is aligned with the current path
        const currentPath = this.props.location.pathname;
        if(this.state.currentTab !== 2 && (currentPath === '/admin' || currentPath === '/student')) {
            this.setState({currentTab: 2});
        }
    }

    handleNavSelect (selectedKey) {
        this.setState({currentTab:selectedKey});
        if(selectedKey === 1) {
            browserHistory.push('/')
        } else if(selectedKey === 2) {
            if (this.props.user && this.props.user.role === 'admin') {
                browserHistory.push('/admin')
            } else {
                browserHistory.push('/student')
            }
        }
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
        const navBarStyles = {
            'verticalAlign': 'middle'
        };

        const psuIconStyle = {'height':'25px', 'width':'25px', 'marginRight': '10px'};
        return (
            <div style={{'margin': '10px'}}>
                <div style={headerStyle}>
                    <img  style={psuIconStyle} src="/img/psuIcon.png"/>
                    PSU Capstone Website
                </div>
                <link rel="icon" sizes="16x16 32x32" href="/favicon.ico"/>
                <Nav style={navBarStyles} bsStyle="tabs" activeKey={this.state.currentTab} onSelect={this.handleNavSelect.bind(this)}>
                    <NavItem eventKey={1}>Home</NavItem>
                    <NavItem eventKey={2}>Dashboard</NavItem>
                    <GoogleUIWrapper />
                </Nav>

                <div style={{'backgroundColor': 'white', 'padding': '20px'}}>
                    {this.props.children}
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
