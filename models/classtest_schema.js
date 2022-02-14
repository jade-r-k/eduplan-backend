const { Schema, model } = require('mongoose')

const classtestSchema = new Schema({
    title:{
        type: String,
        required: [true, 'title field is required']
    },
    abbreviation:{
        type: String,
    },
    lecturer:{
        type: String
    },
    location:{
        type: String
    },
    day:{
        type: String,
        required: [true, 'day field is required']
    },
    start_datetime:{
        type: String,
        required: [true, 'start field is required']
    },
    end_datetime:{
        type: String,
        required: [true, 'end field is required']
    },
    alert_datetime:{
        type: String,
    }
})

module.exports = model('Classtest', classtestSchema)