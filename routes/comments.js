var express = require('express');
var router = express.Router();
const fs = require('fs');


//Get comments for movies
//Query parameter based on id of movie
//Returns array of all comments from a specific movie
router.get('/', function(req, res, next) {
  fs.readFile('./db/comment.json', 'utf8', (err, data) => {
    if(err){
      console.log(err);
      return;
    }
    commentList = JSON.parse(data);
    // var index = req.params.id;
    // final = [];
    // commentList.comments.forEach((data) => {
    //     if(data.id == index){
    //         final.push(data);
    //     }
    // });

    // res.send(final);
    res.send(commentList);
  });
});

module.exports = router;
