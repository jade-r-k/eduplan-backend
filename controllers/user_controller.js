const User = require('../models/user_schema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = (req, res) => {
    let newUser = new User(req.body)

    newUser.password = bcrypt.hashSync(req.body.password, 10)

    newUser.save((err, user) => {
        if(err) {
            return res.status(400).send({
                message: err
            })
        }
        else {
            user.password = undefined
            return res.json(user)
        }
    })
}

const login = (req, res) => {
    User.findOne({
        email: req.body.email
    })
    .then(user => {
        if(!user || !user.comparePassword(req.body.password)){
            return res.status(401).json({
                message: 'Authentication failed. Invalid user or password'
            })
        }
        res.json({
            token: jwt.sign({
                email: user.email,
                full_name: user.full_name,
                _id: user._id
            },'login_eduplan')
        })
    })
    .catch(err => {
        throw err
    })
}


module.exports = {
    register,
    login
}