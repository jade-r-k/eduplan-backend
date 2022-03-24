const Subject = require('../models/subject_schema')

const getAllSubjects = (req, res) => {
    Subject.find()
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else {
            res.status(404).json("No subjects found")
        }
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
    })
}

const getSingleSubject = (req, res) => {
    Subject.findById(req.params.id)
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else {
            res.status(404).json(`Subject with id: ${req.params.id} not found`)
        }
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
    })
}

const addSubject = (req, res) => {
    let subjectData = req.body

    Subject.create(subjectData)
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

const editSubject = (req, res) => {
    let subjectData = req.body

    Subject.findByIdAndUpdate(req.params.id, subjectData)
    .then((data) => {
        if(data){
            res.status(201).json("Subject has been updated")
        }
        else {
            res.status(404).json(`Subject with id: ${req.params.id} not found`)
        }
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
    })
}

const deleteSubject = (req, res) => {
    Subject.findByIdAndDelete(req.params.id)
    .then((data) => {
        if(data){
            res.status(200).json("Subject has been deleted")
        }
        else {
            res.status(404).json(`Subject with id: ${req.params.id} not found`)
        }
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
    })
}

const getUserSubjects = (req, res) => {
    Subject.find({ user_id: req.params.id })
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else {
            res.status(404).json(`Subject with user id: ${req.params.id} not found`)
        }
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
    })
}

module.exports = {
    getAllSubjects,
    getSingleSubject,
    addSubject,
    editSubject,
    deleteSubject,
    getUserSubjects
}