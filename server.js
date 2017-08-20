const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', function(req, res) {
  const movie = {
    title: "The Rock",
    dureation: "94",
    genre: "Action",
  }
  res.send(movie)
})

app.listen(3001, function() {
  console.log('Example app listening on port 3001!')
})
