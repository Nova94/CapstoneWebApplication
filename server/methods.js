Meteor.users.deny( {
	update: function() {
		return true;
	}
});
if(Meteor.isServer) {
	Meteor.methods({
		'insertReviewToUser': function(result) {
			if (Meteor.userId() && result != undefined) {
				console.log(result);
				Meteor.users.update({_id: Meteor.userId()},
						{$addToSet: {reviews: result}});
			}
		}
	});
}
