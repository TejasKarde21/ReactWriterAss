import BCard from './BlackCard';

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

const right = {
    // border : "10px solid yellow",
    width :  "90vw",

}
const head = {
    fontSize : "30px",
}

const head1 = {
    // color : "#ff6a00" ,
    width : "80%",
    fontSize: "20px",
    fontWeight : "400",
    paddingLeft : "30px",
}

const font  = {
    fontSize : "20px",
    fontWeight : "500",
    letterSpacing : "10px"
}

const font1 ={
    fontSize : "20px",
    fontWeight : "700",
    
   
}

const border = {
    width : "50%",
    // background : "blue",
    borderRight : "12px solid black",
    // borderBottom :"12px solid black",
}
const border1 = {
    width : "50%",
    // background : "blue",
    // borderRight : "12px solid black",
    // borderBottom :"12px solid black",
}

const first = {
    display: 'flex',
    width : "100%",
    height: '30vh',
     borderBottom : "10px solid black",
     marginBottom : "30px",
}



const flex = {
    display : "flex",
    marginTop : "-20px",
    paddingLeft : "30px",
}

const slide = {
    marginLeft : "80px",
}

const slide1 = {
    // marginLeft : "80px",
    fontSize : "20px",
    letterSpacing : "3px"
    ,
    height : "100%",
    marginTop : "20px",
}


// section 2
const second = {
    // paddingTop : "5px",
    display: 'flex',
    flexDirection: 'column',
    width : "100%",
    height: '30vh',
    // border : "2px solid red",
}

const one = {
    display : "flex",
    // paddingLeft : "30px",
    marginTop : "-30px"
}

const font2 ={
    fontSize : "20px",
 fontWeight : "700",
//  marginRight : "40px",
//  border : "2px solid gray",
 width : "30%",   

   
}

const bold = {
    fontSize : "20px",
    fontWeight : "700",
    // marginTop : "20px" ,
    // letterSpacing : "3px" 

}

const slide2 = {
    // marginLeft : "110px",
    fontSize : "20px",
    letterSpacing : "3px"
}

const slide3 = {
    // marginLeft : "104px",
    fontSize : "20px",
    letterSpacing : "3px"
}

//section 3



//section 3
const border2 = {
    width : "50%",
    marginLeft : "40px",
    // background : "blue",
    // borderRight : "12px solid black",
    // borderBottom :"12px solid black",
}

const one1 = {
    display : "flex",
    // paddingLeft : "30px",
    marginTop : "0px"
}

const circle = {
    width : "15px",
    height : "15px",
    borderRadius : "50%",
    backgroundColor : "#6c98f8",
    marginRight : "10px",
}



const slide4 = {
    // fontSize : "20px",
    // letterSpacing :,
    display : "flex",
}


const first1 = {
    display: 'flex',
    width : "100%",
    height: '30vh',
    marginTop : "-40px",
    // border : "2px solid red",
    borderBottom :"10px solid black",
    borderTop : "10px solid black",
}

 //last section

  const flex1 = {
          display : "flex",
          justifyContent : "space-around",
  }

  const second1 = {
    // paddingTop : "5px",
    display: 'flex',
    flexDirection: 'column',
    width : "100%",
    height: '10vh',
    marginTop : "45px",
    // border : "2px solid red",
}




function RightSide(){
    return(
        <>
        <div className="right-side" style={right}>
      <div style={first}>
        <div style={border}>
       <h1 style={head}>
        JESSICA <br />
        GREENE
       </h1>
       <h3 style={font}>FREELANCE WRITER</h3>
       </div>
      
       <div style={border1}>
       <h1 style={head1}>
        I specilized writing long-form blog content, case studies, e-books, and white papers for B2Bs, tech startups, and marketing agencies.
       </h1>
       <div style={flex}>  <h3 style={font1}>Email: </h3>    <p style={slide1}> myemail@gmail.com</p> </div>
     
       <div style={flex}>  <h3 style={font1}>Website: </h3>   <p style={slide}> mywebsite.com</p>    </div>
       </div>
       
       </div>
       <div style={second}>
           <div style={one}>
           <h3 style={font2}>Present </h3>    <p style={slide1}><span style={bold}>Jessica Greene MArketing . FreeLance Writer</span> <br/> Created blog posts, landing pages, e-books, and case studies for clients</p>
           </div>
           <div style={one}>
           <h3 style={font2}>2016 </h3>    <p style={slide2}><span style={bold}>Jessica Greene MArketing . FreeLance Writer</span> <br/> Created blog posts, landing pages, e-books, and case studies for clients</p>
           </div>
           <div style={one}>
           <h3 style={font2}>2013-2015 </h3>    <p style={slide3}><span style={bold}>Jessica Greene MArketing . FreeLance Writer</span> <br/> Created blog posts, landing pages, e-books, and case studies for clients</p>
           </div>
       </div>
       <div style={first1}>
        <div style={border}>
        <div style={one1}>
           <h3 style={font2}>Writing </h3>    <p style={slide4}> <div style={circle}></div> <div style={circle}></div> <div style={circle}></div><div style={circle}></div><div style={circle}></div> </p>
           </div>
           <div style={one}>
           <h3 style={font2}>Editing </h3>    <p style={slide4}> <div style={circle}></div><div style={circle}></div><div style={circle}></div><div style={circle}></div></p>
           </div>
             <div style={one}>
           <h3 style={font2}>Social Media </h3>    <p style={slide4}> <div style={circle}></div><div style={circle}></div><div style={circle}></div>  </p>
           </div>
           <div style={one}>
           <h3 style={font2}>Researching </h3>    <p style={slide4}> <div style={circle}></div><div style={circle}></div><div style={circle}></div><div style={circle}></div><div style={circle}></div>   </p>
           </div>
           <div style={one}>
           <h3 style={font2}>SEO </h3>    <p style={slide4}> <div style={circle}></div><div style={circle}></div><div style={circle}></div><div style={circle}></div>   </p>
           </div>
       </div>
      
       <div style={border2}>
         <div style={one1}>
           <h3 style={font2}>Zapier </h3>    <p style={slide2}> Organize Your Life with the Agile Method</p>
           </div>
           <div style={one}>
           <h3 style={font2}>Spoke </h3>    <p style={slide3}> Is 40 hours a week too much? Here`s what history and science say.</p>
           </div>
             <div style={one}>
           <h3 style={font2}>nDash </h3>    <p style={slide2}> Why Generalist Writers Lead to Lost Profits in B2B Tech   </p>
           </div>
          
      
       </div>
       
       </div>
 
       <div style={second1}>
           <div style={flex1}>
             <BCard  content={imges.img5} />
             <BCard   content={imges.img6} />
             <BCard    content={imges.img7} />
             <BCard   content={imges.img8} />
             
           </div>
       </div>
         

</div>
        </>
    );
}

export default RightSide;
