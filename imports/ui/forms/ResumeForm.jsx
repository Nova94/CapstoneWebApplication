import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Blaze } from 'meteor/blaze';
import { Template } from 'meteor/templating';

export default class ResumeForm extends Component {

    componentDidMount() {
        this.view = Blaze.renderWithData(
            Template.ResumeFormTemplate,
            this.props,
            ReactDOM.findDOMNode(this.refs.container)
        );
    }

    componentWillUnmount() {
        Blaze.remove(this.view);
    }

    render() {
        // Just render a placeholder container that will be filled in
        return <span ref="container" />;
    }
}

AutoForm.addHooks('insertResume', {
    after: {
        insert: function(error, result) {
            if(error) {
                console.log('Insert Error:', error);
            } else {
                Meteor.call('insertResumeToUser', this.insertDoc);
            }
        }
    },
    onSuccess: function() {
        document.location.reload(true);
    }
});
