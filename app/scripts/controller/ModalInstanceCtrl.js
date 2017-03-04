(function() {
  function ModalInstanceCtrl($uibModalInstance) {
    
    this.ok = function(roomName) {
       $uibModalInstance.close(roomName);
    };
    
    this.cancel = function () {
      $uibModalInstance.dismiss({$value: 'cancel'});
    };
 
  }

 angular
    .module('blocChat')
    .controller('ModalInstanceCtrl', ['$uibModalInstance',ModalInstanceCtrl]);
})();