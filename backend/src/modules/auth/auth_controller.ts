import express  from 'express';
import * as v from 'valibot';
import { loginUser, logoutUser, registerUser, updTokensByRefreshToken} from './auth_service.js';
import { LoginSchema, RegisterSchema } from './dto/dto_request.js';
import { roleMiddleware } from '../middleware/userRoleMiddleware.js';

const router = express.Router();

router.post("/register", async (req, res, next) => {
    try{
        v.parse(RegisterSchema, req.body);

        const result = await registerUser(req.body);
        // console.log(res.socket?.remoteAddress);
        
        res.cookie('refreshToken', result.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
        res.status(200).send(result);
    } catch(err:any) {
        next(err);
    }
})

router.post("/login", async (req, res, next) => {
    try {
        v.parse(LoginSchema, req.body);

        const result = await loginUser(req.body);
        res.cookie('refreshToken', result.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
        res.status(200).send(result);
    } catch(err:any) {
        next(err);
    }
})

router.delete("/logout", roleMiddleware, async (req, res, next) => {
    try{
        const result = await logoutUser(req.cookies);
        res.clearCookie("refreshToken");
        res.status(200).send(result);
        //res.cookie is an object!
    } catch(err:any) {
        next(err);
    }  
})

router.get("/refresh", async (req, res, next) => {
    try {
        const result = await updTokensByRefreshToken(req.cookies);
        res.cookie("refreshToken", result.refreshToken);
        res.send(result);
    } catch(err:any) {
        next(err);
    }
})


export default router

