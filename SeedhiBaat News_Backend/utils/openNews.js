let axios = require("axios");
require("dns").setDefaultResultOrder("ipv4first");


let newURL = `https://gnews.io/api/v4/top-headlines?lang=en&country=in&category=general&max=10&apikey=2889b25820388cdf89e5f1833c348891`

// let pk = axios.

let getNews = async()=>
{
    let res = await axios.get(newURL);
    console.log(res.data.articles);
    // let data = res
    // console.log(data);
    return res.data.articles;

}

module.exports = {getNews};