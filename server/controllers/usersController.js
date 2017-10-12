const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');

var signup = (req, res) => {
  const password = req.body.password
  bcrypt.genSalt(10, (errSalt, salt) => {
    bcrypt.hash(password, salt, (errHash, hash) => {
      req.body.password = hash
      User.create({
        username: req.body.username,
        password: req.body.password
      })
      .then(() => {
        res.send({msg: 'sukses daftar'})
      })
      .catch(err => {
        res.status(400).send({msg: err.message})
      })
    })
  })
}

let getAllUsers = (req,res) => {
  User.find({})
  .then(data => res.send(data))
  .catch(err => res.send(err))
}


module.exports = {
  signup,
  getAllUsers
}
