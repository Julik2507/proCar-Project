import * as v from 'valibot'

const CreateTokensRequestSchema = v.object({
    accessToken: v.string(),
    refreshToken: v.string(),
})

export type CreateTokensRequestDTO= v.InferOutput<typeof CreateTokensRequestSchema>;

const RegisterResponseSchema = v.object({
    accessToken: v.string(),
    refreshToken: v.string()
})

export type RegisterResponseDTO = v.InferOutput<typeof RegisterResponseSchema>;