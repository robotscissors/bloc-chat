(function() {
  function ModalUserCtrl($uibModal,$scope) {

    this.open=function(){
      // define the mobile instance
      var modalInstance = $uibModal.open({
        animation: this.animationsEnabled,
        ariaLabelledBy: 'modal-title-top',
        ariaDescribedBy: 'modal-body-top',
        templateUrl: '/templates/userModal.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: '$modalCtrl',
        size:'sm',
        backdrop  : 'static',
        keyboard  : false
      });

      //listen for the result (True or Dismiss)
      modalInstance.result.then(function(username) {
        //add the room
        alert ("add User Name");
      }, function () {
        console.log('Modal cancelled at: ' + new Date());
      });

    };




  }

  angular
    .module('blocChat')
    .controller('ModalUserCtrl', ['$uibModal','$scope',ModalUserCtrl]);
})();
