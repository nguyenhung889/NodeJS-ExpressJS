var db = require('../db');
const shortid = require('shortid');

// list users
module.exports.index = (req, res) => {

    // method 1: Use slice(start, end) | start = (page -1)*perPage, end = (page)*perPage;
    let page = 1;
    if(req.query.page){
        page = req.query.page;
    }

    var perPage = 9;

    var start = (page - 1) * perPage;
    var end = page * perPage;
    res.render('products/index', {
        products: db.get('products').value().slice(start, end)
    });

    //method 2: Use lodash drop() and take()
        //products: db.get('products').drop(start).take(perPage).value()
}
