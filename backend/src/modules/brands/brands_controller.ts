import express  from 'express';
import { getBrand, createBrands } from './brands_service.js';

const router = express.Router();

router.post("/create", async (req:any, res, next) => {
    try {
        const result = await createBrands(req.query.name);
        res.status(200).send("Successful!")
    } catch(err:any) {
        next(err);
    }
})

router.get("/get-brand", async (req:any, res, next) => {
    try {
        // if (typeof req.query.brand == "nummm" )  ДОРАБОТАТЬ!!!!

        const result = await getBrand(req.query.brand);
        res.status(200).send(result);
    } catch(err:any) {
        next(err)
    }
})

router.get("/hello", async (req:any, res, next) => {
    try {
        res.status(200).send("hello world!");
    } catch(err:any) {
        next(err)
    }
})

export default router;