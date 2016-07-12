import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Blaze } from 'meteor/blaze';
import { Template } from 'meteor/templating';

export default class ReviewForm extends Component {

    componentDidMount() {
        this.view = Blaze.renderWithData(
            Template.ReviewFormTemplate,
            this.props,
            ReactDOM.findDOMNode(this.refs.container)
        );
    }

    componentWillUnmount() {
        Blaze.remove(this.view);
    }

    render() {
        console.log(this.view);
        // Just render a placeholder container that will be filled in
        return <span ref="container" />;
    }
}
