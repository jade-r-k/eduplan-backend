const express = require('express')
const cors = require('cors')

require('dotenv').config()
require('./db')()

const { getAllClasstests, getSingleClassTest } = require('./controllers/classtest_controller')

const port = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.json())


/////ROUTES/////
app.get('/classtests', getAllClasstests)
app.get('/classtests/:id', getSingleClassTest)
////////////////


app.listen(port, () => {
  console.log(`Eduplan listening at http://localhost:${port}`)
})