import React, { Component, PropTypes } from 'react';
import {Button, Modal, OverlayTrigger, Tooltip} from 'react-bootstrap';

import ReviewForm from '../forms/ReviewForm';

var testReview = {
    "_id" : "AQDQu86KP9m2scN3X",
    "reviewer" : "Bob",
    "reviewee" : "Jessica",
    "reviewType" : "final",
    "fields" : {
        "technical" : "Above Average",
        "workEthic" : "Above Average",
        "communication" : "Above Average",
        "initiative" : "Above Average",
        "teamFocus" : "Above Average",
        "contribution" : "Above Average"
    },
    "teamLead" : {
        "leadership" : "Above Average",
        "organization" : "Above Average",
        "delegation" : "Above Average"
    },
    "strengths" : "Lorem Ipsum",
    "weakness" : "Lorem Ipsum",
    "traitSuggestion" : "Lorem Ipsum",
    "points" : 42
};

export default class StudentInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    closeModal() {
        this.setState({showModal: false});
    }
    
    openModal() {
        this.setState({showModal: true});
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
                {this.getButton('danger', 'glyphicon glyphicon-remove', 'Please complete this 360 review form', this.openModal)}
                <Modal bsSize ="large" show={this.state.showModal} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>360 Review</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ReviewForm/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
    
    get360ReviewField(type) {
        return this.props.student[type].completed ?
            <div>
                {this.getButton('success', 'glyphicon glyphicon-ok', 'This 360 review form is complete', this.openModal)}
                <Modal bsSize="large" show={this.state.showModal} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>360 Review (View Only)</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <table>
                            <tr>
                                <td><h4>Reviewer:&emsp;</h4></td>
                                <td>{testReview.reviewer}</td>
                            </tr>
                            <tr>
                                <td><h4>Reviewee:&emsp;</h4></td>
                                <td>{testReview.reviewee}</td>
                            </tr>
                            <tr>
                                <td><h4>Review Type:&emsp;</h4></td>
                                <td>{testReview.reviewType}</td>
                            </tr>
                            <tr>
                                <td><h4>Technical: </h4></td>
                                <td>{testReview.fields.technical}</td>
                            </tr>
                            <tr>
                                <td><h4>Work Ethic: </h4></td>
                                <td>{testReview.fields.workEthic}</td>
                            </tr>
                            <tr>
                                <td><h4>Communication: </h4></td>
                                <td>{testReview.fields.communication}</td>
                            </tr>
                            <tr>
                                <td><h4>Team Focus: </h4></td>
                                <td>{testReview.fields.teamFocus}</td>
                            </tr>
                            <tr>
                                <td><h4>Contribution: </h4></td>
                                <td>{testReview.fields.contribution}</td>
                            </tr>
                            <tr>
                                <td><h4>Strengths: </h4></td>
                                <td>{testReview.strengths}</td>
                            </tr>
                            <tr>
                                <td><h4>Weakness: </h4></td>
                                <td>{testReview.weakness}</td>
                            </tr>
                            <tr>
                                <td><h4>Trait Suggestion: </h4></td>
                                <td>{testReview.traitSuggestion}</td>
                            </tr>
                            <tr>
                                <td><h4>Points Allocation: </h4></td>
                                <td>{testReview.points}</td>
                            </tr>
                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div> :
            this.get360Form();
    }
    
    render() {
        return (
                <tr>
                    <td>{this.props.student.name}</td>
                    <td>{this.props.student.email}</td>
                    <td>
                        <center>
                            {this.get360ReviewField('mid360')}
                        </center>
                    </td>
                    <td>
                        <center>
                            {this.get360ReviewField('final360')}
                        </center>
                    </td>
                </tr>
        );
    }
}