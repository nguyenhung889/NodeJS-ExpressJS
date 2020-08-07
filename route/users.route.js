var express = require('express')
const shortid = require('shortid')
var multer  = require('multer');

var db = require('../db');
var controllers = require('../controllers/users.controller');
var middleware = require('../middleware/user.middleware');
var upload = multer({ dest: './public/uploads/' });
var router = express.Router()

router.get('/', controllers.index);

router.get('/create', controllers.create);

router.post('/create',upload.single('avatar'), middleware.postCreate, controllers.postCreate);

router.get('/search', controllers.search);

router.get('/:id', controllers.view);

module.exports = router;