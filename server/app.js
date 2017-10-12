const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hacktivepress-kit', (err) => {
  err ? console.log('Can\'t connect to database') : console.log('Database connected')
});

app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var user = require ('./routes/usersRouter');
var article = require ('./routes/articlesRouter')

app.use('/api', user);
app.use('/api/articles', article);

app.listen(process.env.PORT || 3000, function(){
  console.log('I am listening port 3000');
})
