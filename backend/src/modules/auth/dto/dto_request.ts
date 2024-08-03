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