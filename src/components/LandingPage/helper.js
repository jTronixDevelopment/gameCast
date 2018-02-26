exports.isValidRoomCode=(roomCode)=>{
  // Use once the first digit roomcode prefixes are determined
  // var regex= '^('A'|roomCode2|roomCode3)[A-Z]{4}$';
  //  For now matches all Uppercase letter string of 5 chars
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
