import React from 'react'
import Footer from '../../component/Footer'
import Assetsing from '../Assetsing'
import Book from '../CardImage'
import New from '../New'



   import {Helmet} from "react-helmet";

import Planig from '../Planig'

import Style from "./index.module.css"
const Home = () => {
  return (
    <>
     <Helmet>
               <title>Home</title>
            </Helmet>
    <div className={Style.home}>
        <div className={Style.images}>
            <div className={Style.left}>
                <p className={Style.p}>PROCESS VISA WITHOUT WITHIN HOURS</p>
                <h1 className={Style.h1}>Immigrations &Visa Consultation</h1>
                <button className={Style.button}>Book Consultancy</button>
            </div>
            <div className={Style.right}><img src='https://preview.colorlib.com/theme/immigration/img/header-img.png' alt=''/></div>
            
        </div>
    </div>
    <Planig/>
   <Book/>
   <Assetsing/>
  
<New/>
 <Footer/>
   
    
    
    </>
  )
}

export default Home