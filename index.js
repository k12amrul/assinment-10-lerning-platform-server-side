const express = require('express')
var cors = require('cors')
const app = express()
const port =process.env.PORT  || 5000

app.use(cors())

const coursedata = require('./data/dataDetails.json')
const category=require('./data/dataDetails.json')

app.get('/category', (req, res) => {
  res.send(category)
})
app.get('/category/:id', (req ,res )  =>  {
  const id = req.params.id
const coursedata = require('./data/dataDetails.json')
const selecteddata = coursedata.find( courseCategory  =>  
    courseCategory.id ==id  )
  res.send(selecteddata)
})

app.get('/', (req, res) => {
  res.send(category)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

