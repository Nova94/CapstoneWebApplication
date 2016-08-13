import React, { Component, PropTypes } from 'react';
import {Table, Panel} from 'react-bootstrap';

export default class StudentInfoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
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

        return (
            <Panel defaultExpanded header="Midterm/Final 360 Review" bsStyle="success">
                <Table fill striped condensed hover>
                    <tbody>
                        <tr>
                            <th>Reviewer:</th>
                            <td>{testReview.reviewer}</td>
                        </tr>
                        <tr>
                            <th>Reviewee:</th>
                            <td>{testReview.reviewee}</td>
                        </tr>
                        <tr>
                            <th>Review Type:</th>
                            <td>{testReview.reviewType}</td>
                        </tr>
                        <tr>
                            <th>Technical:</th>
                            <td>{testReview.fields.technical}</td>
                        </tr>
                        <tr>
                            <th>Work Ethic:</th>
                            <td>{testReview.fields.workEthic}</td>
                        </tr>
                        <tr>
                            <th>Communication:</th>
                            <td>{testReview.fields.communication}</td>
                        </tr>
                        <tr>
                            <th>Team Focus:</th>
                            <td>{testReview.fields.teamFocus}</td>
                        </tr>
                        <tr>
                            <th>Contribution:</th>
                            <td>{testReview.fields.contribution}</td>
                        </tr>
                        <tr>
                            <th>Strengths:</th>
                            <td>{testReview.strengths}</td>
                        </tr>
                        <tr>
                            <th>Weakness:</th>
                            <td>{testReview.weakness}</td>
                        </tr>
                        <tr>
                            <th>Trait Suggestion:</th>
                            <td>{testReview.traitSuggestion}</td>
                        </tr>
                        <tr>
                            <th>Points Allocation:</th>
                            <td>{testReview.points}</td>
                        </tr>
                    </tbody>
                </Table>
            </Panel>
        );
    }
}
