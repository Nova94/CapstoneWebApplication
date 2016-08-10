import React, { Component, PropTypes } from 'react';
import {Button, Modal, OverlayTrigger, Tooltip} from 'react-bootstrap';

import ReviewForm from '../forms/ReviewForm';

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

    get360Form(type) {
        var reviewType = '';
        if(type === "mid360") {
            reviewType = "Midterm";
        }
        else if(type === "final360"){
            reviewType = "Final";
        }

        return (
            <div>
                {this.getButton('danger', 'glyphicon glyphicon-remove', 'Please complete this 360 review form', this.openModal)}
                <Modal bsSize ="large" show={this.state.showModal} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>360 Review</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ReviewForm student={this.props.student} reviewer={Meteor.userId()} reviewType={reviewType}/>
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
            this.getButton('success', 'glyphicon glyphicon-ok', 'This 360 review form is complete') :
            this.get360Form(type);
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