import React, { Component, PropTypes } from 'react';
import {Button, Modal, OverlayTrigger, Tooltip} from 'react-bootstrap';
import ViewReview from './forms/ViewReview';
import _ from 'lodash';

export default class ModalButtonComplete extends Component {
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
                    <Modal.Title>Viewing Submitted Reviews for {this.props.review[0].revieweeName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {console.log(this.props.review)}
                        {this.props.review.map((review) => {
                            return (<ViewReview review={review}/>)
                    })}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.closeModal.bind(this)}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    render() {
        return (
            <OverlayTrigger delayShow="400" placement="left" overlay={<Tooltip>{"View submitted review"}</Tooltip>}>
                <Button bsStyle='success' bsSize="xsmall" onClick={ this.openModal.bind(this) }>
                    <span className='glyphicon glyphicon-ok'/>
                    {this.getModalWithViewReview()}
                </Button>
            </OverlayTrigger>
        );
    }
}