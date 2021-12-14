import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

const Navigation = ()=>{
  return(
  <header>
    <nav >
      <ul className="navigation" >
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to='/deteil'>Deteils</NavLink></li>
      </ul>
    </nav>
  </header>
  )
}

export default Navigation;