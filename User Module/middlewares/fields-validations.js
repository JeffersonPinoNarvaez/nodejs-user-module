const { validationResult } = require('express-validator')

const fieldValidations = (req, res, next) => {
    console.log(req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json(errors)
    next();
}

module.exports = {
    fieldValidations
}