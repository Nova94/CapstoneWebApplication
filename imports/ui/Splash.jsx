import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

export default class Splash extends Component {

    getNavBar() {
        return (
            <div id="nav">
                <div id="iconGreenWhite"></div>
                <p class="navHeader">Portland State University Computer Science Capstone</p>
                <p class="navText">
                    <a href="#" id="login" class="aIn"> Logout </a>
                </p>
            </div>
        );
    }
    getHead() {
        return (
            <head>
                <meta charset="utf-8"/>
                <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"/>
                <title>CS CAPSTONE</title>
                <link rel="stylesheet" href="css/normalize.css"/>
                <link rel="stylesheet" href="css/application.css"/>
            </head>
        );
    }
    getHome() {
        return (
            <div id="wrapper">
                <section class="secFlip">
                    <div id="divHome">
                        <h2>Welcome USER</h2>
                        <p>Resume | Survey | 360 Midterm | 360 Final  | Presentation Slides </p>
                        <div id="contentLeft">
                            <p>[  MAYBE FULL PAGE js caroursel here  displaying images or students working/past projects ]</p>
                            <p>If carousel, place it above the title and text</p>
                            <p>The links above could anchor to spots below, (1 page layout)</p>
                            <p>They could also grow/shrink (animiate) the container section with the new content when pressed</p>
                        </div>
                        <div id="contentRight">
                            <p>
                                Student Name:  <br/>
                                Account Type:   <br/>
                                Team Name:    <br/>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    render() {
        return this.renderUsers();
    }
}

Splash.propTypes = {};
