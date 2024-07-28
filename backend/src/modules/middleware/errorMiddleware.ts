import { ApiError } from "../error/ApiError.js";

export function errorMiddleware(err:any, req:any, res:any, next:any) {
    if(err instanceof ApiError) {
        return res.status(err.status).send({message: err.message})
    }

    res.status(500).send("Internal error! We've forgotten to handle that :(");
    console.log(err);
    

}