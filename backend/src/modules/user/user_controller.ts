import express  from 'express';
import * as v from 'valibot';
import { ChangeEmailSchema } from './dto/request.js';
import { changeEmail } from './user_service.js';
import { errorMiddleware } from '../middleware/errorMiddleware.js';

const router = express.Router();

router.put('/change-email', async (req:any, res, next) => {
    try {
        const validate = v.parse(ChangeEmailSchema, req.query);
        await changeEmail(req.query);
        res.status(200).send({message: "Ваш почтовый адрес успешно изменен!"});
    } catch(err:any) {
        next(err);
    }

})

export default router;
