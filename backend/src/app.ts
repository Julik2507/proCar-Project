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
import fileUpload from "express-fileupload";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const app = express();
const port = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// app.use() //cookieParser
app.use(express.json());
app.use(fileUpload({}));
app.use(express.static(path.resolve(__dirname, "static")));
app.use(cookieParser()); //для парсинга куки в req.cookie
app.use(cors({origin: []}))
app.use("/auth", authModule);
app.use("/user", userModule);
app.use("/approve", emailController);
app.use("/brands", brandsController);
app.use("/models", modelsController);

app.use(errorMiddleware); // LAST ERROR MIDDLEWARE

app.listen(port, () => {
    console.log(`http://0.0.0.0:${port}`)
})
