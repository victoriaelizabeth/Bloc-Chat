(function() {
    function HomeCtrl(Room) {
        this.rooms = Room.all;
    }

    angular
        .module('Bloc-chat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();