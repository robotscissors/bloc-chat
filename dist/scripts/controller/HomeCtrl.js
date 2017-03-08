(function() {
  function HomeCtrl($scope, Room, Message,$cookies) {

    // this is the controller to controll all functions of the room (get rooms, add rooms, etc.)
    // but I am unable to access these functions beyond this controller

    var errorFlag = false;

    /* Get all rooms in database */
    $scope.roomList = Room.all;

    /* Get the current Chat User Name */
    $scope.currentChatUser = $cookies.get('blocChatCurrentUser');


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

    this.submitMessage = function(newMessage){
      //check to make sure there is a room for people to chat in
      if (!$scope.currentRoom) {
        alert('You need to select a room to chat in!');
        errorFlag = true;
      }

      if ((newMessage !== undefined)) {
        Message.send(newMessage,$scope.currentChatUser,$scope.currentRoomId);
      }



    }

  }



 angular
    .module('blocChat')
    .controller('HomeCtrl', ['$scope','Room','Message','$cookies',HomeCtrl])
})();
