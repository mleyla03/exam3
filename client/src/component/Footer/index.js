import React from 'react'
import Style from "./index.module.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
const Footer = () => {
  return (
    <>
    <div className={Style.foot}>
        <div className={Style.lefts}>
        Copyright ©2023 All rights reserved | This template is made with  by <span>Colorlib</span> 
        </div>
        <div className={Style.rights}>
    <FacebookIcon/>
    <TwitterIcon/>
    <SportsBasketballIcon/>
        </div>
    </div>
    </>
  )
}

export default Footer