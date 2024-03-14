const joi=require("joi");

const validator = joi.object({
    name:joi.string(),
    placename:joi.string(),
    location:joi.string(),
    image:joi.string()
})

module.exports = validator;