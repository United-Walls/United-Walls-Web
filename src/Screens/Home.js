import React from 'react'
import mockup from '../Assets/Graphics/mockup.png'
import mockup2 from '../Assets/Graphics/mockup2.png'
import mockup3 from '../Assets/Graphics/mockup3.png'
import appstore from '../Assets/Graphics/appstore.svg'
import playstore from '../Assets/Graphics/playstore.png'

const Home = () => {
  return (
    <div className='Home Screen'>
        <div className="Content">
            <div className='ContentTitle'>
                <h1>Download Now</h1>
            </div>
            <div className="Downloads">
                <a href="https://play.google.com/store/apps/details?id=com.paraskcd.unitedwalls" target="_blank" rel="noopener noreferrer"><img className="playstore reveal" src={ playstore } alt="playstore" /></a>
                <a href="https://apps.apple.com/us/app/united-walls/id6446158751" target="_blank" rel="noopener noreferrer"><img className="appstore reveal" src={ appstore } alt="appstore" /></a>
            </div>
            <div className="ContentGraphics">
                <img className="reveal" src={ mockup } alt="Mockup" />
                <img className="reveal" src={ mockup2 } alt="Mockup" />
                <img className="reveal" src={ mockup3 } alt="Mockup" />
            </div>
        </div>
    </div>
  )
}

export default Home