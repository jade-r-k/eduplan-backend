const Classtest = require('../models/classtest_schema')

const getAllClasstests = (req, res) => {
    Classtest.find()
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else {
            res.status(404).json("No classes found")
        }
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
    })
}

const getSingleClassTest = (req, res) => {
    Classtest.findById(req.params.id)
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else {
            res.status(404).json(`Class with id: ${req.params.id} not found`)
        }
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
    })
}

const addClassTest = (req, res) => {
    let classtestData = req.body

    Classtest.create(classtestData)
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

const editClassTest = (req, res) => {
    let classtestData = req.body

    Classtest.findByIdAndUpdate(req.params.id, classtestData)
    .then((data) => {
        if(data){
            res.status(201).json("Class has been updated")
        }
        else {
            res.status(404).json(`Class with id: ${req.params.id} not found`)
        }
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
    })
}

const deleteClassTest = (req, res) => {
    Classtest.findByIdAndDelete(req.params.id)
    .then((data) => {
        if(data){
            res.status(200).json("Class has been deleted")
        }
        else {
            res.status(404).json(`Class with id: ${req.params.id} not found`)
        }
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
    })
}

module.exports = {
    getAllClasstests,
    getSingleClassTest,
    addClassTest,
    editClassTest,
    deleteClassTest
}