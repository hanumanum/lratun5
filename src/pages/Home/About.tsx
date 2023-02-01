import closeSvgIcn from './assests/close.svg';
const posterImage = "https://loremflickr.com/900/400/poster"

export const About = ({ closePopup }: any) => {
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