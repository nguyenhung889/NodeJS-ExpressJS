
require('dotenv').config();

const express  = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')


var userRoutes = require('./route/users.route');
var productRoutes = require('./route/products.route');
var authRoutes = require('./route/auth.route');
var cartRoutes = require('./route/cart.route');
var authMiddleware = require('./middleware/auth.middleware');
var sessionMiddleware = require('./middleware/session.middleware');


var db = require('./db');

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser('nodejs-expressjs'));
app.use(sessionMiddleware);

// app.get('/', (request, response) => response.send('Hi'));
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {
        name: 'Đỗ Mạnh Hùng'
    });
});

app.use('/users',authMiddleware.postLogin, userRoutes);
app.use('/products',authMiddleware.postLogin, productRoutes);
app.use('/auth', authRoutes);
app.use('/cart', cartRoutes);

app.listen(port, () => console.log('Server is listening in port ' + port));