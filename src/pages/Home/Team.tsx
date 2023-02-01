import closeSvgIcn from './assests/close.svg';
export const Team = ({ closePopup }: any) => {
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