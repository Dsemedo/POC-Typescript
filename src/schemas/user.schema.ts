import Joi from "joi"

const userSchema = Joi.object({
    username: Joi.string().required(),
    beted: Joi.boolean()
})

export default userSchema;