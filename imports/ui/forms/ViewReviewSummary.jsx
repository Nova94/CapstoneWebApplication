import React, { Component, PropTypes } from 'react';
import {Table, Panel} from 'react-bootstrap';


const fieldNameToViewName = {
    technical: 'Technical Skills',
    workEthic: 'Work Ethic',
    communication: 'Communication Skills',
    initiative: 'Initiative',
    teamFocus: 'Team Focus',
    contribution: 'Contribution'
};
const teamLeadFieldNameToViewName = {
    leadership: 'Leadership',
    organization: 'Organization',
    delegation: 'Delegation'
};

const fieldValues = {
    "Poor": 1,
    'Below Average': 2,
    'Average': 3,
    'Above Average': 4,
    'Excellent': 5,
    'Unknown or N/A': 0
};

export default class ViewReviewSummary extends Component {
    constructor(props) {
        super(props);
    }

    getAllFieldCounts() {
        let counts = {
            technical: 0,
            teamwork: 0,
            leadership: 0,
            communication: 0,
            cooperation: 0,
            initiative: 0,
            teamFocus: 0,
            contribution: 0,
            workEthic: 0
        };

        this.props.reviews.map((review) => {
            let fields = review.fields;

            for(var key in fields) {
                counts[key] += fieldValues[fields[key]];
            }
        });


        return counts;
    }

    getAllTeamLeadFieldCounts() {
        let counts = {
            leadership: 0,
            organization: 0,
            delegation: 0
        };

        this.props.reviews.map((review) => {
            let teamLead = review.teamLead;

            for(var key in teamLead) {
                counts[key] += fieldValues[teamLead[key]];
            }
        });

        return counts;
    }

    render() {
        const reviews = this.props.reviews;
        if(!reviews) {
            return <div>Error: No reviews submitted.</div>
        };

        const fieldCounts = this.getAllFieldCounts();
        const teamLeadCounts = this.getAllTeamLeadFieldCounts();
        return (
            <Panel defaultExpanded header={reviews.reviewType} bsStyle="success">
                <Table fill striped condensed hover>
                    <thead>
                    <tr>
                        <th><strong><u>Attribute</u></strong></th>
                        <th><strong><u>0</u></strong></th>
                        <th><strong><u>1</u></strong></th>
                        <th><strong><u>2</u></strong></th>
                        <th><strong><u>3</u></strong></th>
                        <th><strong><u>4</u></strong></th>
                        <th><strong><u>5</u></strong></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>Technical</th>
                        <td>3</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>4</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th>Teamwork</th>
                        <td>3</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>4</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th>Leadership</th>
                        <td>3</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>4</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th>Communication</th>
                        <td>3</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>4</td>
                        <td>1</td>
                    </tr>
                    </tbody>
                </Table>
            </Panel>
        );
    }
}
