(function() {
  function HomeCtrl($scope, Room, Message, $cookies) {

    // this is the controller to controll all functions of the room (get rooms, add rooms, etc.)
    // but I am unable to access these functions beyond this controller
    
    /* Get all rooms in database */
    //Needs to be a $scope variable since we need it for ng-repeat in view
    $scope.roomList = Room.all; 
    
    $scope.roomList.$loaded().then(function() {

      //scope varialbe for roomID, Messages and roomname - all used in view  
      $scope.currentRoomId = $scope.roomList[0].$id; 
      $scope.currentRoom = $scope.roomList[0].$value; 
      $scope.roomMessages = Message.getByRoomId($scope.currentRoomId);
    })

    /* Get the current Chat User Name */
    $scope.currentChatUser = $cookies.get('blocChatCurrentUser');

    /* When someone in the view selects a room, run this function */
    this.selectRoom = function(name,roomId){
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
