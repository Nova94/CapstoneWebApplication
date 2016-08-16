Meteor.users.deny( {
	update: function() {
		return false;
	}
});
if(Meteor.isServer) {
	Meteor.methods({
		'insertReviewToUser': function(result) {
			if (Meteor.userId() && result != undefined) {
				Meteor.users.update({_id: Meteor.userId()},
						{$addToSet: {reviews: result}});
			}
		}
	});
}
