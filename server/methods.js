import {Reviews} from '../imports/api/reviews.js'

Meteor.users.allow( {
    update: function() {
        console.log("usersisclient", Meteor.isClient);

        return Meteor.isServer  ;
    }
});

Reviews.allow( {
    insert: function() {
        console.log("Reviewisclient", Meteor.isClient);
        return true;
    }
});
/*
Meteor.users.deny( {
	update: function() {
		return false;
	}
});
*/
if(Meteor.isServer) {
	Meteor.methods({
		'insertReviewToUser': function(result) {
			//console.log(result.reviewer, Meteor.userId(), result.reviewer === Meteor.userId());
			if (Meteor.userId() && result && result.reviewer === Meteor.userId()) {
				Meteor.users.update({_id: Meteor.userId()},
						{$addToSet: {reviews: result}});
			}
		}
	});
}
