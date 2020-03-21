const express   = require('express');
const route     = express.Router();

const ListController = require('./controllers/ListController');

route.get('/list',(req,res) => {
    return res.json({"message": "Home"});
});
route.post('/list', ListController.store);
module.exports = route;