import jwt from 'jsonwebtoken';

export function adminRoleMiddleware(req:any, res:any, next:any) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        req.user = jwt.verify(token, process.env.SECRET_KEY!);
        if(req.user.role === 'Admin') {
            next();
        } else {
            res.status(403).send({message: "You don't have permissions!"});
        }
    } catch(err:any) {
        console.log(err);

        res.status(401).send({message: "You didn't authorize! Please, pass authorization!"})        
    }
}