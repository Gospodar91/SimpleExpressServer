const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi)

class validations {
    validateRequest = (req, res, next) => {
        const rules = Joi.object({
            _id: Joi.objectId(req.params.id),
          
            image: Joi.string(),
            otherImage: Joi.string(),
            category: Joi.string(),
            name: Joi.string(),
            className: Joi.string(),
            description: Joi.string(),
            country: Joi.string(),
            price: Joi.number(),
            price2: Joi.number(),
            tara: Joi.object(),
            latestProduct: Joi.string(),
                 
        });
        const validationResult = rules.validate(req.body);
        if (validationResult.error) {
            res.status(400).send({
                message: "missing required  field"
            });
            return;
        }
        next();
    };
}
module.exports = new validations();