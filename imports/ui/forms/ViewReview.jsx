import React, { Component, PropTypes } from 'react';

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
        );
    }
}
