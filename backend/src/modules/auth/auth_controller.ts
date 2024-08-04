import express  from 'express';
import * as v from 'valibot';
import { loginUser, registerUser} from './auth_service.js';
import { LoginSchema, RegisterSchema } from './dto/dto_request.js';

const router = express.Router()

router.post("/register", async (req, res, next) => {
    try{
        v.parse(RegisterSchema, req.body)
        res.status(200).send(await registerUser(req.body));
    } catch(err:any) {
        next(err);
    }
})

router.post("/login", async (req, res, next) => {
    try {
        v.parse(LoginSchema, req.body);
        res.status(200).send(await loginUser(req.body))
    } catch(err:any) {
        next(err);
    }
})

export default router

