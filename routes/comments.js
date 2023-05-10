var express = require('express');
var router = express.Router();
const fs = require('fs');
const mysql_pool = require('../db/db.jsx')

//Get comments for movies
//Query parameter based on id of movie
//Returns array of all comments from a specific movie
router.get('/:id', function(req, res, next) {
  movie_ID = req.params.id;
  console.log('test');
  mysql_pool.getConnection((err, connection) => {
    if(err) {
      connection.release();
      console.log(' Error getting mysql_pool connection: ' + err);
      throw err;
    }
    sql = 'SELECT HEX(Comment_Id) as Comment_Id, HEX(Movie_Id) as Movie_Id, HEX(Prev_Comment_Id) as Prev_Comment_Id, Description FROM Comments WHERE UNHEX(?) = Comments.Movie_Id';
    connection.query(sql, movie_ID, (err, result) => {
      if (err) {
        console.log("error: ", err);
        res.send(err);
        return;
      }
    res.json(result);
    connection.release();
    })
  })
});

module.exports = router;
