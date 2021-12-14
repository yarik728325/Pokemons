import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";


const Routing = () =>{
  return(
    <Routes>
      <Route path="/Pokemons"  element={<Home/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default Routing;