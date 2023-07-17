const express = require("express");
const { connection } = require("./db");
require("dotenv").config();
const cors = require("cors");
const { boardRouter } = require("./routes/kanban.routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/board",boardRouter)




app.listen(process.env.PORT || 4000 , async ()=>{
    try {
        await connection;
        console.log(`server is running on ${process.env.PORT}`);
        console.log("db is connected")
    } catch (error) {
        console.log(error.message);
        console.log("error at index.js")
    }
})
