import React, { Component } from 'react';
import { browserHistory } from 'react-router'

export default class Homepage extends Component {
    componentDidMount () {
        document.title = "Capstone: Page Not Found";

        setTimeout(this.navigateToHomepage, 3000);
    }

    navigateToHomepage () {
        browserHistory.push('/');
    }

    render() {
        const linkHoverStyle = {
            'cursor': 'pointer'
        };

        return (
            <div>
                <div>
                    <center>
                        <h2>404: Page Not Found</h2>
                        <p>The page you are looking for does not exist.</p>
                        <p>If the page doesn't automatically redirect you click&nbsp;
                            <a onClick={this.navigateToHomepage} style={linkHoverStyle}>
                                here
                            </a>.
                        </p>
                    </center>
                </div>
            </div>
        );
    }
}