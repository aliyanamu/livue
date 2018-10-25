const express = require('express'),
     router = express.Router(),
     { isLogin } = require('../middlewares/auth'),
     { likeVid, unlikeVid, getAllVid } = require('../controllers/videos')

/* GET videos listing. */
router.get('/try', (req, res, next) => {
  res.send('enter video list')
})

router
  .get('/list', getAllVid)

  .post('/like/:title', isLogin, likeVid)

  .post('/unlike/:title', isLogin, unlikeVid)

module.exports = router
