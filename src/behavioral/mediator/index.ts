class Participant {
  name: string;
  chatRoom: ChatRoom;

  constructor(name: string) {
    this.name = name;
  }

  send(message: string, to: Participant) {
    this.chatRoom.send(message, this, to);
  }

  receive(message: string, from: Participant) {
    console.log(`From ${from.name}: ${message}`);
  }
}

class ChatRoom {
  participants: { [name: string]: Participant } = {};

  register(participant: Participant) {
    participant.chatRoom = this;
    this.participants[participant.name] = participant;
  }

  remove(participant: Participant) {
    const { [participant.name]: removed, ...participants } = this.participants;
    removed.chatRoom = undefined;
    this.participants = participants;
  }

  send(message: string, from: Participant, to?: Participant) {
    if (to) {
      this.participants[to.name].receive(message, from);
      return;
    }
    for (let name in this.participants) {
      if (from.name !== name) {
        // broadcast to all
        this.participants[name].receive(message, from);
      }
    }
  }
}

function run() {
  const chat = new ChatRoom();

  const peter = new Participant("Peter");
  const clara = new Participant("Clara");
  const klaus = new Participant("Klaus");

  chat.register(peter);
  chat.register(clara);
  chat.register(klaus);

  chat.remove(clara);

  chat.send("Hello All", peter);
}

export default run;
