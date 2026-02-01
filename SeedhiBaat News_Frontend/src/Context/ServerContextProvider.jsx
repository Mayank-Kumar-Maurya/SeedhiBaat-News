import React, { useContext, useState } from 'react'
import ServerContext from './ServerContext.js'
import axios from "axios";

function ServerContextProvider({children}) {

let server = axios.create({
  baseURL: "http://localhost:8060/ai",
  withCredentials: true,
});

let [aiRes, setAiRes] = useState([]);

let airesponse = async()=>
{
    let aiJsonRes = await server.post("/sensitive")
    console.log(aiJsonRes);
    console.log(aiJsonRes.data);
    console.log(aiJsonRes.data.aires);
    console.log(aiJsonRes.data.aires[0]);
    let data = aiJsonRes.data.aires.length == 1 ? aiJsonRes.data.aires[0] : aiJsonRes.data.aires;
    console.log("pk", data);

    setAiRes((pre)=> pre = data);
}


  return (
    <ServerContext.Provider value={{airesponse, aiRes, setAiRes}}>
      {children}
    </ServerContext.Provider>
  )
}

export default ServerContextProvider
