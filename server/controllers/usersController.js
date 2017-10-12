const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');

var signup = (req, res) => {
  let password = req.body.password
  bcrypt.genSalt(10, (errSalt, salt) => {
    bcrypt.hash(password, salt, (errHash, hash) => {
      User.create({
        username: req.body.username,
        password: hash
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

var signin = (req, res) => {
  let username = req.body.username
  let password = req.body.password
  if(!username || !password) {
    res.status(403).send({msg: 'masukan username dan password'})
  } else {
    User.findOne({
      username: req.body.username
    })
    .then(user => {
      bcrypt.compare(password, user.password)
      .then(compareResult => {
        if(compareResult) {
          let token = jwt.sign({id: user._id, username: user.username}, 'hacktivpress');
          res.send(token)
        } else {
          res.status(400).send({msg: 'password salah'})
        }
      })
    })
    .catch(err => {
      res.status(404).send({msg: 'user tidak ditemukan'})
    })
  }
}

let getAllUsers = (req,res) => {
  User.find({})
  .then(data => res.send(data))
  .catch(err => res.send(err))
}


module.exports = {
  signup,
  signin,
  getAllUsers
}
