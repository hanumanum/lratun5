import "./Home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import closeSvgIcn from './assests/close.svg'
import {disableContextMenu} from '../../utilits/functions';
//import posterImage from './assests/poster.png'
const posterImage = "https://loremflickr.com/900/400/poster"

const About = ({ closePopup }: any) => {
  return (<div className="overlay">
    <div className="about-holder">
      <img onClick={closePopup} className="about-close" src={closeSvgIcn} alt="" />
      <img className="about-image" src={posterImage} alt="" />
      <div className="about-info-holder">
        <h2 className="about-title">«Լրատուն» նախագծի մասին</h2>
        <div className="about-text">
          <div className="about-text-text">«Լրատուն» մեդիա թանգարանի՝ «Հակամարտության լրագրության դրվագներ» ցուցադրությունը ներկայացնում է վերջին 30 տարիների ընթացքում հայկական մեդիայի աշխատանքը Ղարաբաղյան հակամարտության լուսաբանման գործում:</div>
          <div className="about-text-text">«Լրատունը» բազմամեդիա ինտերակտիվ թանգարան է, որը տարածում է մեդիագրագիտության գաղափարը/նպաստում է մեդիակրթությանը՝ թույլ տալով այցելուներին հասկանալ, թե ինչ է ընտրում մեդիան, ինչու է ընտրում, ինչպես է ցուցադրում, ինչ կերպարներ է կարողանում ստեղծել և ինչ հետք է թողնում պատմության մեջ։</div>
          <div className="about-text-text">Ցուցանմուշներն ուղեկցվում են հեղինակների, լուսանկարիչների, փորձագետների հետ հարցազրույցներով, որ ներկայացնում են քաղաքացիական, բարոյական, մասնագիտական երկընտրանքները, որոնց հետ բախվում է լրագրողը։</div>
          <div className="about-text-text">«Լրատուն» մեդիա թանգարան նախագիծն իրականացնում է Մեդիա նախաձեռնությունների կենտրոնը։ Այն հանրությանն է ներկայացնում լրագրողների աշխատանքը վերջին տասնամյակների նշանակալի իրադարձություններն ու երևույթներ լուսաբանելիս։</div>
        </div>
      </div>
    </div>
  </div>)
}

//TODO: fill real information and fix css
const Team = ({ closePopup }: any) => {
  const teamData = [
    {
      name: "Նունե Սարգսյան",
      title: "«Լրատուն» նախագծի ղեկավար"
    },
    {
      name: "Արտակ Կոլյան",
      title: "Ծրագրավորում"
    },
    {
      name: "Կոնստանտին Գյոդակյան",
      title: "Տեխնիկական ապահովում"
    },
    {
      name: "Վարդան Արզումանյան",
      title: "Տեխնիկական ապահովում"
    },
    {
      name: "Վահրամ Մարտիրոսյան",
      title: "Նախագծի հիմնադիր պրոդյուսեր"
    },
    {
      name: "Գեղամ Վարդանյան",
      title: "Նախագծի պրոդյուսեր"
    },
    {
      name: "Ալեն Ասլանյան",
      title: "Նախագծի գրաֆիկական ձևավորում"
    },
    {
      name: "Գայանե Ասրյան",
      title: "Բովանդակության պատասխանատու"
    },
    {
      name: "Քրիստիան Գինոսյան",
      title: "Բովանդակության պատասխանատու"
    },
    {
      name: "Մանե Գրիգորյան",
      title: "Նախագծի համակարգող"
    },
    {
      name: "Լևոն Քալանթար",
      title: "Մոնտաժի ռեժիսոր"
    }
    ,
    {
      name: "Հակոբ Ազիզյան",
      title: "Մոնտաժի ռեժիսոր"
    }
  ]



  return (<div className="overlay">
    <div className="team-holder">
      <img onClick={closePopup} className="team-close" src={closeSvgIcn} alt="" />
      <div className="team-info-holder">
        {
          teamData.map((v: any, i: number) => <div key={`team-member-${i}`} className="team-member">
            <div className="team-member-name">{v.name}</div>
            <div className="team-member-title">{v.title}</div>
          </div>)
        }
      </div>
    </div>
  </div>)
}


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
      {false && <img className="lratun-logo" src="/logo-lratun.png" /> }
      {false && <img className="mic-logo" src="/logo-mic.png" /> }
      {isAboutOpened && <About closePopup={toggleAbout} />}
      {isTeamOpened && <Team closePopup={toggleTeam} />}
    </div>
  );
};
