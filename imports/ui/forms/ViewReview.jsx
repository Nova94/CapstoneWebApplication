import React, { Component, PropTypes } from 'react';
import {Table, Panel} from 'react-bootstrap';

export default class ViewReview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const review = this.props.review;
        if(!review) {
            return <div>Error: No review found to view.</div>
        };

        return (
            <Panel defaultExpanded header={review.reviewType} bsStyle="success">
                <Table fill striped condensed hover>
                    <tbody>
                        <tr>
                            <th>Reviewee:</th>
                            <td>{review.revieweeName}</td>
                        </tr>
                        <tr>
                            <th>Review Type:</th>
                            <td>{review.reviewType}</td>
                        </tr>
                        <tr>
                            <th>Technical:</th>
                            <td>{review.fields.technical}</td>
                        </tr>
                        <tr>
                            <th>Work Ethic:</th>
                            <td>{review.fields.workEthic}</td>
                        </tr>
                        <tr>
                            <th>Communication:</th>
                            <td>{review.fields.communication}</td>
                        </tr>
                        <tr>
                            <th>Team Focus:</th>
                            <td>{review.fields.teamFocus}</td>
                        </tr>
                        <tr>
                            <th>Contribution:</th>
                            <td>{review.fields.contribution}</td>
                        </tr>
                        <tr>
                            <th>Strengths:</th>
                            <td>{review.strengths}</td>
                        </tr>
                        <tr>
                            <th>Weakness:</th>
                            <td>{review.weakness}</td>
                        </tr>
                        <tr>
                            <th>Trait Suggestion:</th>
                            <td>{review.traitSuggestion}</td>
                        </tr>
                        <tr>
                            <th>Points Allocation:</th>
                            <td>{review.points}</td>
                        </tr>
                    </tbody>
                </Table>
            </Panel>
        );
    }
}
