var express = require('express');
var router = express.Router();
const fs = require('fs');

//Won't include now, as it's difficult to update JSON files
//Update movie listing
//Query includes updated movie title
router.patch('/:id', function(req, res, next) {
    let movieID = req.params.id;
    let desc = req.query.desc;
    fs.appendFile('./db/movies.json', JSON.stringify(data), "utf8", () => {
    res.send({success: true});
  });
});

module.exports = router;
