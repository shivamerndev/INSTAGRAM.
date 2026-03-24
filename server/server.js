import { PORT } from "./src/config/env.config.js";
import app from "./src/app.js";
import connectToDB from "./src/config/database.config.js";

connectToDB()
const port = PORT || 3000

app.listen(port, () => console.log("app is running on port : ", port))