require('dotenv').config()
require("dns").setDefaultResultOrder("ipv4first");

const express = require("express")
const app = express()
const port = 8060;
const cors = require("cors");
const All_routes = require("./Routes/All_routes");
const AI_Route = require("./Routes/AI_Route");


app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({extended: true}));
app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true,
    }
));


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