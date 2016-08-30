import React, { Component, PropTypes } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import AdminModalButtonComplete from '../AdminModalButtonComplete';
import AdminModalButtonIncomplete from '../AdminModalButtonIncomplete';
import AdminResumeModalButtonComplete from '../AdminResumeModalButtonComplete';
import AdminResumeModalButtonIncomplete from '../AdminResumeModalButtonIncomplete';
import api from '../../../client/api.js';

import _ from 'lodash';

export default class AdminInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            role: this.props.student.role,
            team: this.props.student.team
        }

    }
	
    getReviewForUser(type) {
        let review = null;

        if (type === 'midterm') {
            review = _.filter(this.props.reviews, (review) => {
                return review.reviewee === this.props.student._id && review.reviewType === 'midterm';
            });
        } else if (type === 'final') {
            review = _.filter(this.props.reviews, (review) => {
                return review.reviewee === this.props.student._id && review.reviewType === 'final';
            });
        }

        return review;
    }
	
    get360ReviewField(type) {
        const reviews = this.getReviewForUser(type);
        if (reviews.length == 0) {
            return <AdminModalButtonIncomplete user={this.props.user} reviewType={type} student={this.props.student}/>
        } else {
            return <AdminModalButtonComplete reviews={reviews}/>
        }
    }

    getResumeField() {
        {return !this.props.student.resume.name ?
            <AdminResumeModalButtonIncomplete/> :
            <AdminResumeModalButtonComplete user={this.props.student}/>}
    }

    setTeam(evt) {
        this.setState({team: evt});
        api.users.updateUserTeam(this.props.student._id, evt);

    }

    setRole(evt) {
        this.setState({role: evt});
        api.users.updateUserRole(this.props.student._id, evt);
    }

    getTeamDropdown() {
        return (
            <DropdownButton onSelect={this.setTeam.bind(this)} title={this.state.team}>
                {this.props.teams.map((team) => {
                    return <MenuItem eventKey={team}>{team}</MenuItem>
                })}
            </DropdownButton>
        );
    }

    getRoleDropdown() {
        return (
            <DropdownButton onSelect={this.setRole.bind(this)} title={this.state.role}>
                {this.props.roles.map((role) => {
                    return <MenuItem eventKey={role}>{role}</MenuItem>
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
                <td>
                    <a href={`mailto:${this.props.student.services.google.email}.com?Subject=Missing%20Resume&Body=Hi%20${this.props.student.services.google.given_name || ''},%20Can%20you%20please%20submit%20your%20capstone%20resume?%20Thanks.`}
                       target="_top">
                        {this.props.student.services.google.email}
                    </a>
                </td>
                <td>
                    <center>
                        {this.getResumeField()}
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
