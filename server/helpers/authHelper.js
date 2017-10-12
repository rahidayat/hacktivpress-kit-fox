const jwt = require('jsonwebtoken')

const checkLogin = (req, res, next) => {
  if(req.headers.token == null) {
    res.status(401).send({msg: 'Please log in first'})
  } else {
    console.log('>>>>> masuk cek login');
    next ()
  }
}

const checkAuth = (req, res, next) => {
  if (req.headers.hasOwnProperty('token')) {
    var user = jwt.verify(req.headers.token, 'hacktivpress')
    req.headers.auth = user
    next()
  } else {
    res.status(401).send({msg: 'Not authorized'})
  }
}

module.exports = {
  checkLogin,
  checkAuth
}
