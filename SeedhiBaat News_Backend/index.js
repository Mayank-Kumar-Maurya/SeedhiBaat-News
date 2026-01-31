require('dotenv').config()
const express = require("express")
const app = express()
const port = 8060;
const cors = require("cors");
const All_routes = require("./Routes/All_routes");
const AI_Route = require("./Routes/AI_Route");

app.use(cors())

app.get("/", (req, res)=>
{
    res.send("hi");
})

app.use("/", All_routes)
app.use("/ai/", AI_Route)

app.listen(port, ()=>
{
    console.log("Successfully connected to port:", port);
})