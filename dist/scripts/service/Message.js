(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    return {
      getByRoomId: function(roomId){
                    var filteredMessages = ref.orderByChild("roomId").equalTo(roomId);
                    return ($firebaseArray(filteredMessages));
                  }
    };
   }
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();