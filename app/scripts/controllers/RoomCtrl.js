(function() {
    function RoomCtrl(Room) {
        this.rooms = Room.all;
                    
    }
    
    angular
        .module('Bloc-chat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();