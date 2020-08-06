var db = require('../db');

module.exports.postLogin = (req, res, next) => {
    if(!req.signedCookies.userId){
        res.redirect('/auth/login');
        return;
    }

    var checkLogin = db.get('users').find({ id: req.signedCookies.userId }).value();

    if(!checkLogin){
        res.redirect('/auth/login');
        return;
    }

    // pass variable to all views
    res.locals.user = checkLogin; 

    next();
}