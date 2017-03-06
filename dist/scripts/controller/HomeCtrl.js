(function() {
  function HomeCtrl($scope, Room, Message) {
    
    // this is the controller to controll all functions of the room (get rooms, add rooms, etc.)
    // but I am unable to access these functions beyond this controller
    
    /* Get all rooms in database */
    $scope.roomList = Room.all; 
    
    /* What room is the current room */
    if ($scope.selectRoom === undefined){
      // need to define a default state 
       $scope.currentRoom = "";
    }
    
    /* When someone in the view selects a room, run this function */
    $scope.selectRow = function(name,roomId){
      $scope.currentRoom = name;
      $scope.currentRoomId = roomId;
      $scope.roomMessages = Message.getByRoomId($scope.currentRoomId);
    }


  }

 angular
    .module('blocChat')
    .controller('HomeCtrl', ['$scope','Room','Message',HomeCtrl]);
})();