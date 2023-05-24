import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import Style from "./index.module.css"
import { getAllBook } from '../../api/requests'
const Book = () => {
    const [ robot,setRobot]=useState([])
    useEffect(()=>{
        getAllBook().then((res)=>{
            setRobot(res)
        })
    },[])
  return (
    <>
    <div className={Style.middle}>
        <h1>Requirements to be Immigrants</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div className={Style.ends} style={{display:"flex",justifyContent:"space-around",alignItems:"center",marginTop:"60px"}}>
        {robot && robot.map((rob)=>{
          return <>
          <Card
    style={{
      width: 300,
    }}
  >
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img src={rob.imageURL} alt=''/>
    </div>
    <h3>{rob.names}</h3>
    <p>{rob.title}</p>
    
 
  </Card>
          </>
      
        } )}
    </div>
    </>
  )
}

export default Book