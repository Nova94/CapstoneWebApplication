import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {Blaze} from 'meteor/blaze';
import {Template} from 'meteor/templating';

import { Users } from '../api/users.js';

import User from './User.jsx';

export default class ReviewForm extends Component {

    componentDidMount() {
        // Use Meteor Blaze to render login buttons
        this.view = Blaze.renderWithData(
            Template.autoForm,
            this.props,
            ReactDOM.findDOMNode(this.refs.container)
        );
    }

    componentWillUnmount() {
        Blaze.remove(this.view);
    }

    render() {
        // Just render a placeholder container that will be filled in
        return <span ref="container" />;
    }
}
