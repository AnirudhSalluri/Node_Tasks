const Joi = require('joi')

const validating = (data) =>{
    const Schema = Joi.object({
        title:Joi.string().min(3).max(10).required(),
        content:Joi.string().min(5).required(),
        author:Joi.string().required()
    })
    const {error} = Schema.validate(data);
    if(error){
    return error.details[0].message
    }
}

module.exports=validating