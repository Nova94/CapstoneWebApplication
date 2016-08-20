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


export default class ViewReviewSummary extends Component {
    constructor(props) {
        super(props);
    }

    getAllFieldCounts() {
        const counts = {
            technical: 0,
            teamwork: 0,
            leadership: 0,
            communication: 0,
            cooperation: 0,
            intiative: 0,
            teamFocus: 0,
            contribution: 0
        };

        this.props.reviews.map((review) => {
            for(var key in review.fields) {

            }
        });

    }
    render() {
        const reviews = this.props.reviews;
        if(!reviews) {
            return <div>Error: No reviews submitted.</div>
        };
        const counts = this.getAllFieldCounts();

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
