const Article = require('../models/Article')

var create = (req, res) => {
  Article.create({
    title:  req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.headers.auth.id
  })
  .then(article => res.send(article))
  .catch(err => res.status(500).send({msg: 'gagal buat artikel baru'}))
}

module.exports = {
  create
}
