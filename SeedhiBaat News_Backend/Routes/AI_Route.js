const express = require("express");
const { textAi, textAiGem } = require("../utils/AI");
const router = express.Router()

router.route("/")
.get((req, res)=>
{
    res.send("jk")
})

router.route("/sensitive")
.post(async(req, res)=>
{
    let aires = await textAiGem();
    
    console.log(aires);
    res.status(200).json({aires:aires})
})

module.exports = router;