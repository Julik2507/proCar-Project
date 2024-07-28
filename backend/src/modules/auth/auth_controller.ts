import express  from 'express';
import * as v from 'valibot';
import { registerUser} from './auth_service.js';
import { RegisterSchema } from './dto/dto_request.js';

const router = express.Router()

router.post("/register", async (req, res) => {
    try{
        const validate = v.parse(RegisterSchema, req.body)
        res.send(await registerUser(req.body));
    } catch(error:any) {
        res.send({message: error.message});
    }
})

export default router
