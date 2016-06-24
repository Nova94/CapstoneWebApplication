import React, { Component } from 'react';

import { createContainer } from 'meteor/react-meteor-data';
import { Users } from '../api/users.js';
import User from './User.jsx';
import GoogleUIWrapper from './GoogleUIWrapper'


// App component - represents the whole app
export default class App extends Component {
    renderUsers() {
        return this.props.users.map((user) => {
            console.log(user);
            return (<User key={user._id} user={user}/>);
        });
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>User List</h1>
                </header>

                <GoogleUIWrapper />

                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        );
    }
}

export default createContainer(() => {
    return {
        users: Users.find({}).fetch()
    };
}, App);
