import jwt from 'jsonwebtoken';
import { db } from "../../../db/db.js";
import { tokens } from "../../../db/schema.js";
import { UserModel } from '../models/user_model.js';
import { JwtDTO, SaveTokenRequestDTO } from '../dto/dto_request.js';
import { CreateTokensResponseDTO } from '../dto/dto_response.js';
import { eq } from 'drizzle-orm';

export async function createTokens(dto:JwtDTO): Promise<CreateTokensResponseDTO> {

    const payload = new UserModel(dto);
        

    const accessToken = jwt.sign(payload.toJSON(), process.env.SECRET_KEY_ACCESS!, {expiresIn: process.env.EXPIRES_IN_ACCESS});
    const refreshToken = jwt.sign(payload.toJSON(), process.env.SECRET_KEY_REFRESH!, {expiresIn: process.env.EXPIRES_IN_REFRESH});
    

    return {accessToken, refreshToken};
  
}

export async function saveToken(dto:SaveTokenRequestDTO): Promise<void> {
    const userToken = await db.select().from(tokens).where(eq(tokens.user_id, dto.id));
    
    if(userToken.length > 0) {
        await db.update(tokens).set({token: dto.token}).where(eq(tokens.user_id, dto.id));
    } else {
        await db.insert(tokens).values({token: dto.token, user_id: dto.id});
    }
}

