import React, { Component, PropTypes } from 'react';
import {Button, Modal, OverlayTrigger, Tooltip} from 'react-bootstrap';

import ReviewForm from '../forms/ReviewForm';
import ViewReview from '../forms/ViewReview';
import _ from 'lodash';
export default class StudentInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showFormModal: false,
            showReviewModal: false
        };
        this.closeFormModal = this.closeFormModal.bind(this);
        this.openFormModal = this.openFormModal.bind(this);

        this.closeReviewModal = this.closeReviewModal.bind(this);
        this.openReviewModal = this.openReviewModal.bind(this);
    }

    closeFormModal() {
        this.setState({showFormModal: false});
    }
    openFormModal() {
        this.setState({showFormModal: true});
    }

    closeReviewModal() {
        this.setState({showReviewModal: false});
    }
    openReviewModal() {
        this.setState({showReviewModal: true});
    }

    getButton(bsStyle, glyphicon, message, onClick) {
        return(
                <OverlayTrigger delayShow="400" placement="left" overlay={<Tooltip>{message}</Tooltip>}>
                    <Button bsStyle={bsStyle} bsSize="xsmall" onClick={onClick}>
                        <span className={glyphicon}/>
                    </Button>
                </OverlayTrigger>
        );
    }

    get360Form() {
        return (
            <div>
                {this.getButton('danger', 'glyphicon glyphicon-remove', 'Please complete this 360 review form', this.openFormModal)}
                <Modal bsSize ="large" show={this.state.showFormModal} onHide={this.closeFormModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>360 Review</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ReviewForm/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeFormModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

    getReviewForUser(type) {
        if(type === 'midterm') {
            return _.find(this.props.user.reviews, (review) => {
                if ((review.reviewee === this.props.student._id) && (review.type === 'Midterm')){
                    console.log(`review for ${this.student.services.google.name}: ${review}`);
                    return review;
                }
            });
        } else if (type === 'final') {
            return _.find(this.props.user.reviews, (review) => {
                if ((review.reviewee === this.props.student._id) && (review.type === 'Final')){
                    console.log(`review for ${this.student.services.google.name}: ${review}`);
                    return review;
                }
            });
        } else {
            return null;
        }
    }

    get360ReviewField(type) {
        const review = this.getReviewForUser(type);
        if (!review) {
            return <div>No Review</div>
        } else {
            return <div>{review.revieweeName}</div>;
        }
        //     <div>
        //         {this.getButton('success', 'glyphicon glyphicon-ok', 'This 360 review form is complete', this.openReviewModal)}
        //         <Modal bsSize="large" show={this.state.showReviewModal} onHide={this.closeReviewModal}>
        //             <Modal.Header closeButton>
        //                 <Modal.Title>Viewing</Modal.Title>
        //             </Modal.Header>
        //             <Modal.Body>
        //                 <ViewReview/>
        //             </Modal.Body>
        //             <Modal.Footer>
        //                 <Button onClick={this.closeReviewModal}>Close</Button>
        //             </Modal.Footer>
        //         </Modal>
        //     </div> :
        //     this.get360Form();
    }
    
    render() {
        console.log(this.props.user);
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