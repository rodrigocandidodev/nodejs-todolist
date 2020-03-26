const express = require('express');

const Task = require('../models/Task');

module.exports = {
    async store(req,res){
        try {
            const data = {
                taskName:   req.body.taskName,
                list:       req.params.listId
            };
            const task = await Task.create(data);
            
            if(task){
                console.log('> User added a new item!');
            }

            return res.json(task);
        } catch (error) {
            return res.status(400).json({error: 'Registration Failed!'});
        }
    },
    async index(req, res){
        try{
            const list = req.params.listId;

            const task = await Task.find({list});
            
            return res.json(task);
        }catch (error) {
            return res.json({error: 'Task failed!'});
        }
    },
    async update(req, res){
        try{
            const taskId = req.params.taskId;

            const data = {
                taskName:   req.body.taskName,
                taskStatus: req.body.taskStatus,
                list:       req.body.list
            };
            await Task.findByIdAndUpdate(taskId, data);

            console.log('> User updated a task!');
            return res.json({message: "User updated a task!"});
        } catch( error ){
            return res.json({error: 'Operation failed while updating task!'});
        }
    },
    async delete(req, res){
        try{
            const taskId = req.params.taskId;
            await Task.findByIdAndRemove(taskId);
            
            console.log('> User removed a task!');
            return res.json({message:'User removed a task!'});
        } catch(error){
            return res.json({error: 'Operation failed while deleting task!'});
        }
    }
};