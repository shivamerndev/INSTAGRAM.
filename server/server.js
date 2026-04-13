import { PORT } from "./src/config/env.config.js";
import httpServer from "./src/io/socket.js";
import connectToDB from "./src/config/database.config.js";

connectToDB()
const port = PORT || 3000

httpServer.listen(port, () => console.log("app is running on port : ", port))