const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todolistapi',{
    useMongoClient: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;