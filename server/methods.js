import {Reviews} from '../imports/api/reviews.js'
import {Resumes} from '../imports/api/resumes'
import {check} from 'meteor/check'

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
            if (Meteor.userId() && result && result.reviewer === Meteor.userId()) {
                var schema = Reviews.simpleSchema();
                schema.clean(result);
                check(result, schema);

                var exists = Meteor.users.findOne({
                    "_id": Meteor.userId(),
                    "reviews.type": result.reviewType,
                    "reviews.reviewee": result.reviewee});

                if(!exists) {
                    Meteor.users.update({_id: Meteor.userId()},
                            {$addToSet: {reviews: result}});
                }
            }
        },
        'insertResumeToUser': function (result) {
            if (Meteor.userId() && result && result.userId === Meteor.userId() ) {
              let schema = Resumes.simpleSchema();
              schema.clean(result);
              check(result, schema);

              let userExists = Meteor.users.findOne({
                "_id": Meteor.userId()
              });

              if(userExists) {
                Meteor.users.update({_id: Meteor.userId()}, 
                  {$set: {resume: result}});
              }
            }
        }
    });
}
