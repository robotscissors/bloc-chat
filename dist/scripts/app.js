(function() {
  function config($stateProvider, $locationProvider) {

    $locationProvider
      .html5Mode({
      enabled: true,
      requireBase: false
    });

    $stateProvider
      .state('home', {
      url: '/',
      controller: 'HomeCtrl as home',
      templateUrl: '/templates/home.html'
    })
  }

  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        // Modal configuration object properties
        animation: this.animationsEnabled,
        ariaLabelledBy: 'modal-title-top',
        ariaDescribedBy: 'modal-body-top',
        templateUrl: '/templates/userModal.html',
        controller: 'ModalUserInstanceCtrl',
        controllerAs: '$modalUserCtrl',
        size:'sm',
        backdrop  : 'static',
        keyboard  : false
      });
    }
  }
  angular
    .module('blocChat', ['ui.router',"firebase","ui.bootstrap","ngCookies"])
    .config(config)
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
