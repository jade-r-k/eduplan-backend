const { Schema, model } = require('mongoose')

const assignmentSchema = new Schema({
    user_id:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'user field is required']
    },
    subject_id:{
        type: Schema.Types.ObjectId,
        ref: 'Subject',
        required: [true, 'subject field is required']
    },
    title:{
        type: String,
        required: [true, 'title field is required']
    },
    description:{
        type: String,
    },
    due_date:{
        type: String,
        required: [true, 'due date field is required']
    },
    grade_percent:{
        type: String,
    },
    grade:{
        type: String,
    },
    done:{
        type: Boolean,
        required: [true, 'done field is required']
    },
    alert_datetime:{
        type: String,
    },
})

module.exports = model('Assignment', assignmentSchema)