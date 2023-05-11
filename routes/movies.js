var express = require('express');
var router = express.Router();
const fs = require('fs');
const mysql_pool = require('../db/db.jsx')

//Get movie listings
router.get('/', function(req, res, next) {
  mysql_pool.getConnection((err, connection) => {
    if(err) {
      connection.release();
      console.log(' Error getting mysql_pool connection: ' + err);
      throw err;
    }
    // sql = 'SELECT HEX(Movie_ID) as Movie_Id, Movie_Name, Director, Rating, Release_Date, Description FROM Movies LIMIT 10 OFFSET ?';
    sql = 'SELECT HEX(Movie_ID) as Movie_Id, Movie_Name, Director, Rating, Release_Date, Description FROM Movies';
    connection.query(sql, (err, result) => {
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
