const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    full_name:{
        type: String,
        trim: true,
        required: [true, 'Full name field is required']
    },
    email:{
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: [true, 'Email field is required']
    },
    password:{
        type: String,
        required: [true, 'Password field is required']
    }
}, {
    timestamps: true
})

userSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password, function(result) {
        return result
    })
}

module.exports = model('User', userSchema)