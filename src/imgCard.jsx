import React from "react";

const color = {
    backgroundColor: "lightblue",
    width: "40px",
    height: "40px",
    padding: "20px 20px",
    // paddingLeft: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius : "50%",
    border : "8px solid black"
  };

const size = {
    fontSize : "40px",
    alignContent : "center"
}

const flex = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    width : "max-content"
}

const head = {
    justifyContent: 'center',
    textAlign : "center",
    fontSize : "20px"

}

function Card(props){
    return (
        <>
        <div style={flex}>
        <div  style={color}>
        
            <span style={size}>{props.content}</span>
            
        </div>
        <h1 style={head}>{props.name}</h1>
        </div>
        </>
    );
}

export default Card;
