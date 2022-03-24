const res = require('express/lib/response')
const Event = require('../models/event_schema')

const getAllEvents = (req, res) => {
    Event.find()
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
const getSingleEvent = (req, res) => {
    Event.findbyId(req.params.id)
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }else {
            res.status(404).json(`Event with id: ${req.params.id} not found`)
        }
    })
    .catch((err) =>{
        console.error(err)
        res.status(500).json(err)
    })
}

const addEvent = (req, res) => {
    let eventData = req.body

    Event.create(eventData)
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

const editEvent = (req, res) => {
    let eventData = req.body

    Event.findByIdAndUpdate(req.params.id, eventData)
    .then((data) => {
        if(data){
            res.status(201).json("Event has been updated")
        }
        else {
            res.status(404).json(`Event with id: ${req.params.id} not found`)
        }
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
    })
}

const deleteEvent = (req, res) => {
    Event.findByIdAndDelete(req.params.id)
    .then((data) => {
        if(data){
            res.status(200).json("Event has been deleted")
        }
        else {
            res.status(404).json(`Event with id: ${req.params.id} not found`)
        }
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
    })
}

const getUserEvents = (req, res) => {
    Event.find({ user_id: req.params.id })
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else {
            res.status(404).json(`Event with user id: ${req.params.id} not found`)
        }
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
    })
}

module.exports = {
    getAllEvents,
    getSingleEvent,
    addEvent,
    editEvent,
    deleteEvent,
    getUserEvents
}