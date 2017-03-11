(function() {
  function HomeCtrl($scope, Room, Message,$cookies) {

    // this is the controller to controll all functions of the room (get rooms, add rooms, etc.)
    // but I am unable to access these functions beyond this controller

    var errorFlag = false;

    /* Get all rooms in database */
    $scope.roomList = Room.all;

    /* Get the current Chat User Name */
    $scope.currentChatUser = $cookies.get('blocChatCurrentUser');

    /* When someone in the view selects a room, run this function */
    $scope.selectRoom = function(name,roomId){
      $scope.currentRoom = name;
      $scope.currentRoomId = roomId;
      $scope.roomMessages = Message.getByRoomId($scope.currentRoomId);
    }

    this.submitMessage = function(newMessage){
      Message.send(newMessage.message,$scope.currentRoomId,$scope.currentChatUser); 
      this.messageToSend={};
    }
  }


 angular
    .module('blocChat')
    .controller('HomeCtrl', ['$scope','Room','Message','$cookies',HomeCtrl])
})();
