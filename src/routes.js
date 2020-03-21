const express   = require('express');
const route     = express.Router();

route.get('/',(req,res) => {
    return res.json({"message": "Home"});
});

module.exports = route;