import React from "react";
import './style.scss';


const PockemonType = ({name})=>{
  return(
    <div className="pokemon__type">{name}</div>
  )
}

export default PockemonType