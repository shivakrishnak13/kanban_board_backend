const mongoose = require("mongoose");
const { taskSchema } = require("./task.model");


const kanbanSchema = mongoose.Schema({
         name: String,
         task:[taskSchema]
},{
    versionKey : false,
});


const KanbanModel = mongoose.model("board", kanbanSchema)

module.exports = {KanbanModel}