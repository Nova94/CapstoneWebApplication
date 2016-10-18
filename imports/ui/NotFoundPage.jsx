import React, { Component } from 'react';

export default class Homepage extends Component {
    componentDidMount () {
        document.title = "Capstone: Page Not Found";

        setTimeout(this.navigateToHomepage, 3000);
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
                    </center>
                </div>
            </div>
        );
    }
}