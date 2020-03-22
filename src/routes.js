const express   = require('express');
const route     = express.Router();

const ListController = require('./controllers/ListController');

route.get('/list',              ListController.index);
route.get('/list/:listId',      ListController.show);
route.post('/list',             ListController.store);
route.put('/list/:listId',     ListController.update);
route.delete('/list/:listId',   ListController.delete);

module.exports = route;