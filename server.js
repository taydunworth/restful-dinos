const express = require('express')
const bp = require('body-parser')
const app = express()

app.get('/api/dinos', function(req, res) {
  const myDinos = {
    id: '1',
    name: 'Aardonyx',
    weight: '1,000 lbs',
    habitats: 'Woodlands'
  }
  res.json(myDinos)
})

app.listen(3000, function() {
  console.log('Successfully started express application!')
})
