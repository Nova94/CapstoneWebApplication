import defer from 'promise-defer';

export default api = {
    users: {
        getUsersForTeam: (teamId) => {
            let deferred = defer();
            Meteor.http.call("GET", 'http://localhost:3000/team/' + teamId, function (error, result) {
                deferred.resolve(result.data);
            });
            return deferred.promise;
        },

        updateUserRole: (userId, newRole) => {
                let deferred = defer();
                Meteor.http.call("PUT", 'http://localhost:3000/' + userId + '/setRole/' + newRole, function (error, result) {
                    deferred.resolve(result.data);
                });
            return deferred.promise;
        },

        updateUserTeam: (userId, newTeam) => {
            let deferred = defer();
            Meteor.http.call("PUT", 'http://localhost:3000/' + userId + '/setTeam/' + newTeam, function(error, result) {
                deferred.resolve(result.data);
            });
            return deferred.promise;
        },

        getAllUsers: () => {
            let deferred = defer();
            Meteor.http.call("GET", 'http://localhost:3000/admin/getAllUsers', function (error, result) {
                deferred.resolve(result.data);
            });
            return deferred.promise;
        }
    }
}