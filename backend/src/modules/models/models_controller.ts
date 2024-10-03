import express from "express";
import { createModel } from "./models_service.js";

const router = express.Router();

router.post("/create", async (req, res, next) => {
    try {
        await createModel(req.body);
        res.status(200).send("Successful!");
    } catch(err: any) {
        next(err);
    }
})

export default router;