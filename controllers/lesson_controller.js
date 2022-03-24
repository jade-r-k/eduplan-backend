const Lesson = require('../models/lesson_schema')

const getAllLessons = (req, res) => {
    Lesson.find()
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else {
            res.status(404).json("No lessons found")
        }
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
    })
}

const getSingleLesson = (req, res) => {
    Lesson.findById(req.params.id)
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else {
            res.status(404).json(`Lesson with id: ${req.params.id} not found`)
        }
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
    })
}

const getUserLessons = (req, res) => {
    Lesson.find({ user_id: req.params.id })
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else {
            res.status(404).json(`Lesson with user id: ${req.params.id} not found`)
        }
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
    })
}

const editLesson = (req, res) => {
    let lessonData = req.body

    Lesson.findByIdAndUpdate(req.params.id, lessonData)
    .then((data) => {
        if(data){
            res.status(201).json(`Lesson with id: ${req.params.id} has been updated`)
        }
        else {
            res.status(404).json(`Lesson with id: ${req.params.id} not found`)
        }
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
    })
}

const deleteLesson = (req, res) => {
    Lesson.findByIdAndDelete(req.params.id)
    .then((data) => {
        if(data){
            res.status(200).json(`Lesson with id: ${req.params.id} has been deleted`)
        }
        else {
            res.status(404).json(`Lesson with id: ${req.params.id} not found`)
        }
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
    })
}

const addLesson = (req, res) => {
    let lessonData = req.body

    Lesson.create(lessonData)
    .then((data) => {
        if(data){
            res.status(201).json(data)
        }
    })
    .catch((err)=>{
        if(err.name === "ValidationError"){
            res.status(422).json(err)
        }
        else{
            console.error(err)
            res.status(500).json(err)
        }
    })
}


module.exports = {
    getAllLessons,
    getSingleLesson,
    getUserLessons,
    editLesson,
    deleteLesson,
    addLesson
}