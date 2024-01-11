import { Socket } from "socket.io";
import { QuizManager } from "./QuizManager";

export class UserManager {
  private users: {
    roomId: string;
    socket: Socket;
  }[];

  constructor() {
    this.users = [];
  }

  addUser(roomId: string, socket: Socket) {
    this.users.push({ roomId, socket });
    this.createHandlers(roomId, socket); 
  }

  private createHandlers(roomId: string, socket: Socket) {
    socket.on("join", (data) => {
      const userId = QuizManager.addUser(data.roomId, data.name);
      
    })
  }
}
