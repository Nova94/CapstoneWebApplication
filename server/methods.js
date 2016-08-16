Meteor.users.deny( {
	update: function() {
		return true;
	}
});
if(Meteor.isServer) {
	Meteor.methods({
		'insertReviewToUser': function(result) {
			//TODO: check if reviewee is actual user and on same team
			if (Meteor.userId() && result != undefined) {
				console.log(result);
				Meteor.users.update({_id: Meteor.userId()},
						{$addToSet: {reviews: result}});
			}
		}
	});
}
