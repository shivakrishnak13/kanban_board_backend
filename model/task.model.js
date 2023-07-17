const mongoose = require("mongoose");
const { subtaskSchema } = require("./subtask.model");


const taskSchema = mongoose.Schema({
       boardID : String,  
       title : String,
       description : String,
       status : String,
       subtask : [subtaskSchema]
   },{
    versionKey : false,
});


const TaskModel = mongoose.model("task", taskSchema)

module.exports = {TaskModel,taskSchema}