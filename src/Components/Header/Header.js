import React, { useEffect, useState } from 'react'
import './Header.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';

const Header = ({
  activeScreen,
  setActiveScreen
}) => {
  const [ banner, setBanner ] = useState("");
  const [ bannerLoaded, setBannerLoaded ] = useState(false);
  const [ scroll, setScroll ] = useState("");
  const [ activeHome, setActiveHome ] = useState("");
  const [ activeAbout, setActiveAbout ] = useState("");
  const [ activeContact, setActiveContact ] = useState("");

  useEffect(() => {
    axios.get("https://unitedwalls.paraskcd.com/api/walls/mostDownloaded").then((resp) => {
      const random = Math.floor(Math.random() * resp.data.length);
      const randomWall = resp.data[random];
      setBanner(randomWall.file_url);
    });

    return () => setBanner("");
  }, []);

  const listenScrollEvent = () => {
    if (window.scrollY < 70) {
      return setScroll("");
    } else if (window.scrollY > 70) {
      return setScroll(" scroll");
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  useEffect(() => {
    switch(activeScreen) {
      case "About": 
        setActiveHome("");
        setActiveContact("");
        setActiveAbout(" active");
        break;
      case "Contact": 
        setActiveHome("");
        setActiveContact(" active");
        setActiveAbout("");
        break;
      default: 
        setActiveHome(" active");
        setActiveContact("");
        setActiveAbout("");
        break;
    }
  }, [activeScreen]);

  const onMenuItemClick = (event) => {
    const className = event.target.className;

    switch(true) {
      default:
        setActiveScreen("Home");
        break;
      case className.includes("About"):
        setActiveScreen("About");
        break;
      case className.includes("Contact"):
        setActiveScreen("Contact");
        break;
    }
  }

  const conditionalBackground = () => {
    if(activeHome) {
      return <div className="HeaderBackground">
                <img className="banner" style={ bannerLoaded ? { opacity: 1 } : { opacity: 0 } } src={ banner } alt="Random Wallpaper" onLoad={ () => setBannerLoaded(true) } />
                <div style={bannerLoaded ? { opacity: 0 } : { opacity: 1 }} className='loading'>
                        <FadeLoader color="#ffffff" />
                </div>
                {
                  bannerLoaded
                  ?
                  (
                    <div className="HeaderInfo">
                      <p>Enjoy your devices with our beautiful AI Generated Design Collections, curated by us, as well as our own handcrafted, beautiful and artistic designs.</p>
                    </div>
                  )
                  :
                  (
                    ""
                  )
                }
                
              </div>
    } else {
      return <div className="spacer"></div>
    }
  }
  return (
    <div className='Header'>
      { conditionalBackground() }
      <div className={ `HeaderContainer${ scroll }` }>
        <div className="MenuButton"></div>
        <div className="HeaderContent">
          <div className="LogoContainer">
            <Link to="/">United Walls</Link>
          </div>
          <div className={ `MenuContainer${ scroll }` } onClick={(e) => onMenuItemClick(e)}>
            <Link to="/" className={ `Home MenuItem${ activeHome }` }>Home</Link>
            <Link to="/aboutUs" className={ `About MenuItem${ activeAbout }` }>About us</Link>
            <Link to="/contact" className={ `Contact MenuItem${ activeContact }` }>Contact</Link>
          </div>
        </div>
        <div className="MenuButton"></div>
      </div>
    </div>
  )
}

export default Header