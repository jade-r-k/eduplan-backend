const { Schema, model} = require('mongoose')
const eventSchema = new Schema ({
    user_id:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'user field is required']
    },
    title:{
        type: String,
        required: [true, 'title field is required']
    },
    description:{
        type: String
    },
    color: { 
        type: String,
        
    },  
    start_datetime:{
        type: String,
        required: [true, 'start date field is required']
    },
    end_datetime:{
        type: String,
        required: [true, 'end field is required']
    },
    alert_datetime:{
        type: Date,
    }
})
module.exports = model('Event', eventSchema)