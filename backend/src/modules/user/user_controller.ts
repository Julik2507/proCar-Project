import express  from 'express';
import * as v from 'valibot';
import { ChangeEmailSchema } from './dto/request.js';
import { changeEmail, getUsers } from './user_service.js';
import { roleMiddleware } from '../middleware/userRoleMiddleware.js';
import { adminRoleMiddleware } from '../middleware/adminRoleMiddleware.js';

const router = express.Router();

router.put('/change-email', roleMiddleware, async (req:any, res, next) => {
    try {
        v.parse(ChangeEmailSchema, req.query);
        await changeEmail(req.user, req.query.email);
        res.status(200).send({message: "Ваш почтовый адрес успешно изменен!"});
    } catch(err:any) {
        next(err);
    }

})
///hellotest!sdf1!

router.get("/get-users", roleMiddleware, async (req, res, next) => {
    try {
        const result = await getUsers();
        res.send(result);
    } catch(err:any) {
        next(err);
    }
})

export default router;
