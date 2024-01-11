import { IoManager } from "./managers/IoManager";

interface User {
  name: string;
  id: string;
}

interface Problem {
  title: string;
  description: string;
  image: string;
  answer: string;
  options: {
    id: number;
    title: string;
  };
}

export class Quiz {
  public roomId: string;
  private hasStarted: boolean;
  private problems: Problem[];
  private activeProblem: number;
  private users: User[];

  constructor(roomId: string) {
    this.roomId = roomId;
    this.hasStarted = false;
    this.problems = [];
    this.activeProblem = 0;
  }

  addProblem(problem: Problem) {
    this.problems.push(problem);
  }

  start() {
    this.hasStarted = true;
    const io = IoManager.getIo();

    io.emit("CHANGE_PROBLEM", {
      problem: this.problems[0],
    });
  }

  next() {
    this.activeProblem++;
    const problem = this.problems[this.activeProblem];
    const io = IoManager.getIo();

    if (problem) {
      io.emit("CHANGE_PROBLEM", {
        problem,
      });
    } else {
      io.emit("QUIZ_END", {
        problem,
      });
    }
  }

  random() {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";
    var chatLength = chars.length;
    var result = "";
  }

  addUser(name) {
    this.user;
  }
}
