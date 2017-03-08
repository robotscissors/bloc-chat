(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        // Modal configuration object properties
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


    }
  }
  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
