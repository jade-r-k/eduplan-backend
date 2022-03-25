const Exam = require('../models/exam_schema')
const res = require('express/lib/response')

const getAllExams = (req, res) => {
    Exam.find()
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else{
            res.status(404).json("No events found")
        }
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json("None found")
    })

}
const getSingleExam = (req, res) => {
    Exam.findById(req.params.id)
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }else {
            res.status(404).json(`Exam with id: ${req.params.id} not found`)
        }
    })
    .catch((err) =>{
        console.error(err)
        res.status(500).json(err)
    })
}

const addExam = (req, res) => {
    let examData = req.body

    Exam.create(examData)
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

const editExam = (req, res) => {
    let examData = req.body

    Exam.findByIdAndUpdate(req.params.id, examData)
    .then((data) => {
        if(data){
            res.status(201).json("Exam has been updated")
        }
        else {
            res.status(404).json(`Exam with id: ${req.params.id} not found`)
        }
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
    })
}

const deleteExam = (req, res) => {
    Exam.findByIdAndDelete(req.params.id)
    .then((data) => {
        if(data){
            res.status(200).json("Exam has been deleted")
        }
        else {
            res.status(404).json(`Exam with id: ${req.params.id} not found`)
        }
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
    })
}

const getUserExams = (req, res) => {
    Exam.find({ user_id: req.params.id })
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else {
            res.status(404).json(`Exam with user id: ${req.params.id} not found`)
        }
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
    })
}

module.exports = {
    getAllExams,
    getSingleExam,
    addExam,
    editExam,
    deleteExam,
    getUserExams
}