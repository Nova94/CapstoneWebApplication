import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Template } from 'meteor/templating';
import { Reviews } from '../imports/api/reviews';
import { Resumes } from '../imports/api/resumes';
import App from '../imports/ui/App.jsx';

Template.registerHelper("Reviews", Reviews);
Template.registerHelper("Resumes", Resumes);

Meteor.startup(() => {
    render(<App />, document.getElementById('render-target'));
});
