var express = require('express')
var router = express.Router()

// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// })

router.post('/upload', function (req, res, next) {
  console.log(req.body);
  res.send(req.body);
})


module.exports = router;