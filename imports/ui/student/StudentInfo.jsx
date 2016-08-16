import React, { Component, PropTypes } from 'react';
import {Button, Modal, OverlayTrigger, Tooltip} from 'react-bootstrap';

import ModalButtonComplete from '../ModalButtonComplete';
import ModalButtonIncomplete from '../ModalButtonIncomplete';

import ReviewForm from '../forms/ReviewForm';
import ViewReview from '../forms/ViewReview';
import _ from 'lodash';
export default class StudentInfo extends Component {

    constructor(props) {
        super(props);
    }

    getReviewForUser(type) {
        let review = null;

        if(type === 'midterm') {
             review = _.find(this.props.user.reviews, (review) => {
                return review.reviewee === this.props.student._id && review.reviewType === 'midterm';
            });
        } else if (type === 'final') {
            review = _.find(this.props.user.reviews, (review) => {
                return review.reviewee === this.props.student._id && review.reviewType === 'final';
            });
        }
        return review;
    }

    get360ReviewField(type) {
        const review = this.getReviewForUser(type);
        if (!review) {
            return <ModalButtonIncomplete
                user={this.props.user}
                reviewType={type}
                student={this.props.student} />
        } else {
            return <ModalButtonComplete review={review}/>
        }
    }
    
    render() {
        return (
                <tr>
                    <td>{this.props.student.services.google.name}</td>
                    <td>{this.props.student.services.google.email}</td>
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