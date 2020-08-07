var db = require('../db');
const shortid = require('shortid');

// list users
module.exports.index = (req, res) => {
    res.render('users/index', {
        users: db.get('users').value()
    });
}

// create users
module.exports.create = (req, res) => {
    res.render('users/create');
}

// handle create users
module.exports.postCreate = (req, res) => {
    req.body.id = shortid.generate();
    req.body.avatar = req.file.path.split('\\').slice(1).join('/');
    console.log(req.body.avatar);
    db.get('users').push(req.body).write();
    res.redirect('/users');
}

// search users
module.exports.search = (req, res) => {
    var q = req.query.q;
    var matchQuery = db.get('users').value().filter((item) => {
        return item.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });

    res.render('users/index', {
        users: matchQuery,
        query: q
    });
}

// info users
module.exports.view = (req, res) => {
    var id = req.params.id;

    var infoUser = db.get('users').find({id: id}).value();

    res.render('users/view', {
        infoUser: infoUser
    });
}