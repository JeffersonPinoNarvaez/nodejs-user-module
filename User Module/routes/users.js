const { Router } = require('express');
const { check } = require('express-validator');

const { fieldValidations } = require('../middlewares')

const { post, getAll } = require('../controllers/user')

const router = Router();

router.post('/',
    check('firstName', 'the first name is a mandatory field').not().isEmpty(),
    check('lastName', 'the last name is a mandatory field').not().isEmpty(),
    check('password', 'the password is a mandatory field').not().isEmpty(),
    check('email', 'the Email is a mandatory field' ).isEmail(),
    fieldValidations
, post)

router.get('/', getAll)




module.exports = router