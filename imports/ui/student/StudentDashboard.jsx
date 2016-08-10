import React, { Component, PropTypes } from 'react';
import StudentInfoList from './StudentInfoList';

export default class StudentDashboard extends Component {
    constructor(props) {
        super(props);
    }

    getStudentData() {
        return [
            {
                id: 34,
                name: 'Bob',
                email: 'bob@gmail.com',
                team: 'winning team',
                mid360: {
                    completed: true,
                    id: 123
                },
                final360: {
                    completed: false,
                    id: 124
                },
            },
            {
                id: 35,
                name: 'Jessica',
                email: 'jessica@gmail.com',
                team: 'winning team',
                mid360: {
                    completed: true,
                    id: 123
                },
                final360: {
                    completed: true,
                    id: 124
                },
            },
            {
                id: 36,
                name: 'Sam',
                email: 'sam@gmail.com',
                team: 'winning team',
                mid360: {
                    completed: true,
                    id: 123
                },
                final360: {
                    completed: false,
                    id: 124
                },
            },
        ];
    }

    render() {
        return (
            <div>
                <h2>Student Dashboard</h2>
                <StudentInfoList students={this.getStudentData()}/>
            </div>
        );
    }
}
