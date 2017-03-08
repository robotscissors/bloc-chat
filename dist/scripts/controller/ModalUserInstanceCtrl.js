(function() {
  function ModalUserInstanceCtrl($uibModalInstance,$cookies,$scope) {

    this.set = function(userName) {
      if (!userName) {
        alert('You didn\'t provide a username!');
      } else {
        $uibModalInstance.close(userName);
        //set cookie
        $cookies.put('blocChatCurrentUser', userName);
        $scope.currentChatUser = userName;
      }
     $uibModalInstance.close(userName);
    };
    
  }
 angular
    .module('blocChat')
   .controller('ModalUserInstanceCtrl', ['$uibModalInstance','$cookies','$scope',ModalUserInstanceCtrl]);
})();
