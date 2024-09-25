import * as v from 'valibot'

const registerResponseSchema = v.object({
    accessToken: v.string(),
    refreshToken: v.string()
})

export type registerResponseDTO = v.InferOutput<typeof registerResponseSchema>;