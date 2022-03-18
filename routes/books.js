var express = require('express');
var router = express.Router();


router.get('/add', function(req, res){
  res.render('add')
});

// router.post('/add', function (req, res, next) {
//   console.log("BookId  " + req.body.bid);
//   console.log("BookName  " + req.body.bname)
//   console.log("AuthorName  " + req.body.aname)
//   res.render('add');
// });

router.get('/add/:bid/:bname/:aname', function (req, res, next) {
  const Bkname = req.params.bid;
  console.info("BookID   " +  req.params.bid);
  console.info("BookName   " +  req.params.bname);
  console.info("AuthorName   " +  req.params.aname);
  res.render('add');
});

module.exports = router;
