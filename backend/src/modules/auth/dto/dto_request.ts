import * as v from 'valibot'

export const RegisterSchema = v.object({
    name: v.string('Invalid name of user!'),
    email: v.pipe(v.string('Invalid type of email!'), v.email("Invalid type of email!")),
    password: v.string('Invalid type of password!')
})

export type RegisterDTO = v.InferInput<typeof RegisterSchema>;

export const LoginSchema = v.object({
    email: v.pipe(v.string("Invalid login or password!"), v.email("Invalid login or password!")),
    password: v.string("Invalid login or password!")
})

export type LoginDTO = v.InferInput<typeof LoginSchema>;

export const JwtSchema = v.object({
    id: v.number(),
    email: v.string(),
    name: v.string(),
    role: v.string()
})

export type JwtDTO = v.InferInput<typeof JwtSchema>;

const SaveTokenRequestSchema = v.object({
    id: v.number(),
    token: v.string()
})

export type SaveTokenRequestDTO = v.InferInput<typeof SaveTokenRequestSchema>;