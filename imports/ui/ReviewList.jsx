import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Users } from '../api/users.js';

import User from './User.jsx';

export default class ReviewList extends Component {
    renderTeam() {
        return this.props.users.map((user) => {
            return (<User key={user._id} user={user}/>);
        });
    }
    
    render() {
        return (
            <ul>
                {this.renderTeam()}
            </ul>
        );
    }
}
export default createContainer(() => {
    const teamId = 1;

    return {
        users: Users.find({teamId: teamId}).fetch()
    };
}, ReviewList);

ReviewList.propTypes = {};