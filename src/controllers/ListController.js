const express = require('express');

const List = require('../models/List');
const Task = require('../models/Task');

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
    },
    async update(req, res){
        try{
            const listId = req.params.listId;
            const data = {
                listName: req.body.listName
            };
            await List.findByIdAndUpdate(listId, data);

            console.log('> User updated a list!');
            return res.json({message: "User updated a list!"});
        } catch( error ){
            return res.json({error: 'Operation failed while updating list!'});
        }
    },
    async delete(req, res){
        try{
            const listId = req.params.listId;

            const task = await Task.find({list: listId});
                
            if(task.length > 0){
                task.forEach(async element => {
                    await Task.findByIdAndRemove(element.id);
                    console.log('> User removed: ',element.taskName);
                });
            }
            await List.findByIdAndRemove(listId);
            console.log('> User removed a list!');

            return res.json({message: 'List successfully removed!'});
        } catch(error){
            return res.json({error: 'Operation failed while deleting list!'});
        }
    }
};