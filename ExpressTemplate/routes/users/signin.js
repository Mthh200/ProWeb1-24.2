var express = require('express');
var router = express.Router();

router.get('/:userid?', (req, res, next) => {
  const { userid } = req.params;
  if (userid) { 
    res.render('signin');
  } else {
    res.redirect('/users/signup');
  }
  console.log(userid);
});
module.exports = router;
