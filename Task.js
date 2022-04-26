const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true 
    },
    createdAt: {
        type: Date,
        required: true
    },
    done : {
        type: Boolean,
        default: false,
        required: true
    }
})