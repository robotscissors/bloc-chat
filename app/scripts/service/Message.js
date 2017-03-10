(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    var messageTime = new Date();
    return {
      getByRoomId: function(roomId){
                    var filteredMessages = ref.orderByChild("roomId").equalTo(roomId);
                    return ($firebaseArray(filteredMessages));
                  },

      send: function(newMessage,chatUser,currentRoomId,messageDateStamp){
     
              messages.$add({
                content: newMessage,
                roomId: currentRoomId,
                username: chatUser,
                sentAt: messageDateStamp
              });
    
            }
    };
   }
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
