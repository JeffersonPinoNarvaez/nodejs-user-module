const { Router } = require('express');
const { post } = require('../controllers/user')

let router = new Router();

router.post('/',
post)




module.exports = router