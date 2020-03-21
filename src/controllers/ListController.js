const express = require('express');

const List = require('../models/List');

module.exports = {
    async store(req,res){
        const {listName, userName} = req.body;

        const list = await List.create({listName, userName});

        return res.json(list);
    }
};