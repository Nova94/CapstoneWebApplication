import React, { Component, PropTypes } from 'react';
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';

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

    closeModal()
    {
        this.setState({ showModal: false });
    }

    openModal()
    {
        this.setState({ showModal: true });
    }

    getMid360Field() {
        if(this.props.student.mid360.completed) {
            return (
                <Button bsStyle="success" bsSize="xsmall">
                    <span className="glyphicon glyphicon-ok"/>
                </Button>
            );
        } else {
            return (
                <Button bsStyle="danger" bsSize="xsmall">
                    <span className="glyphicon glyphicon-remove"/>
                </Button>
            );
        }
    }

    getFinal360Field() {
        if(this.props.student.final360.completed) {
            return (
                <Button bsStyle="success" bsSize="xsmall">
                    <span className="glyphicon glyphicon-ok"/>
                </Button>
            );
        } else {
            return (
                <div>
                    <Button bsStyle="danger" bsSize="xsmall" onClick={this.openModal}>
                        <span className="glyphicon glyphicon-remove"/>
                    </Button>
                    <Modal show={this.state.showModal} onHide={this.closeModal}>
                            <Modal.Header>
                                <Modal.Title>360 Final Review</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <ReviewForm/>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.closeModal}>Close</Button>
                                <Button bsStyle="primary">Submit Form</Button>
                            </Modal.Footer>
                    </Modal>
                </div>
            );
        }
    }

    render() {
        return (
                <tr>
                    <td>{this.props.student.name}</td>
                    <td>{this.props.student.email}</td>
                    <td>
                        <center>
                            {this.getMid360Field()}
                        </center>
                    </td>
                    <td>
                        <center>
                            {this.getFinal360Field()}
                        </center>
                    </td>
                </tr>
        );
    }
}
