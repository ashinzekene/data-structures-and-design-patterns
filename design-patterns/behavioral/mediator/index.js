function Participant(name) {
  this.name = name;
  this.chatRooom = null;
}
Participant.prototype.sendMessage = function (msg, recipient) {
  this.chatRoom.send(msg, this, recipient);
};
Participant.prototype.recieve = function (sender, msg) {
  console.log(` ${sender}: ${msg} --> ${this.name}`);
};
Participant.prototype.voiceCall = function (...recipients) {
  this.chatRoom.makeCall('voice', recipients, this);
};
Participant.prototype.videoCall = function (type, recipients) {
  this.chatRoom.makeCall('video', recipients, this);
};
Participant.prototype.receiveCall = function (type, sender) {
  console.log(`${this.name}: Receiving ${type} call from ${sender}`);
};

function ChatRoom() {
  this.participants = {};
}
ChatRoom.prototype.register = function (participant) {
  this.participants[participant.name] = participant;
  participant.chatRoom = this;
};
ChatRoom.prototype.send = function (msg, sender, recipient) {
  if (recipient) {
    if (this.participants[recipient]) {
      this.participants[recipient].recieve(sender.name, msg);
    } else {
      throw new Error('Participant not found');
    }
  } else {
    Object.values(this.partipants).forEach(participant => {
      if (participant.name !== sender.name) {
        participant.recieve(sender.name, msg);
      }
    });
  }
};

ChatRoom.prototype.makeCall = function (type, recipients, sender) {
  Object.values(this.participants).forEach(recipient => {
    if (sender.name !== recipient.name) {
      recipient.receiveCall('type', sender.name);
    }
  });
};

const groupChat = new ChatRoom();
const femi = new Participant('femi');
const tunde = new Participant('tunde');
const emeka = new Participant('emeka');
const samuel = new Participant('samuel');
const ada = new Participant('ada');
const onyinye = new Participant('onyinye');
const sade = new Participant('sade');
const hassan = new Participant('hassan');
groupChat.register(femi);
groupChat.register(tunde);
groupChat.register(emeka);
groupChat.register(samuel);
groupChat.register(ada);
groupChat.register(onyinye);
groupChat.register(sade);
groupChat.register(hassan);
femi.sendMessage('Hi, are you at home?', 'tunde');
ada.sendMessage('Hello Emeka, I love you', 'emeka');
sade.sendMessage('Tunde, I have gist for you', 'tunde');
onyinye.sendMessage('Hey, when are we going out', 'samuel');
hassan.sendMessage('I need your help', 'sade');
tunde.voiceCall('emeka', 'safe', 'ada');
