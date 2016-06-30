import React, { Component, PropTypes } from 'react';

// User component - represents a single user
export default class User extends Component {
    handleOnClick() {
        console.log(this.props.user.firstName);
    }

    getName() {
        return this.props.user.firstName;
    }
    render() {
        return (
            <li onClick={this.handleOnClick.bind(this)}>
                {this.getName()}
            </li>
        );
    }
}

User.propTypes = {
    // This component gets the user's name to display through a React prop.
    // We can use propTypes to indicate it is required
    user: PropTypes.object.isRequired
};