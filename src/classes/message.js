
class Message {
  constructor(parameters) {
    this.origin = 'client';
    this.originSocket = '';
    this.roomCode = '';
    this.endPoint = '';
    this.toAll = false;
    this.socket = '';
    this.action = '';
    this.msg = '';
  }
}

module.exports.Message = Message;
