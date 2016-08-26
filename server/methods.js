import {Reviews} from '../imports/api/reviews.js'
import {Resumes} from '../imports/api/resumes'
import {check} from 'meteor/check'

Meteor.users.allow( {
    update: function() {
        var adminCheck = Meteor.users.findOne({_id: Meteor.userId()});
        return adminCheck && adminCheck.role === "admin";
    },
    insert: function() {
        var adminCheck = Meteor.users.findOne({_id: Meteor.userId()});
        return adminCheck && adminCheck.role === "admin";
    },
    remove: function() {
        var adminCheck = Meteor.users.findOne({_id: Meteor.userId()});
        return adminCheck && adminCheck.role === "admin";
    }
});

Reviews.allow( {
    insert: function() {
        console.log("Reviewisclient", Meteor.isClient);
        return true;
    }
});

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
        },
        'getTeam': function(teamId) {
            check(teamId, Number);

            var response;
            var data;
            var accessCheck = Meteor.users.findOne({_id: Meteor.userId()});
            if (accessCheck && (accessCheck.role === 'admin' || accessCheck.team === teamId )) {
                data = Meteor.users.find({team: teamId}).fetch();
            }
            if(data && data.length > 0){
                response = data
            }else{
                response = {
                    "error": true,
                    "message": "Users not found."
                }
            }
            return response;
        },
        'adminGetAllUsers': function() {
            var response;
            var data;
            var adminCheck = Meteor.users.findOne({_id: Meteor.userId()});
            if(adminCheck && adminCheck.role === "admin") {
                data = Meteor.users.find().fetch();
            }
            if(data && data.length > 0){
                response = data
            }else{
                response = {
                    "error": true,
                    "message": "Users not found."
                }
            }
            return response;

        },
        'setRole': function(id, role) {
            check(id, String);
            check(role, String);
            var response;
            var data;
            var adminCheck = Meteor.users.findOne({_id: Meteor.userId()});
            if(adminCheck && adminCheck.role === "admin") {
                data = Meteor.users.update({_id: id}, {$set: {"role": role}});
            }
            if(data === 1){
                response = {
                    "message": "Role set."
                }
            }else{
                response = {
                    "error": true,
                    "message": "Role cannot be set."
                }
            }
            return response;

        },
        'setTeam': function(id, team) {
            check(id, String);
            check(team, String);
            var response;
            var data;
            var adminCheck = Meteor.users.findOne({_id: Meteor.userId()});
            var nanCheck = isNaN(team);
            if(!nanCheck && adminCheck && adminCheck.role === "admin" ) {
                data = Meteor.users.update({_id: id}, {$set: {"team": parseInt(team)}});
            }

            if(data === 1){
                response = {
                    "message": "Team set."
                }
            }else{
                response = {
                    "error": true,
                    "message": "Team cannot be set."
                }
            }
            return response;
        }

    });
}
