const express = require("express");
const { getNews } = require("../utils/openNews");
const router = express.Router();

router.route("/hi")
.get((req, res)=>
{
    console.log(typeof({"id":"pk"},{sor:"kk"}))
    res.send("hello");

})


router.route("/getNews")
.get(async(req, res)=>
{
    let newAns = await getNews();
    console.log("new:", newAns);
    res.send("got");
})


module.exports = router;