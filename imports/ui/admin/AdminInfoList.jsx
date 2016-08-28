import React, { Component, PropTypes } from 'react';
import {Table, Panel} from 'react-bootstrap';
import AdminInfo from './AdminInfo';

export default class AdminInfoList extends Component {
    constructor(props) {
        super(props);
    }

    renderAdminInfoList() {
        return this.props.students.map((student) => {
            if(student._id === this.props.user._id) {
                return null;
            }

            var reviewsForCurrentStudent = _.filter(this.props.reviews, function(review) {
                return review.reviewee === student._id;
            });

            return (
                    <AdminInfo
                        reviews={reviewsForCurrentStudent}
                        student={student}
                        teams={this.props.teams}
                        roles={this.props.roles}
                    />
            );
        });
    }

    getAdminInfoHeader() {
        return (
            <thead>
                <tr>
                    <th>Name</th>
				 	<th>Role</th>
					<th>Team</th>
                    <th>Email</th>
					<th>Resume</th>
                    <th>Midterm 360</th>
                    <th>Final 360</th>
					
                </tr>
            </thead>
        );
    }

    render() {
        if(!this.props.students) {
            return null;
        }

        return (
            <Panel defaultExpanded header="All Users">
                <Table fill striped bordered condensed>
                    {this.getAdminInfoHeader()}
                    <tbody>
                        {this.renderAdminInfoList()}
                    </tbody>
                </Table>
            </Panel>
        );
    }
}
  