const express = require("express");
const router = express.Router();

router.route("/hi")
.get((re1, res)=>
{
    res.send("hello");
})


module.exports = router;