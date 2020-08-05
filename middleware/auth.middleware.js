var db = require('../db');

module.exports.postLogin = (req, res, next) => {
    if(!req.cookies.userId){
        res.redirect('/auth/login');
        return;
    }

    var checkLogin = db.get('users').find({ id: req.cookies.userId }).value();

    if(!checkLogin){
        res.redirect('/auth/login');
        return;
    }
    next();
}