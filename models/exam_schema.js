const { Schema, model } = require('mongoose')
const examSchema = new Schema ({

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
    topic:{
        type: String
    },
    datetime:{
        type: String,
        required: [true, 'date field is required']
    },
    location:{
        type: String,
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
        type: Date,
    }
})
module.exports = model('Exam', examSchema)