// Handle

/*
  This need to handle the existacne of
    - msg
    - func
    - val
*/

// let validator = (msg, val, func) => {
exports.validator = (msg, val, func) => {
  if (msg && (typeof msg === "object")) {
    if (val in msg) {
      func(msg);
    } else {
      return false;
    }
  } else {
    return false;
  }
}

exports.isValidRoomCode=(roomCode)=>{
  // Use once the first digit roomcode prefixes are determined
  // var regex= '^(roomCode1|roomCode2|roomCode3)[A-Z]{4}$';

  //  For now matches all Uppercase letter string of 5 chars
  var regex='^[A-Z]{5}$';

  if(roomCode.match(regex)){
    console.log('isValidRoomCode: true');
    return true;
  }
  else{
    console.log('isValidRoomCode: false');
    return false;
  }
}
