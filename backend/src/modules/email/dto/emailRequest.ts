import * as v from 'valibot'

const EmailRequestSchema = v.object({
    link: v.string(),
    email: v.pipe(v.string(), v.email())
})

export type EmailRequestDTO = v.InferInput<typeof EmailRequestSchema>;