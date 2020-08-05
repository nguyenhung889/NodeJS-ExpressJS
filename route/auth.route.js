var express = require('express')

var db = require('../db');
var controllers = require('../controllers/auth.controller');
var middleware = require('../middleware/auth.middleware');
var router = express.Router()

router.get('/login', controllers.login);

router.post('/login', controllers.postLogin);


module.exports = router;