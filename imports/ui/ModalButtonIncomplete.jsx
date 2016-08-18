import React, { Component, PropTypes } from 'react';
import {Button, Modal, OverlayTrigger, Tooltip} from 'react-bootstrap';
import ReviewForm from './forms/ReviewForm';


export default class ModalButtonIncomplete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };
    }

    openModal () { this.setState({ showModal: true }); }

    closeModal () { this.setState({ showModal: false }); }

    getModalWithViewReview () {
        return (
            <Modal bsSize="large" show={this.state.showModal} onHide={ this.closeModal.bind(this) }>
                <Modal.Header closeButton>
                    <Modal.Title>Filling out Review for {this.props.student.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ReviewForm
                        user={this.props.user}
                        reviewType={this.props.reviewType}
                        student={ this.props.student }/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={ this.closeModal.bind(this) }>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    render() {
        return (
            <OverlayTrigger delayShow="400" placement="left" overlay={<Tooltip>{"Submit a review for this user"}</Tooltip>}>
                <Button bsStyle='danger' bsSize="xsmall" onClick={ this.openModal.bind(this) }>
                    <span className='glyphicon glyphicon-remove'/>
                    {this.getModalWithViewReview()}
                </Button>
            </OverlayTrigger>
        );
    }
}