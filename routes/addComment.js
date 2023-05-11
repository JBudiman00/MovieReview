var express = require('express');
const bodyParser = require('body-parser')
var router = express.Router();
const fs = require('fs');
const mysql_pool = require('../db/db.jsx')

//Add comment to a specific movie
router.post('/', function(req, res, next) {
    movie_id = req.body.movie_id;
    prev_comment_id = req.body.prev_comment_id;
    desc = req.body.desc;
    mysql_pool.getConnection((err, connection) => {
        if(err) {
        connection.release();
        console.log(' Error getting mysql_pool connection: ' + err);
        throw err;
        }
        sql = 'INSERT INTO Comments(Movie_Id, Prev_Comment_Id, Description) VALUES (UNHEX(?), UNHEX(?), ?)';
        connection.query(sql, [movie_id, prev_comment_id, desc], (err, result) => {
        if (err) {
            console.log("error: ", err);
            res.send(err);
            return;
        }
        res.sendStatus(200);
        connection.release();
        })
    })
});

module.exports = router;