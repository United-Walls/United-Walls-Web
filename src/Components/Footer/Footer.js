import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='Footer ParaContainer'>
        <div className='Copyright'>Copyright © 2023, Paras Khanchandani</div>
        <div className="FooterContainer">
            <div className="FooterContent">
                <h2>Site Map</h2>
                <Link to="/aboutUs">About us</Link>
                <Link to="/contact">Contact</Link>
                <a href="https://united-walls.github.io/Privacy-Policy/" target="_blank" rel="noopener noreferrer"><div>Privacy Policy</div></a>
                <a href="https://github.com/United-Walls" target="_blank" rel="noopener noreferrer"><div>GitHub</div></a>
                <a href="https://t.me/unitedsetups" target="_blank" rel="noopener noreferrer"><div>Telegram</div></a>
            </div>
            <div className="FooterContent">
                <h2>Downloads</h2>
                <a href="https://apps.apple.com/us/app/united-walls/id6446158751" target="_blank" rel="noopener noreferrer"><div>iOS download</div></a>
                <a href="https://play.google.com/store/apps/details?id=com.paraskcd.unitedwalls" target="_blank" rel="noopener noreferrer"><div>Android download</div></a>
            </div>
        </div>
    </div>
  )
}

export default Footer