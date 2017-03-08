(function() {
  function ModalInstanceCtrl($uibModalInstance,$cookies,$scope) {

    this.ok = function(roomName) {
      $uibModalInstance.close(roomName);
    };

    this.set = function(userName) {
      if (!userName) {
        alert('You didn\'t provide a username!');
      } else {
        $uibModalInstance.close(userName);
        //set cookie
        $cookies.put('blocChatCurrentUser', userName);
        $scope.currentChatUser = userName;
      }
    };

    this.cancel = function () {
      $uibModalInstance.dismiss({$value: 'cancel'});
    };

  }

 angular
    .module('blocChat')
   .controller('ModalInstanceCtrl', ['$uibModalInstance','$cookies','$scope',ModalInstanceCtrl]);
})();
