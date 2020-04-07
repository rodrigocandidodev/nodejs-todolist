const express   = require('express');
const routes    = require('./routes');
const cors      = require('cors');

const app   = express();
require('./database/index');
const port  = 3000;

app.use(express.json());
app.use(cors());
app.use('/api',routes);
app.listen(port);