(function() {
  function RoomCtrl($scope,Room) {
    /* Get all rooms in database */
    $scope.roomList = Room.all; 
  }

 angular
    .module('blocChat')
    .controller('RoomCtrl', ['$scope','Room',RoomCtrl]);
})();