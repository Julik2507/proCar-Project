import * as v from "valibot";


export const JwtTokenSchema = v.object({
    id: v.number("Неправильный id пользователя"),
    email: v.string("Неправильный адрес электронной почты!"),
    role: v.string("Неправильная роль у пользователя!")
});

export type JwtTokenDTO = v.InferInput<typeof JwtTokenSchema>;

export const ChangeEmailSchema = v.object({
    email: v.pipe(v.string("Неверный адрес электронной почты"), v.email("Неверный адрес электронной почты"))
});

export type ChangeEmailDTO = v.InferInput<typeof ChangeEmailSchema>