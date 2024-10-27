import React from 'react';

function Card(props){
    
    return (
      <>
      <h2>{props.name}</h2>
      <img src={props.img} alt="an image" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
      </>
    )
  }

export default Card;