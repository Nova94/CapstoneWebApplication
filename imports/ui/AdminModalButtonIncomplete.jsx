import React, { Component, PropTypes } from 'react';
import {Button, Modal, OverlayTrigger, Tooltip} from 'react-bootstrap';
import ReviewForm from './forms/ReviewForm';


export default class ModalButtonIncomplete extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <OverlayTrigger delayShow="400" placement="left" overlay={<Tooltip>{"User has no reviews yet"}</Tooltip>}>
                <Button bsStyle='danger' bsSize="xsmall">
                    <span className='glyphicon glyphicon-remove'/>
                </Button>
            </OverlayTrigger>
        );
    }
}