import React, { Component, PropTypes } from 'react';
import {Button} from 'react-bootstrap';


export default class StudentInfo extends Component {
    constructor(props) {
        super(props);
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
                <Button bsStyle="danger" bsSize="xsmall">
                    <span className="glyphicon glyphicon-remove"/>
                </Button>
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
