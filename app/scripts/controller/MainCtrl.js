(function() {
  function MainCtrl($scope, Room) {
    
    // this is the controller to controll all functions of the room (get rooms, add rooms, etc.)
    // but I am unable to access these functions beyond this controller
    
    /* Get all rooms in database */
    $scope.roomList = Room.all; 


  }

 angular
    .module('blocChat')
    .controller('MainCtrl', ['$scope','Room',MainCtrl]);
})();