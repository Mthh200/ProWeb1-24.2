var express = require('express');
var router = express.Router();

router.get('/:userid?', (req, res, next) => {
  const { userid } = req.params;
  if (userid) { 
    res.send('<h1>Users - Signin</h1><p>Bem-vindo, usuário '+ userid +'</p>');
  } else {
    res.redirect('/users/signup');
  }
  console.log(userid);
});
module.exports = router;
