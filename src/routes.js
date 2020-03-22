const express   = require('express');
const route     = express.Router();

const ListController = require('./controllers/ListController');

route.get('/list', ListController.index);
route.get('/list/:listId', ListController.show);
route.post('/list', ListController.store);
module.exports = route;