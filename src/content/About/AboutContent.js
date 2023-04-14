import React from 'react'
import telegramIcon from '../../Assets/Graphics/telegram.png'
import githubIcon from '../../Assets/Graphics/github.png'

const AboutContent = () => {
  return (
    <div className='About Screen'>
        <div className="Content">
            <div className='ContentTitle'>
                <h1>About us</h1>
            </div>
            <div className="ParaContainer">
              <p>Enjoy your devices with our handcrafted, beautiful and artistic designs.
              <br /><br />
              United Walls is an app created by the United Setups community in Telegram to provide users with unique wallpapers that are sure to make a statement on any device.
              <br /><br />
              Our community of dedicated users and designers work tirelessly to ensure each wallpaper reflects the love we put into crafting it - so you can be confident knowing only high-quality art will grace your device's display!
              </p>
            </div>
            <div className='ContentTitle'>
                <h1>Links</h1>
            </div>
            <div className="ParaContainer links">
              <a href="https://t.me/unitedsetups" target="_blank" rel="noopener noreferrer">
                <div className="link telegramLink">
                  <div className="icon iconLink">
                    <img src={telegramIcon} alt="Telegram" />
                  </div>
                  <div className="linkTitle">
                    Telegram
                  </div>
                </div>
              </a>
              <a href="https://github.com/United-Walls" target="_blank" rel="noopener noreferrer">
                <div className="link githubLink">
                  <div className="icon iconLink">
                    <img src={githubIcon} alt="GitHub" />
                  </div>
                  <div className="linkTitle">
                    GitHub
                  </div>
                </div>
              </a>
            </div>
            <div className='ContentTitle'>
                <h1>Credits</h1>
            </div>
            <div className="ParaContainer credits">
              <a href="https://paraskcd.com" target="_blank" rel="noopener noreferrer">
                <div className="credit devCredit">
                  <div className="icon iconCredit">
                    <img src="https://github.com/paraskcd1315.png" alt="Dev Credit" />
                  </div>
                  <div className="infoCredit">
                    <span>Paras KCD</span>
                    <span className='byLine'>Developer</span>
                  </div>
                </div>
              </a>
              <a href="https://t.me/unitedsetups" target="_blank" rel="noopener noreferrer">
                <div className="credit telegramCredit">
                  <div className="icon iconCredit">
                    <img src={telegramIcon} alt="Telegram" />
                  </div>
                  <div className="infoCredit">
                    <span>United Setups</span>
                    <span className='byLine'>Telegram Community</span>
                  </div>
                </div>
              </a>
            </div>
        </div>
    </div>
  )
}

export default AboutContent