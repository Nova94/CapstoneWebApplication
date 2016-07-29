import React, { Component, PropTypes } from 'react';
import {Table, Panel} from 'react-bootstrap';
import AdminInfo from './AdminInfo';

export default class AdminInfoList extends Component {
    constructor(props) {
        super(props);
    }

    renderAdminInfoList() {
        return this.props.data.students.map((student) => {
            return (
                <tbody>
                    <AdminInfo student={student} teams={this.props.data.teams} roles={this.props.data.roles}/>
                </tbody>
            );
        });
    }

    getAdminInfoHeader() {
        return (
            <thead>
                <tr>
                    <th>Name</th>
					<th>Role</th>
					<th>Team</th>
                    <th>Email</th>
					<th>Resume</th>
                    <th>Midterm 360</th>
                    <th>Final 360</th>
					
                </tr>
            </thead>
        );
    }

    render() {
        return (
  		  <Panel defaultExpanded header="Admin" bsStyle="info">
      	  	<Table fill striped bordered condensed>
				{this.getAdminInfoHeader()}
           	 	{this.renderAdminInfoList()}
       		</Table>
   		 </Panel>
        );
    }
}
