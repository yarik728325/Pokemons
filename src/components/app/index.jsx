import React from "react";
import Routing from "../../routes";
import Navigation from "../Navigation";
import './style.scss';

const App =  ()=>{
  return (
    <>
      <header>
        <Navigation/>
      </header>
      <main>
       <Routing/>
      </main>
    </>
  )
}

export default App;