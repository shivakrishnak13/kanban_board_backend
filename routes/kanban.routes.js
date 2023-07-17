const { Router } = require("express");
const { KanbanModel } = require("../model/kanban.model");
const { TaskModel } = require("../model/task.model");

const boardRouter = Router();


boardRouter.get("/get", async (req,res) =>{
    try {
        
        const boards = await KanbanModel.find();
        res.status(200).json({boards})
    
    } catch (error) {
        res.status(400).json({error})
    }

})

boardRouter.post("/create-board", async (req,res) =>{
    try {
            const newBoard = new KanbanModel({...req.body});
            await newBoard.save();
            res.status(200).json({newBoard})
    } catch (error) {
        res.status(400).json({error})
    }

})


boardRouter.post("/create-task/:id", async (req,res) =>{
    try {
            const boardID = KanbanModel.find({_id: req.params.id});

            const newTask = new TaskModel({...req.body});
             await newTask.save();
            res.status(200).json({newTask,boardID})
    } catch (error) {
        res.status(400).json({error:error.message})
    }

})

// boardRouter.patch("/get", async (req,res) =>{
//     try {
        
//     } catch (error) {
//         res.status(400).json({error})
//     }

// })

// boardRouter.delete("/get", async (req,res) =>{
//     try {
        
//     } catch (error) {
//         res.status(400).json({error})
//     }

// });


module.exports = {boardRouter}