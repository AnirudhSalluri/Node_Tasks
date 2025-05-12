const Joi = require('joi')

const postValidator = (data)=>{
    const postSchema = Joi.object({
    title : Joi.string().min(3).max(30).required(),
    content : Joi.string().min(5).required()
})
     const {error} = postSchema.validate(data);

     return error;
}

module.exports = postValidator;

