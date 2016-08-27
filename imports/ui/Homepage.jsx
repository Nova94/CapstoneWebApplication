import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { browserHistory } from 'react-router'

export default class Homepage extends Component {
    componentDidMount () {
        document.title = "Capstone: Homepage";
    }

    navigateToStudentDashboard () {
        browserHistory.push('/student');
    }
    navigateToAdminDashboard () {
        browserHistory.push('/admin');
    }

    getNavigationButton() {
        return (
            <ButtonGroup>
                <Button onClick={this.navigateToStudentDashboard}>
                    Student Dashboard
                </Button>
                <Button onClick={this.navigateToAdminDashboard}>
                    Admin Dashboard
                </Button>
            </ButtonGroup>
        );

    }

    render() {
        return (
            <div>
                <div>
                    <h2>Capstone Website - Homepage</h2>
                    {this.getNavigationButton()}
                </div>
            </div>
        );
    }
}