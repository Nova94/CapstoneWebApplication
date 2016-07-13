import '../imports/api/users.js';
import '../imports/api/reviews.js';
import '../imports/api/resumes.js';

/* TODO: this can be used to add fields (resume reviews team) to user objects in mongodb
Accounts.onCreateUser((options, user) => {


});*/

Accounts.validateNewUser((user) => {
    let whitelist = Assets.getText('whitelist.csv');

    if(user.services.google.email != undefined
        && whitelist.search(user.services.google.email) != -1) {
        return true;
    } else {
        throw new Meteor.Error(403, "This Email Address is not allowed.");
    }
});