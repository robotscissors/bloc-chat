(function() {
  function ModalInstanceCtrl($uibModalInstance,$cookies,$scope) {

    this.ok = function(roomName) {
      $uibModalInstance.close(roomName);
    };


    this.cancel = function () {
      $uibModalInstance.dismiss({$value: 'cancel'});
    };

  }

 angular
    .module('blocChat')
   .controller('ModalInstanceCtrl', ['$uibModalInstance','$cookies','$scope',ModalInstanceCtrl]);
})();