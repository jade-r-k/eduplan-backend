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

module.exports = {
    getAllClasstests,
    getSingleClassTest
}