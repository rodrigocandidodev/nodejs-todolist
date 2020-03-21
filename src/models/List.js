const  mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    listName: {
        type: String,
        require: true,
    },
    userName: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const List = mongoose.model('List',ListSchema);

module.exports = List;