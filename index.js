const express  = require('express');
var bodyParser = require('body-parser');

var userRoutes = require('./route/users.route');

var db = require('./db');

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// app.get('/', (request, response) => response.send('Hi'));
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {
        name: 'Đỗ Mạnh Hùng'
    });
});

app.use('/users', userRoutes);
app.listen(port, () => console.log('Server is listening in port ' + port));