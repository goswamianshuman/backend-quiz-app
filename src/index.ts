import { Server } from "socket.io";
import { IoManager } from "./managers/IoManager";

const io = IoManager.getIo();

io.on("connection", (client) => {
  client.on("event", (data) => {
    const type = data.type;
  });
  client.on("disconnect", () => {
    /* _ */
  });
});

io.listen(3000);
