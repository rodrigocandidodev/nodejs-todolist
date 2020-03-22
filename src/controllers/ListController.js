const express = require('express');

const List = require('../models/List');

module.exports = {
    async store(req,res){
        try {
            const {listName, userName} = req.body;
            const list = await List.create({listName, userName});
            
            if(list){
                console.log('> User added a new list!');
            }

            return res.json(list);
        } catch (error) {
            return res.status(400).json({error: 'Registration failed'});
        }
    },
    async index(req, res){
        try{
            const list = await List.find();
            
            return res.json(list);
        }catch (error) {
            return res.json({error: 'List failed!'});
        }
    },
    async show(req, res){
        try{
            const listId = req.params.listId;

            const list = await List.findById(listId);

            return res.json(list);
        }catch (error) {
            return res.json({error: 'The search failed!'});
        }
    }
};