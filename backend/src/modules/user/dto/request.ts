import * as v from "valibot";


export const ChangeEmailSchema = v.object({
    id: v.string("Неправильный id пользователя"),
    email: v.string("Неправильный адрес электронной почты!")
})

export type ChangeEmailDTO = v.InferInput<typeof ChangeEmailSchema>;