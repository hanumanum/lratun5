import "./Home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { disableContextMenu } from '../../utilits/functions';
import { Team } from "./Team";
import { About } from "./About";

const posterImage = "https://loremflickr.com/900/400/poster"

export const Home = () => {
  const [isAboutOpened, setIsAboutOpened] = useState(false)
  const [isTeamOpened, setIsTeamOpened] = useState(false)

  const toggleAbout = () => {
    setIsAboutOpened(!isAboutOpened)
  }

  const toggleTeam = () => {
    setIsTeamOpened(!isTeamOpened)
  }

  //Some parts are hidden by {false && etc...} 
  return (
    <div className="holder" onContextMenu={disableContextMenu}>
      <div className="top-block" />
      <img className="hero-image" alt="" src={posterImage} />
      <h1 className="home-title">Lratun</h1>
      <h2 className="home-project-title">Lratun is "Newseum" from Armenia</h2>
      <Link className="button" to="/menu">Enter</Link>
      {false && <div onClick={toggleAbout} className={(isAboutOpened) ? "home-links-first home-links-active" : "home-links-first"}>about "Lratun" (arm)</div>}
      {false && <div onClick={toggleTeam} className={(isTeamOpened) ? "home-links-second home-links-active" : "home-links-second"}>our tean (arm)</div>}
      {false && <img alt="" className="lratun-logo" src="/logo-lratun.png" />}
      {false && <img alt="" className="mic-logo" src="/logo-mic.png" />}
      {isAboutOpened && <About closePopup={toggleAbout} />}
      {isTeamOpened && <Team closePopup={toggleTeam} />}
    </div>
  );
};
