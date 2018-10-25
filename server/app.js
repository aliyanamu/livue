require('dotenv').config()
const createError = require('http-errors'),
     express = require('express'),
     path = require('path'),
     cors = require('cors'),
     app = express()

const indexRouter = require('./routes/index'),
     usersRouter = require('./routes/users'),
     videosRouter = require('./routes/videos')

const mongoose   = require('mongoose'),
     urltest = `mongodb://localhost:27017/livue`,
     url = `mongodb://illion01:illion01@ds213183.mlab.com:13183/livue`

if (process.env.NODE_ENV === 'test') {
  console.log('ready to test our server')
  mongoose.connect(urltest,{ useNewUrlParser: true })
} else {
  console.log('ready to deploy our server')
  mongoose.connect(url,{ useNewUrlParser: true })
}
    
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('We are connected')
})

app
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(cors())

app
  .use('/', indexRouter)
  .use('/users', usersRouter)
  .use('/videos', videosRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send('error')
})

module.exports = app
