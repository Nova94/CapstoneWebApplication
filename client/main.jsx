import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from '../imports/ui/App.jsx';
import Homepage from '../imports/ui/Homepage';
import AdminDashboard from '../imports/ui/admin/AdminDashboard';
import StudentDashboard from '../imports/ui/student/StudentDashboard';

Meteor.startup(() => {
    render(
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Homepage}/>
                <Route path="admin" component={AdminDashboard}/>
                <Route path="student" component={StudentDashboard}/>
            </Route>
        </Router>
        , document.getElementById('render-target'));
});
