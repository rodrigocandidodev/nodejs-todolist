const express   = require('express');
const route     = express.Router();

const ListController = require('./controllers/ListController');

route.get('/list', ListController.index);
route.post('/list', ListController.store);
module.exports = route;