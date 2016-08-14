import { Reviews } from '../imports/api/reviews.js';
import { Users } from '../imports/api/users.js';
// Meteor.methods({
//     'getTeamById': () => {
//         return [
//             {
//                 name: 'Bob',
//                 email: 'bob@gmail.com',
//                 team: 'winning team',
//                 mid360: {
//                     completed: true,
//                     id: 123
//                 },
//                 final360: {
//                     completed: false,
//                     id: 124
//                 },
//             },
//             {
//                 name: 'Jessica',
//                 email: 'jessica@gmail.com',
//                 team: 'winning team',
//                 mid360: {
//                     completed: true,
//                     id: 123
//                 },
//                 final360: {
//                     completed: true,
//                     id: 124
//                 },
//             },
//             {
//                 name: 'Sam',
//                 email: 'sam@gmail.com',
//                 team: 'winning team',
//                 mid360: {
//                     completed: true,
//                     id: 123
//                 },
//                 final360: {
//                     completed: false,
//                     id: 124
//                 },
//             },
//         ];
//
//     });
// },

// route to display all reviews that a specified reviewer has submitted
Router.route('/reviews/:reviewer', {where: 'server'})
    .get(function(){
        var response;
        if(this.params.reviewer !== undefined){
            var data = Reviews.find({reviewer: this.params.reviewer}).fetch();
            if(data.length > 0){
                response = data
            }else{
                response = {
                    "error": true,
                    "message": "Review not found."
                }
            }
        }
        this.response.setHeader('Content-Type',"application/json");
        this.response.end(JSON.stringify(response));
    });

// route to display all midterm/final 360 reviews a user has submitted
Router.route('/reviews/:reviewer/:reviewType', {where: 'server'})
    .get(function(){
        var response;
        if(this.params.reviewer !== undefined){
            var data = Reviews.find({reviewer: this.params.reviewer, reviewType: this.params.reviewType}).fetch();
            if(data.length > 0){
                response = data
            }else{
                response = {
                    "error": true,
                    "message": "Review not found."
                }
            }
        }
        this.response.setHeader('Content-Type',"application/json");
        this.response.end(JSON.stringify(response));
    });
// route to display a review that a specified reviewer has submitted for a specified reviewee
Router.route('/reviews/:reviewer/:reviewee', {where: 'server'})
    .get(function(){
        var response;
        if(this.params.reviewer !== undefined){
            var data = Reviews.find({reviewer: this.params.reviewer, reviewee: this.params.reviewee}).fetch();
            if(data.length > 0){
                response = data
            }else{
                response = {
                    "error": true,
                    "message": "Review not found."
                }
            }
        }
        this.response.setHeader('Content-Type',"application/json");
        this.response.end(JSON.stringify(response));
    });

// route to display all reviews
Router.route('/reviews/', {where: 'server'})
    .get(function(){
        var response;
        if(this !== undefined){
            var data = Reviews.find().fetch();
            if(data.length > 0){
                response = data
            }else{
                response = {
                    "error": true,
                    "message": "Reviews not found."
                }
            }
        }
        this.response.setHeader('Content-Type',"application/json");
        this.response.end(JSON.stringify(response));
    });

// route to display list of users by team
Router.route('/team/:teamId', {where: 'server'})
    .get(function(){
        var response;
        if(this !== undefined){
            var data = Meteor.users.find({team: parseInt(this.params.teamId)}).fetch();
            if(data.length > 0){
                response = data
            }else{
                response = {
                    "error": true,
                    "message": "Reviews not found."
                }
            }
        }
        this.response.setHeader('Content-Type',"application/json");
        this.response.end(JSON.stringify(response));
    });


// publishing some user fields
Meteor.publish(null, function () {
    if (this.userId) {
        return Meteor.users.find({_id: this.userId}, {fields: {
            team: 1,
            'services.google.name': 1,
            'services.google.given_name': 1,
            'services.google.family_name': 1}});
    }else{
        this.ready();
    }
});