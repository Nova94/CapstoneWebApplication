import defer from 'promise-defer';

export default api = {
    users: {
        getUsersForTeam: (teamId) => {
            let deferred = defer();
            Meteor.call('getTeam', teamId, function (error, result) {
                deferred.resolve(result);
            });
            return deferred.promise;
        },

        updateUserRole: (userId, newRole) => {
                let deferred = defer();
                Meteor.call('setRole', userId, newRole, function (error, result) {
                    deferred.resolve(result);
                });
            return deferred.promise;
        },

        updateUserTeam: (userId, newTeam) => {
            let deferred = defer();
            Meteor.call('setTeam',userId, newTeam, function(error, result) {
                deferred.resolve(result);
            });
            return deferred.promise;
        },

        getAllUsers: () => {
            let deferred = defer();
            Meteor.call('adminGetAllUsers', function (error, result) {
                deferred.resolve(result);
            });
            return deferred.promise;
        }
    }
}
