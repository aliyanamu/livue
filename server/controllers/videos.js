const Video = require('../models/videos')

module.exports = {

  getAllVid: (req, res) => {
    console.log('masuk controllers/videos -> all')
    Video.find()
      .populate('likes')
      .then(videos => {
        res.status(200).json({
          videos
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  },

  likeVid: (req, res) => {
    console.log('masuk controllers/videos -> like')
    let voterId = req.user.id
    Video.findOne({
      title: req.params.title
    })
      .then(data => {
        if (data) {
          Video.findOne({
            title: req.params.title,
            likes: {
              $in: voterId
            }
          })
            .then(vote => {
              if (vote) {
                res.status(500).json({
                  message: 'you already liked this video'
                })
              } else {
                Video.findOneAndUpdate({
                  title: req.params.title
                }, {
                    $addToSet: { likes: voterId }
                  })
                  .then(like => {
                    res.status(200).json({
                      message: 'like success',
                      like
                    })
                  })
                  .catch(err => {
                    console.log('error like here', err)
                    res.status(500).json({
                      message: err.message
                    })
                  })
              }
            })
            .catch(err => {
              res.status(500).json({
                message: err.message
              })
            })
        } else {
          Video.create({
            title: req.body.title,
            image: req.body.image,
            desc: req.body.desc      
          })
            .then(() => {
              Video.findOneAndUpdate({
                title: req.params.title
              }, {
                  $addToSet: { likes: voterId }
                })
                .then(like => {
                  res.status(200).json({
                    message: 'like success',
                    like
                  })
                })
                .catch(err => {
                  console.log('error like here', err)
                  res.status(500).json({
                    message: err.message
                  })
                })
            })
            .catch(err => {
              res.status(500).json({
                message: err.message
              })
            })
        }
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  },

  unlikeVid: (req, res) => {
    console.log('masuk controllers/videos -> downvote')
    let voterId = req.user.id
    Video.findOne({
      title: req.params.title
    })
      .then(data => {
        Video.findOne({
          title: req.params.title,
          likes: {
            $in: voterId
          }
        })
          .then(vote => {
            Video.findOneAndUpdate({
              title: req.params.title
            }, {
                $pull: { likes: voterId },
              })
              .then(unlike => {
                res.status(200).json({
                  message: 'unlike success',
                  unlike
                })
              })
              .catch(err => {
                console.log('error unlike here', err)
                res.status(500).json({
                  message: err.message
                })
              })
          })
          .catch(err => {
            res.status(500).json({
              message: 'you already unlike this video'
            })
          })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }
}