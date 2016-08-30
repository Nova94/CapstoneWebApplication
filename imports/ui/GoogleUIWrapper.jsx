import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

export default class GoogleUIWrapper extends Component {
    componentDidMount() {
        // Use Meteor Blaze to render login buttons
        this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));
    }

    componentWillUnmount() {
        Blaze.remove(this.view);
    }

    render() {
        const signInStyles = {
            'float': 'right',
            'verticalAlign': 'middle'
        };
    
        // Just render a placeholder container that will be filled in
        return <span style={signInStyles} ref="container" />;
    }
}
