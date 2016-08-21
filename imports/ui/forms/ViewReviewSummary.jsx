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
    'Unknown or N/A': 0,
    "Poor": 1,
    'Below Average': 2,
    'Average': 3,
    'Above Average': 4,
    'Excellent': 5
};

export default class ViewReviewSummary extends Component {
    constructor(props) {
        super(props);
    }

    getAllFieldCounts() {
        let counts = {
            technical: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 0: 0},
            teamwork: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 0: 0},
            leadership: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 0: 0},
            communication: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 0: 0},
            cooperation: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 0: 0},
            initiative: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 0: 0},
            teamFocus: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 0: 0},
            contribution: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 0: 0},
            workEthic: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 0: 0},
            leadership: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 0: 0},
            organization: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 0: 0},
            delegation: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 0: 0}
        };

        this.props.reviews.map((review) => {

            const fields = review.fields;
            const teamLeadFields = review.teamLead;

            for(let fieldKey in fields) {
                let skillName = fields[fieldKey];
                let fieldIntValue = fieldValues[skillName];

                counts[fieldKey][fieldIntValue] += 1;
            }

            for(var teamLeadFieldKey in teamLeadFields) {
                let teamLeadSkillName = teamLeadFields[teamLeadFieldKey];
                let teamLeadFieldIntValue = fieldValues[teamLeadSkillName];

                counts[teamLeadFieldKey][teamLeadFieldIntValue] += 1;
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
                        <th>Technical Skill</th>
                        <td>{fieldCounts.technical[0]}</td>
                        <td>{fieldCounts.technical[1]}</td>
                        <td>{fieldCounts.technical[2]}</td>
                        <td>{fieldCounts.technical[3]}</td>
                        <td>{fieldCounts.technical[4]}</td>
                        <td>{fieldCounts.technical[5]}</td>
                    </tr>
                    <tr>
                        <th>Work Ethic</th>
                        <td>{fieldCounts.workEthic[0]}</td>
                        <td>{fieldCounts.workEthic[1]}</td>
                        <td>{fieldCounts.workEthic[2]}</td>
                        <td>{fieldCounts.workEthic[3]}</td>
                        <td>{fieldCounts.workEthic[4]}</td>
                        <td>{fieldCounts.workEthic[5]}</td>
                    </tr>
                    <tr>
                        <th>Communication</th>
                        <td>{fieldCounts.communication[0]}</td>
                        <td>{fieldCounts.communication[1]}</td>
                        <td>{fieldCounts.communication[2]}</td>
                        <td>{fieldCounts.communication[3]}</td>
                        <td>{fieldCounts.communication[4]}</td>
                        <td>{fieldCounts.communication[5]}</td>
                    </tr>
                    <tr>
                        <th>Initiative</th>
                        <td>{fieldCounts.initiative[0]}</td>
                        <td>{fieldCounts.initiative[1]}</td>
                        <td>{fieldCounts.initiative[2]}</td>
                        <td>{fieldCounts.initiative[3]}</td>
                        <td>{fieldCounts.initiative[4]}</td>
                        <td>{fieldCounts.initiative[5]}</td>
                    </tr>
                    <tr>
                        <th>Team Focus</th>
                        <td>{fieldCounts.teamFocus[0]}</td>
                        <td>{fieldCounts.teamFocus[1]}</td>
                        <td>{fieldCounts.teamFocus[2]}</td>
                        <td>{fieldCounts.teamFocus[3]}</td>
                        <td>{fieldCounts.teamFocus[4]}</td>
                        <td>{fieldCounts.teamFocus[5]}</td>
                    </tr>
                    <tr>
                        <th>Contribution</th>
                        <td>{fieldCounts.contribution[0]}</td>
                        <td>{fieldCounts.contribution[1]}</td>
                        <td>{fieldCounts.contribution[2]}</td>
                        <td>{fieldCounts.contribution[3]}</td>
                        <td>{fieldCounts.contribution[4]}</td>
                        <td>{fieldCounts.contribution[5]}</td>
                    </tr>
                    </tbody>
                </Table>
            </Panel>
        );
    }
}
