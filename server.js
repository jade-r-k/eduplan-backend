const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')

require('dotenv').config()
require('./db')()

const { getAllClasstests, getSingleClassTest, addClassTest } = require('./controllers/classtest_controller')
const { register, login, loginRequired } = require('./controllers/user_controller')

const port = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
  if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer'){
    jwt.verify(req.headers.authorization.split(' ')[1], 'login_eduplan', (err, decode) => {
      if (err) req.user = undefined
      req.user = decode
      next()
    })
  }
  else {
    req.user = undefined
    next()
  }
})

/////ROUTES/////
app.get('/classtests', getAllClasstests)
app.get('/classtests/:id',loginRequired, getSingleClassTest)
app.post('/classtests', addClassTest)

//USER ROUTES//
app.post('/register', register)
app.post('/login', login)
////////////////


app.listen(port, () => {
  console.log(`Eduplan listening at http://localhost:${port}`)
})