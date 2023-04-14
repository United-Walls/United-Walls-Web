import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Screens/Home';
import Footer from './Components/Footer/Footer';
import AboutContent from './content/About/AboutContent';
import ContactContent from './content/Contact/ContactContent';

const App = ({
  activeScreenIndex
}) => {
  const [ activeScreen, setActiveScreen ] = useState("");

  useEffect(() => {
    setActiveScreen(activeScreenIndex);
  }, [activeScreenIndex]);

  const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', reveal);

    return () => window.removeEventListener('scroll', reveal);
  }, []);

  const conditionalRender = () => {
    if(activeScreen === "Home") {
      return <Home />
    } else if(activeScreen === "About") {
      return <AboutContent />
    } else {
      return <ContactContent />
    }
  }

  return (
    <div className="App">
      <Header activeScreen={activeScreen} setActiveScreen={
        (screen) => {
          console.log(screen);
          setActiveScreen(screen)
        }
      } />
      { conditionalRender() }
      <Footer />
    </div>
  );
}

export default App;
