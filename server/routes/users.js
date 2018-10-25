const express = require('express'),
     router = express.Router(),
     { register, login } = require('../controllers/users')

/* GET users listing. */
router.get('/try', (req, res, next) => {
  res.send('enter user list')
})

router
  .post('/register', register)

  .post('/login', login)

module.exports = router
