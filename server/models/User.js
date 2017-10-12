const mongoose = require('mongoose')
const Schema = mongoose.Schema

var userSchema = new Schema ({
  username:  {type: String, required: true},
  password: {type: String, required: true}
},{
  timestamps: true
})

var User = mongoose.model('users', userSchema)

module.exports = User
