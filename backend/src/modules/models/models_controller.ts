import express from "express";
import { createModel } from "./models_service.js";
import { saveImg } from "../uploadFIles/upload_service.js";

const router = express.Router();

router.post("/create", async (req, res, next) => {
    try {
        const fileName = await saveImg(req.files)
        await createModel(req.body, fileName);
        res.status(200).send("Successful!");
    } catch(err: any) {
        next(err);
    }
})

export default router;