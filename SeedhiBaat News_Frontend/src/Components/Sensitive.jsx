import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import ServerContext from '../Context/ServerContext.js'
import Loader from './Loader.jsx'

function Sensitive() {

  let {airesponse, aiRes} = useContext(ServerContext)

  let runFun = async()=>
  {
    await airesponse();
    console.log("ai",aiRes);
  }

//   useEffect(()=>{
//     return airesponse();
//   }, [])

  return (
    <>
      <div className='row m-3 d-flex' style={{justifyContent:"center", alignItems: "center"}}>
        {/* <Card title="kk" from="pk" text="Some quick example text to build on the card title and make up the bulk of the card’s content."/> */}
        {aiRes.length == 0 && <Loader/>}
        {aiRes && aiRes.map((i)=>(
        <>
          <Card key={i} title={i.title} text={i.content} postive={i.positive_review} negetive={i.negative_review}/> 
        </>
      ))}
      </div>
      <button onClick={runFun}>btn</button>
      
    </>
  )
}

export default Sensitive
