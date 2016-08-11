import React, { Component, PropTypes } from 'react';
import {Button, Modal, OverlayTrigger, Tooltip} from 'react-bootstrap';

import ReviewForm from '../forms/ReviewForm';
import ViewReview from '../forms/ViewReview';

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
                        <ViewReview/>
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