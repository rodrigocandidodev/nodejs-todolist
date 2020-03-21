const express = require('express');

const List = require('../models/List');

module.exports = {
    async store(req,res){
        try {
            const {listName, userName} = req.body;
            const list = await List.create({listName, userName});

            return res.json(list);
        } catch (error) {
            return res.status(400).json({error: 'Registration failed'});
        }
    },
    async index(req, res){
        const list = await List.find();

        return res.json(list);
    }
};