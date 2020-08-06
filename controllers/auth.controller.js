var md5 = require('md5');

var db = require('../db');

//login
module.exports.login = (req, res) => {
    res.render('auth/login');
}

//postLogin
module.exports.postLogin = (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    var user = db.get('users').find({ email: email }).value();
    
    if(!user){
        res.render('auth/login', {
            errors: [
                "This email is not existed"
            ],
            values: req.body
        });
    }

    var hashedPassword = md5(password);

    if(user.password !== hashedPassword){
        res.render('auth/login', {
            errors: [
                "Wrong password"
            ],
            values: req.body
        });
    }
    res.cookie('userId',user.id,{
        signed: true
    });
    res.redirect('/users');
}