const  mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    listName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const List = mongoose.model('List',ListSchema);

module.exports = List;