import React from 'react'
import { Helmet } from 'react-helmet'
import Style from "./index.module.css"
const Planig = () => {
  return (
    <>
    <Helmet>
               <title>Corus</title>
            </Helmet>
    <div className={Style.plan}>
        <div className={Style.only}>
        <div className={Style.one}>
        <h2>Start <span>planning </span> your
New<span> Dream</span></h2>
      </div>
      <div className={Style.two}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
      </div>
      <div className={Style.end}>
      <button className={Style.button}>Book Consultancy</button>
      </div>
        </div>
   
    </div>
    </>
  )
}

export default Planig