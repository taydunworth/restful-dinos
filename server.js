const express = require('express')
const bp = require('body-parser')
const app = express()

const myDinos = [
  {
    id: '1',
    name: 'Aardonyx',
    weight: '1,000 lbs',
    habitats: 'Woodlands'
  },
  {
    id: '2',
    name: 'Diceratops',
    weight: '2-3 tons',
    habitats: 'Woodlands'
  },
  {
    id: '3',
    name: 'Fabrosaurus',
    weight: '10-20 lbs',
    habitats: 'Woodlands'
  },
  {
    id: '4',
    name: 'Hexinlusaurus',
    weight: '25 lbs',
    habitats: 'Woodlands'
  },
  {
    id: '5',
    name: 'Kulindadromeus',
    weight: '20-30 lbs',
    habitats: 'Plains'
  },
]

app.get('/api/dinos', function(req, res) {
  res.json(myDinos)
})

app.get('/api/dinos/:id', (req, res) => {
  const oneDino = myDinos.find(dino => dino.id === parseInt(req.params.id))
  res.json(oneDino)
})

app.listen(3000, function() {
  console.log('Successfully started express application!')
})
