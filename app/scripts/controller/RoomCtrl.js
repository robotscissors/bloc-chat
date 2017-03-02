(function() {
  function RoomCtrl(Room) {
    alert("this is working");
  }

 angular
    .module('blocChat')
    .controller('RoomCtrl', ['Room', RoomCtrl]);
})();