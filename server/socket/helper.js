// Handle

/*
  This need to handle the existacne of
    - msg
    - func
    - val

*/

let validator = (msg, val, func) => {
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

module.exports = validator
