import { IoManager } from "./managers/IoManager";

const io = IoManager.getIo();

io.on("connection", (client) => {
  client.on("event", (data) => {
    const type = data.type;

    // todo:
    // 3 admin events
    // 2 client events
    // usermanager => quizmanager => quiz => broadcast
  });
  client.on("disconnect", () => {
    /* _ */
  });
});

io.listen(3000);
