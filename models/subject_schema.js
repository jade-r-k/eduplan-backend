const { Schema, model } = require('mongoose')

const subjectSchema = new Schema({
    user_id:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'user field is required']
    },
    title:{
        type: String,
        required: [true, 'title field is required']
    },
    year:{
        type: String
    }
})

module.exports = model('Subject', subjectSchema)