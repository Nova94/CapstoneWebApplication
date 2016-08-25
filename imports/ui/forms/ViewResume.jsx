import React, { Component, PropTypes } from 'react';
import {Table, Panel} from 'react-bootstrap';

export default class ViewResume extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const resume = this.props.user.resume;

        if(!this.props.user.resume.name) {
            return <div>Error: No review found to view.</div>
        };

        return (
            <Panel defaultExpanded header="Resume" bsStyle="success">
                <Table fill striped condensed hover>
                    <tbody>
                        <tr>
                            <th>Name:</th>
                            <td>{resume.name}</td>
                        </tr>
                        <tr>
                            <th>Cell Phone:</th>
                            <td>{resume.cellphone}</td>
                        </tr>
                        <tr>
                            <th>email:</th>
                            <td>{resume.email}</td>
                        </tr>
                        <tr>
                            <th>technology summary:</th>
                            <td>{resume.technologySummary}</td>
                        </tr>
                        <tr>
                            <th>other information:</th>
                            <td>{resume.otherInformation}</td>
                        </tr>
                    </tbody>
                </Table>
            </Panel>
        );
    }
}
