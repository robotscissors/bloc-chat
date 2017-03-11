(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
 
    return {
      getByRoomId: function(roomId){
                    var filteredMessages = ref.orderByChild("roomId").equalTo(roomId);
                    return ($firebaseArray(filteredMessages));
                  },

      send: function(newMessage,currentRoomId,currentChatUser){
              var d = new Date();
              var messageStamp = formatTime(d); //just get the time stamp
        
            if ((newMessage !== undefined)) {// is there a message to post?    
        
              if (!currentRoomId) {
                    alert('You need to select a room to chat in!');
              } else { //let's post the comment      
                messages.$add({
                  content: newMessage,
                  roomId: currentRoomId,
                  username: currentChatUser,
                  sentAt: messageStamp
                });

            }     
        }
    }
   }
  }
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
