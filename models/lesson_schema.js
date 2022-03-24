const { Schema, model } = require('mongoose')

const lessonSchema = new Schema({
    user_id:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'user field is required']
    },
    title:{
        type: String,
        required: [true, 'title field is required']
    },
    detail:{
        type: String
    },
    day:{
        type: String,
        lowercase: true,
        required: [true, 'day field is required']
    },
    dateStart:{
        type: String,
        required: [true, 'start field is required']
    },
    dateEnd:{
        type: String,
        required: [true, 'end field is required']
    },
    alert_datetime:{
        type: String,
    }
})

module.exports = model('Lesson', lessonSchema)