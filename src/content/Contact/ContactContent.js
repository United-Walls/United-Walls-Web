import React from 'react'
import email from '../../Assets/Graphics/email.webp'
import titter from '../../Assets/Graphics/titter.webp'

const ContactContent = () => {
  return (
    <div className='About Screen'>
      <div className="Content">
        <div className='ContentTitle'>
          <h1>Contact</h1>
        </div>
        <div className="ParaContainer links">
          <a href="mailto:paraskhanchandani1315@gmail.com" target="_blank" rel="noopener noreferrer">
            <div className="link emailLink">
              <div className="icon iconLink">
                <img style={{borderRadius: "unset", objectFit: "contain", }} src={email} alt="Email" />
              </div>
              <div className="linkTitle">
                Email
              </div>
            </div>
          </a>
          <a href="https://twitter.com/ParasKCD" target="_blank" rel="noopener noreferrer">
            <div className="link titterLink">
              <div className="icon iconLink">
                <img style={{borderRadius: "unset", objectFit: "contain", }} src={titter} alt="Titter" />
              </div>
              <div className="linkTitle">
                Titter
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactContent