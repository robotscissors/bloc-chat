(function() {
  function ModalCtrl($uibModal,Room,$scope) {
    
    this.open=function(){
      // define the mobile instance
      var modalInstance = $uibModal.open({
        animation: this.animationsEnabled,
        ariaLabelledBy: 'modal-title-top',
        ariaDescribedBy: 'modal-body-top',
        templateUrl: '/templates/roomModal.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: '$modalCtrl',
        size:'sm'
      });
      
      //listen for the result (True or Dismiss)
      modalInstance.result.then(function(roomName) {
        //add the room
        Room.addRoom(roomName);
      }, function () {
        console.log('Modal cancelled at: ' + new Date());
      });

    };
    
    

      
  }

 angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModal','Room','$scope',ModalCtrl]);
})();