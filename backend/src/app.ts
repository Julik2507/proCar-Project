import express from "express";
import authModule from "./modules/auth/auth_controller.js";
import userModule from "./modules/user/user_controller.js";
import emailController from "./modules/email/email.controller.js";
import brandsController from "./modules/brands/brands_controller.js";
import modelsController from "./modules/models/models_controller.js";
import { errorMiddleware } from "./modules/middleware/errorMiddleware.js";
import 'dotenv/config';
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT;

// app.use() //cookieParser
app.use(express.json());
app.use(cookieParser()); //для парсинга куки в req.cookie
app.use(cors({origin: [`${process.env.CLIENT_MACHINE}`]}))
app.use("/auth", authModule);
app.use("/user", userModule);
app.use("/approve", emailController);
app.use("/brands", brandsController);
app.use("/models", modelsController);

app.use(errorMiddleware); // LAST ERROR MIDDLEWARE

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
