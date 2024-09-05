import jwt from 'jsonwebtoken';

export async function roleMiddleware(req:any, res:any, next:any) {
    
    try {
        const token = req.headers.authorization.split(' ')[1];
        req.user = jwt.verify(token, process.env.SECRET_KEY!); 

        next();

    } catch(err:any) {
        console.log(err);
        
        res.status(401).send({message: "You didn't authorize! Please, pass authorization!"});
    }
}