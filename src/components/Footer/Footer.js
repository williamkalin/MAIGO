import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
   return (
      <div className={classes.footer}>
         <ul>
            <li><a href="/">contact</a></li>
            <li><a href="/">socials</a></li>
            <li><a href="/">careers</a></li>
            <li><a href="/">stores</a></li>
            <li><a href="/">charity</a></li>
         </ul>

         <p>concept made by William Kalin. You can contact/ find more of my work on www.williamkalin.com</p>

      </div>
   )
}


export default Footer;