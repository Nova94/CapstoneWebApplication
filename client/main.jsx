import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Template } from 'meteor/templating';
import { Reviews } from '../imports/api/reviews';

Template.registerHelper("Reviews", Reviews);

import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
    render(<App />, document.getElementById('render-target'));
});
