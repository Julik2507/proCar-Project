import express from "express";
import authModule from "./modules/auth/auth_controller.js";
import userModule from "./modules/user/user_controller.js";
import { errorMiddleware } from "./modules/middleware/errorMiddleware.js";
import 'dotenv/config'

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/auth", authModule);
app.use("/user", userModule);

app.use(errorMiddleware); // LAST

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
