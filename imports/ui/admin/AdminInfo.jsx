import React, { Component, PropTypes } from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';

import AdminModalButtonComplete from '../AdminModalButtonComplete';
import AdminModalButtonIncomplete from '../AdminModalButtonIncomplete';

import _ from 'lodash';

export default class AdminInfo extends Component {
    constructor(props) {
        super(props);

    }
	
    getReviewForUser(type) {
        let review = null;

        if(type === 'midterm') {
             review = _.filter(this.props.reviews, (review) => {
                return review.reviewee === this.props.student._id && review.reviewType === 'Midterm';
            });
        } else if (type === 'final') {
            review = _.filter(this.props.reviews, (review) => {
                return review.reviewee === this.props.student._id && review.reviewType === 'Final';
            });
        }

        console.log(review);
        return review;
    }


	
    get360ReviewField(type) {
        const reviews = this.getReviewForUser(type);
        if (reviews.length == 0) {
            return <AdminModalButtonIncomplete user={this.props.user} reviewType={type} student={this.props.student}/>
        } else {
            return <AdminModalButtonComplete review={reviews}/>
        }
    }
    
    getTeamDropdown() {
        return (
            <DropdownButton title={this.props.student.team}>
                {this.props.teams.map((team) => {
                    return <MenuItem>{team}</MenuItem>
                })}
            </DropdownButton>
        );
    }

    getRoleDropdown() {
        return (
            <DropdownButton title={this.props.student.role}>
                {this.props.roles.map((role) => {
                    return <MenuItem>{role}</MenuItem>
                })}
            </DropdownButton>
        );
    }
	
    render() {
        return (
                <tr>
                    <td>{this.props.student.services.google.name}</td>
					<td>{this.getRoleDropdown()}</td>
					<td>{this.getTeamDropdown()}</td>
                    <td>{this.props.student.services.google.email}</td>
					<td>
						<center>
							{/*{this.getResumeField()}*/}
						</center>
					</td>
                    <td>
                        <center>
                            {this.get360ReviewField('midterm')}
                        </center>
                    </td>
                    <td>
                        <center>
                            {this.get360ReviewField('final')}
                        </center>
                    </td>
                </tr>
        );
    }
}
