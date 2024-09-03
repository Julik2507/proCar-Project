import { ApiError } from "../errorHandler/ApiError.js";
import * as v from "valibot";

export function errorMiddleware(err:any, req:any, res:any, next:any) {
    if(v.isValiError(err)) {
        return res.status(400).send({message: err.message});
    } else if(err instanceof ApiError) {
        return res.status(err.status).send({message: err.message});
    }

    res.status(500).send("Internal error! We've forgotten to handle that :(");
    console.log(err);
}