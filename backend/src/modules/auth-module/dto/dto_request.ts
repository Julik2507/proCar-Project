import * as v from 'valibot'

export const RegisterSchema = v.object({
    name: v.string('Не указано имя пользователя!'),
    email: v.pipe(v.string('Неверный тип электронной почты!'), v.email("Неверный тип электронной почты!")),
    password: v.string('Неверный тип пароля!')
})

export type RegisterDTO = v.InferInput<typeof RegisterSchema>;