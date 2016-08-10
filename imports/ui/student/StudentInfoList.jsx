import React, { Component, PropTypes } from 'react';
import {Table, Panel} from 'react-bootstrap';
import StudentInfo from './StudentInfo';

export default class StudentInfoList extends Component {
    constructor(props) {
        super(props);
    }

    renderStudentInfoList() {
        return this.props.students.map((student) => {
            return (
                <tbody>
                    <StudentInfo student={student} onSubmitClick={this.onSubmitReviewClick}/>
                </tbody>
            );
        });
    }

    onSubmitReviewClick() {
        console.log('clicked submit on review');
    }

    getStudentInfoHeader() {
        return (
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Midterm 360</th>
                    <th>Final 360</th>
                </tr>
            </thead>
        );
    }

    render() {
        return (
            <Panel defaultExpanded header="Reviews List" bsStyle="info">
                <Table fill striped bordered condensed>
                    {this.getStudentInfoHeader()}
                    {this.renderStudentInfoList()}
                </Table>
            </Panel>
        );
    }
}
