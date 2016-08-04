import React, { Component, PropTypes } from 'react';
import AdminInfoList from './AdminInfoList';

export default class AdminDashboard extends Component {
    constructor(props) {
        super(props);
    }

    getAdminData() {
        return {
            teams: [1,2,3,4,5],
            roles: ['admin', 'student', 'team lead'],
            students: [
            {
                name: 'testingNameOne',
				role: 'team leader',
				team: 3,
                email: 'test@gmail.com',
                mid360: {
                    completed: true,
                    id: 123
                },
                final360: {
                    completed: false,
                    id: 124
                },
				resume: {
					completed: false,
					id: 100
				},

            },
            {
                name: 'testingNameTwo',
				role: 'team member',
				team: 2,
                email: 'test@gmail.com',
                mid360: {
                    completed: true,
                    id: 123
                },
                final360: {
                    completed: false,
                    id: 124
                },
				resume: {
					completed: true,
					id: 100
				},
            },
        ]};
    }

    render() {
        if(!Meteor.user() || Meteor.user().role !== "admin") {
            return (
                <h2>NIce try hacker</h2>
            );
        }
        return (
            <div>
                <h2>Admin Dashboard</h2>
                <AdminInfoList data={this.getAdminData()}/>
            </div>
        );
    }
}
