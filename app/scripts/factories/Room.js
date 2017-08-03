(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child('rooms');
    var rooms = $firebaseArray(ref);
    
    return {
        all: rooms,
        add: function(newRoom) {
            rooms.$add(newRoom)
        }
    };
  }

  angular
    .module('Bloc-chat')
    .factory('Room', ['$firebaseArray', Room]);
})();