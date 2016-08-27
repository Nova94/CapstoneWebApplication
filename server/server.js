import {Reviews} from '../imports/api/reviews.js';
import {Users} from '../imports/api/users.js';

// publish the follow fields so that they're available when calling Meteor.user()
Meteor.publish(null, function () {
    if (this.userId) {
        return Meteor.users.find({_id: this.userId}, {
            fields: {
                team: 1,
                role: 1,
                'services.google.name': 1,
                'services.google.given_name': 1,
                'services.google.family_name': 1,
                'services.google.email': 1
            }
        });
    } else {
        this.ready();
    }
});
