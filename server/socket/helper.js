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
  // var regex= '^('A'|roomCode2|roomCode3)[A-Z]{4}$';

  //  For now matches all Uppercase letter string
  // of 6 chars (1 game specific char + 5 room specific chars)
  var regex='^[A-Z]{6}$';

  if(roomCode.match(regex)){
    console.log('isValidRoomCode: true');
    return true;
  }
  else{
    console.log('isValidRoomCode: false');
    return false;
  }
}
