var express = require('express');
var router = express.Router();
const fs = require('fs');


//Get movie listings
//Query parameter based on id of movie
router.get('/', function(req, res, next) {
  fs.readFile('./db/comment.json', 'utf8', (err, data) => {
    if(err){
      console.log(err);
      return;
    }
    comments = JSON.parse(data)
    var index = req.query['id'];
    if(!index){
      res.send(comments);
    } else{
      res.send(comments[index-1]);
    }
  });
});

module.exports = router;
