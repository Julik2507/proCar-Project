import express from 'express';
import { approveEmail } from './email.service.js';

const router = express.Router();

router.post('/email/:link', async (req, res, next) => {
    try {
        const result = await approveEmail(req.params.link);
        res.redirect('https://ya.ru/');
    } catch(err:any) {
        next(err);
    }

})

export default router;