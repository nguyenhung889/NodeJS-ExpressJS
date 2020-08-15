var express = require('express')
const shortid = require('shortid')

var db = require('../db');
var controllers = require('../controllers/cart.controller');
// var middleware = require('../middleware/user.middleware');
var router = express.Router()

router.get('/add-cart/:productId', controllers.addToCart);

module.exports = router;