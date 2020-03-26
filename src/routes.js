const express   = require('express');
const route     = express.Router();

const ListController = require('./controllers/ListController');
const TaskController = require('./controllers/TaskController');

route.get('/list',              ListController.index);
route.get('/list/:listId',      ListController.show);
route.post('/list',             ListController.store);
route.put('/list/:listId',      ListController.update);
route.delete('/list/:listId',   ListController.delete);

route.post('/list/:listId/task',            TaskController.store);
route.get('/list/:listId/task',             TaskController.index);
route.put('/list/:listId/task/:taskId',     TaskController.update);
route.delete('/list/:listId/task/:taskId',  TaskController.delete);

module.exports = route;