  function formatTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var amORpm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + amORpm;
    return strTime;
  }
