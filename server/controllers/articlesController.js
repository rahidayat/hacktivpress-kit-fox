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

var getAllArticles = (req, res) => {
  Article.find({})
  .populate('author', 'username')
  .then(articles => res.send(articles))
  .catch(err => res.status(500).send({msg: 'error proses'}))
}

var getOne = (req, res) => {
  Article.findById(req.params.id)
  .populate('author', 'username')
  .then(article => res.send(article))
  .catch(err => res.status(500).send({msg: 'error proses'}))
}
var update = (req, res) => {
  Article.findById(req.params.id)
  .then(article => {
    if(article.author != req.headers.auth.id) {
      res.send({msg: 'unauthorized'})
    } else {
      Article.update({_id: req.params.id}, req.body)
      .then(() => res.send({msg: 'berhasil update'}))
    }
  })
  .catch(err => res.status(500).send({msg: 'error proses'}))
}

module.exports = {
  create,
  getAllArticles,
  getOne,
  update
}
