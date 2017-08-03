(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    
    Room.all = rooms;
    
    Room.add = function(room) {
        room.$add(newRoom);
    }
      
    return Room;
  }

  angular
    .module('Bloc-chat')
    .factory('Room', ['$firebaseArray', Room]);
})();