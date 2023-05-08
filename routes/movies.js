var express = require('express');
var router = express.Router();
const fs = require('fs');

//Get movie listings
//Query parameter based on id of movie
router.get('/', function(req, res, next) {
  fs.readFile('./db/movie.json', 'utf8', (err, data) => {
    if(err){
      console.log(err);
      return;
    }
    movies = JSON.parse(data)
    var index = req.query['id'];
    if(!index){
      res.send(movies);
    } else{
      res.send(movies[index-1]);
    }
  });
});

module.exports = router;
