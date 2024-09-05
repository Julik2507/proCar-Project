import jwt from 'jsonwebtoken';
import { db } from "../../db/db.js";
import { tokens } from "../../db/schema.js";
import { UserModel } from './models/user_model.js';
import { JwtDTO, SaveTokenRequestDTO } from './dto/dto_request.js';
import { CreateTokensRequestDTO } from './dto/dto_response.js';

export async function createTokens(dto:JwtDTO): Promise<CreateTokensRequestDTO> {

    const payload = new UserModel(dto);
    
    console.log(payload.toJSON());
    

    const accessToken = jwt.sign(payload.toJSON(), process.env.SECRET_KEY_ACCESS!, {expiresIn: process.env.EXPIRES_IN_ACCESS});
    const refreshToken = jwt.sign(payload.toJSON(), process.env.SECRET_KEY_REFRESH!, {expiresIn: process.env.EXPIRES_IN_REFRESH});
    

    return {accessToken, refreshToken};
  
}

export async function saveToken(dto:SaveTokenRequestDTO): Promise<void> {
    await db.insert(tokens).values({token: dto.token, user_id: dto.id});
}