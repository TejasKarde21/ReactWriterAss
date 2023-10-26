import Card from './imgCard';

const imges = {
    img1 : <i className="fa-regular fa-user"></i>,
    img2 : <i className="fa-solid fa-briefcase"></i>,
    img3 : <i className="fa-regular fa-clipboard"></i>,
    img4 : <i className="fa-solid fa-lightbulb"></i>,
    img5 : <i className="fa-solid fa-briefcase"></i>,
    img6 : <i className="fa-solid fa-volume-high"></i>,
    img7 : <i className="fa-solid fa-laptop"></i>,
    img8 : <i className="fa-solid fa-lightbulb"></i>    
  }
  
  const names = {
    name1: "PROFILE",
    name2 : "WORK",
    name3 : `SKILLS `,
  }

  const frame = {
      display : "flex",
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'space-around',
      height: '120vh',
      paddingLeft : "40px",
    //   border : "4px solid red",
      width : "10vw",
  }

  function LineCard(){
    return (
        <>
        <div style={frame}>
        <Card content={imges.img1} name={names.name1}/>
        <Card content={imges.img2} name={names.name2}/>
        <Card content={imges.img3} name={names.name3}/>
        <Card content={imges.img4} />
        </div>
        </>
    );
  }

  export default LineCard;