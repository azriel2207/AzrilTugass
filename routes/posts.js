var express = require ('express');
var reoute = express.Router();

var connection = require('../library/database');

Router.get('/', function (req,res, next){
    connection.query('SELECT *FROM posts ORDER BY id desc', function (err, rows){
        if (err) {
            req.flash('error',err),
            res.render('posts', {
                data: ''
            });
        }else {
            res.render('posts/index', {
                data: rows 
            });
        }
    });
});
 module.exports = router;