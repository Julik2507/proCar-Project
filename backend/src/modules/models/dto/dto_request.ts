import * as v from "valibot";

const CreateModelRequestSchema = v.object({
    name: v.string(),
    brand_id: v.number()
})

export type CreateModelRequestDTO = v.InferInput<typeof CreateModelRequestSchema>;