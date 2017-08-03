(function() {
    function ModalCtrl($uibModal, Room) {
        
        this.open = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal',
                size: 'sm'
            });

        this.ok = function() {
            this.room = {
                name: ''
            };
            $uibModal.close(this.name);
        };
            this.cancel = function() {
                $uibModal.dismiss('cancel');
            };
            modalInstance.result.then(function(name) {
                this.room = name;
                Room.add(this.room);
            });
            
            
        };
    }
   
    angular
        .module('Bloc-chat')
        .controller('ModalCtrl',['$uibModal','Room', ModalCtrl]);

})();