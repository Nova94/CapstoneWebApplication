import React, {Component, PropTypes} from 'react';
import {Table, Panel} from 'react-bootstrap';
import CommentSummaryDropdown from '../admin/CommentSummaryDropdown';

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
    renderComments (comments) {
        return (
            <div>
                <CommentSummaryDropdown title='Strengths' comments={comments.strengths}/>
                <CommentSummaryDropdown title='Weaknesses' comments={comments.weaknesses}/>
                <CommentSummaryDropdown title='Suggestions' comments={comments.traitSuggestion}/>
            </div>
        )
    }

    getAllFieldCounts() {
        const data = {};

        let comments = {
            strengths: [],
            weaknesses: [],
            traitSuggestion: []
        };
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

            // count all the fields
            for (let fieldKey in fields) {
                let skillName = fields[fieldKey];
                let fieldIntValue = fieldValues[skillName];

                counts[fieldKey][fieldIntValue] += 1;
            }
            // count all the team lead fields
            for (var teamLeadFieldKey in teamLeadFields) {
                let teamLeadSkillName = teamLeadFields[teamLeadFieldKey];
                let teamLeadFieldIntValue = fieldValues[teamLeadSkillName];

                counts[teamLeadFieldKey][teamLeadFieldIntValue] += 1;
            }

            // get the comments and add them to their respective arrays
            if (review.strengths) {
                comments.strengths.push(review.strengths);
            }
            if (review.weakness) {
                comments.strengths.push(review.weakness);
            }
            if (review.traitSuggestion) {
                comments.traitSuggestion.push(review.traitSuggestion);
            }
        });

        data.comments = comments;
        data.counts = counts;
        return data;
    }

    render() {
        const reviews = this.props.reviews;
        if (!reviews) {
            return <div>Error: No reviews submitted.</div>
        };

        const panelStyle = {
            'marginLeft': '25px'
        };

        const data = this.getAllFieldCounts();
        const counts = data.counts;

        return (
            <div>
                <h3>Ratings:</h3>
                <Panel defaultExpanded header={reviews.reviewType} bsStyle="success" style={panelStyle}>
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
                            <td>{counts.technical[0]}</td>
                            <td>{counts.technical[1]}</td>
                            <td>{counts.technical[2]}</td>
                            <td>{counts.technical[3]}</td>
                            <td>{counts.technical[4]}</td>
                            <td>{counts.technical[5]}</td>
                        </tr>
                        <tr>
                            <th>Work Ethic</th>
                            <td>{counts.workEthic[0]}</td>
                            <td>{counts.workEthic[1]}</td>
                            <td>{counts.workEthic[2]}</td>
                            <td>{counts.workEthic[3]}</td>
                            <td>{counts.workEthic[4]}</td>
                            <td>{counts.workEthic[5]}</td>
                        </tr>
                        <tr>
                            <th>Communication</th>
                            <td>{counts.communication[0]}</td>
                            <td>{counts.communication[1]}</td>
                            <td>{counts.communication[2]}</td>
                            <td>{counts.communication[3]}</td>
                            <td>{counts.communication[4]}</td>
                            <td>{counts.communication[5]}</td>
                        </tr>
                        <tr>
                            <th>Initiative</th>
                            <td>{counts.initiative[0]}</td>
                            <td>{counts.initiative[1]}</td>
                            <td>{counts.initiative[2]}</td>
                            <td>{counts.initiative[3]}</td>
                            <td>{counts.initiative[4]}</td>
                            <td>{counts.initiative[5]}</td>
                        </tr>
                        <tr>
                            <th>Team Focus</th>
                            <td>{counts.teamFocus[0]}</td>
                            <td>{counts.teamFocus[1]}</td>
                            <td>{counts.teamFocus[2]}</td>
                            <td>{counts.teamFocus[3]}</td>
                            <td>{counts.teamFocus[4]}</td>
                            <td>{counts.teamFocus[5]}</td>
                        </tr>
                        <tr>
                            <th>Contribution</th>
                            <td>{counts.contribution[0]}</td>
                            <td>{counts.contribution[1]}</td>
                            <td>{counts.contribution[2]}</td>
                            <td>{counts.contribution[3]}</td>
                            <td>{counts.contribution[4]}</td>
                            <td>{counts.contribution[5]}</td>
                        </tr>
                        </tbody>
                    </Table>
                </Panel>
                <h3>Comments: </h3>
                <div style={panelStyle}>
                    {this.renderComments(data.comments)}
                </div>
            </div>
        );
    }
}
