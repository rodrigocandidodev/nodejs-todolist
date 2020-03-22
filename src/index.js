const express   = require('express');
const routes    = require('./routes');

const app   = express();
require('./database/index');
const port  = 3000;

app.use(express.json());
app.use('/api',routes);
app.listen(port);