const  mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true,
    },
    taskStatus: {
        type: String,
        required: false,
        default: 'open'
    },
    list: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List'
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Task = mongoose.model('Task',TaskSchema);

module.exports = Task;