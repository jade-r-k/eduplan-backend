const Assignment = require('../models/assignment_schema')

const getAllAssignments = (req, res) => {
    Assignment.find()
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else {
            res.status(404).json("No assignments found")
        }
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
    })
}

const getSingleAssignment = (req, res) => {
    Assignment.findById(req.params.id)
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else {
            res.status(404).json(`Assignment with id: ${req.params.id} not found`)
        }
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
    })
}

const addAssignment = (req, res) => {
    let assignmentData = req.body

    Assignment.create(assignmentData)
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

const editAssignment = (req, res) => {
    let assignmentData = req.body

    Assignment.findByIdAndUpdate(req.params.id, assignmentData)
    .then((data) => {
        if(data){
            res.status(201).json("Assignment has been updated")
        }
        else {
            res.status(404).json(`Assignment with id: ${req.params.id} not found`)
        }
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
    })
}

const deleteAssignment = (req, res) => {
    Assignment.findByIdAndDelete(req.params.id)
    .then((data) => {
        if(data){
            res.status(200).json("Assignment has been deleted")
        }
        else {
            res.status(404).json(`Assignment with id: ${req.params.id} not found`)
        }
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
    })
}

const getUserAssignments = (req, res) => {
    Assignment.find({ user_id: req.params.id })
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else {
            res.status(404).json(`Assignment with user id: ${req.params.id} not found`)
        }
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
    })
}

module.exports = {
    getAllAssignments,
    getSingleAssignment,
    addAssignment,
    editAssignment,
    deleteAssignment,
    getUserAssignments
}