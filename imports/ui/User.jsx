import React, { Component, PropTypes } from 'react';

// User component - represents a single user
export default class User extends Component {
    render() {
        return (
            <li>Name: {this.props.user.firstName + ' ' + this.props.user.lastName}</li>
        );
    }
}

User.propTypes = {
    // This component gets the user's name to display through a React prop.
    // We can use propTypes to indicate it is required
    user: PropTypes.object.isRequired,
};