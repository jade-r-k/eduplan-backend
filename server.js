const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')

require('dotenv').config()
require('./db')()

/////CONTROLLERS/////
const { getAllClasstests, getSingleClassTest, addClassTest, editClassTest, deleteClassTest } = require('./controllers/classtest_controller')
const { getAllLessons, getSingleLesson, getUserLessons, addLesson, editLesson, deleteLesson } = require('./controllers/lesson_controller')
const { getAllExams, getSingleExam, getUserExams, addExam, editExam, deleteExam } = require('./controllers/exam_controller')
const { getAllEvents, getSingleEvent, getUserEvents, addEvent, editEvent, deleteEvent } = require('./controllers/event_controller')
const { getAllAssignments, getSingleAssignment, getUserAssignments, addAssignment, editAssignment, deleteAssignment } = require('./controllers/assignment_controller')
const { getAllSubjects, getSingleSubject, getUserSubjects, addSubject, editSubject, deleteSubject } = require('./controllers/subject_controller')
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

/////TEST ROUTES/////
app.get('/classtests', getAllClasstests)
app.get('/classtests/:id',loginRequired, getSingleClassTest)
app.post('/classtests', addClassTest)
app.put('/classtests/:id',loginRequired, editClassTest)
app.delete('/classtests/:id',loginRequired, deleteClassTest)

/////ASSIGNMENT ROUTES/////
app.get('/assignments', loginRequired, getAllAssignments)
app.get('/assignments/:id', loginRequired, getSingleAssignment)
app.get('/assignments/user/:id', loginRequired, getUserAssignments)
app.put('/assignments/:id', loginRequired, editAssignment)
app.delete('/assignments/:id', loginRequired, deleteAssignment)
app.post('/assignments', loginRequired, addAssignment)

/////EVENT ROUTES/////
app.get('/events', loginRequired, getAllEvents)
app.get('/events/:id', loginRequired, getSingleEvent)
app.get('/events/user/:id', loginRequired, getUserEvents)
app.put('/events/:id', loginRequired, editEvent)
app.delete('/events/:id', loginRequired, deleteEvent)
app.post('/events', loginRequired, addEvent)

/////EXAM ROUTES/////
app.get('/exams', loginRequired, getAllExams)
app.get('/exams/:id', loginRequired, getSingleExam)
app.get('/exams/user/:id', loginRequired, getUserExams)
app.put('/exams/:id', loginRequired, editExam)
app.delete('/exams/:id', loginRequired, deleteExam)
app.post('/exams', loginRequired, addExam)

/////LESSON ROUTES/////
app.get('/lessons', loginRequired, getAllLessons)
app.get('/lessons/:id', loginRequired, getSingleLesson)
app.get('/lessons/user/:id', loginRequired, getUserLessons)
app.put('/lessons/:id', loginRequired, editLesson)
app.delete('/lessons/:id', loginRequired, deleteLesson)
app.post('/lessons', loginRequired, addLesson)

/////SUBJECT ROUTES/////
app.get('/subjects', loginRequired, getAllSubjects)
app.get('/subjects/:id', loginRequired, getSingleSubject)
app.get('/subjects/user/:id', loginRequired, getUserSubjects)
app.put('/subjects/:id', loginRequired, editSubject)
app.delete('/subjects/:id', loginRequired, deleteSubject)
app.post('/subjects', loginRequired, addSubject)

//USER ROUTES//
app.post('/register', register)
app.post('/login', login)
////////////////


app.listen(port, () => {
  console.log(`Eduplan listening at http://localhost:${port}`)
})