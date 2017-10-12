const mongoose = require('mongoose')
const Schema = mongoose.Schema

var articleSchema = new Schema ({
  title:  {type: String, required: true},
  content: {type: String, required: true},
  category: {type: String, required: true},
  author: {type: Schema.Types.ObjectId, ref: 'users'}
},{
  timestamps: true
})

var Article = mongoose.model('articles', articleSchema)

module.exports = Article
