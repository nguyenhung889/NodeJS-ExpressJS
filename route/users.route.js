var express = require('express')
const shortid = require('shortid')

var db = require('../db');
var controllers = require('../controllers/users.controller');
var router = express.Router()

router.get('/', controllers.index);

router.get('/create', controllers.create);

router.post('/create', controllers.postCreate);

router.get('/search', controllers.search);

router.get('/:id', controllers.view);

module.exports = router;