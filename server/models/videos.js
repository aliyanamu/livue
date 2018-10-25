const mongoose = require('mongoose'),
     Schema = mongoose.Schema

const vidScheme = new Schema(
  {
    title: {
      type: String,
    },
    image: {
      type: String,
    },
    desc: {
      type: String,
    },
    likes: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  {
    timestamps: true
  }
)

const Video = mongoose.model('Video', vidScheme)
module.exports = Video