const mongoose = require("mongoose");


const subtaskSchema = mongoose.Schema({
            boardID : String,       
            taskID : String,       
           title : String,
           isCompleted : Boolean
       
    
},{
    versionKey : false,
});


const SubtaskModel = mongoose.model("subtask", subtaskSchema)

module.exports = {SubtaskModel,subtaskSchema}