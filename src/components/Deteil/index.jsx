import React, {memo} from "react";
import { useSelector } from "react-redux";
import Item from "../Item";
import './style.scss';

const Deteil = () => {
  const { onePockemon } = useSelector(state=>state.pockemons);
  const {name,types,sprites,moves,stats, weight} = onePockemon;
  return (
      <Item 
        moves={moves}
        weight={weight}
        name={name} 
        types={types} 
        stats = {stats}
        sprites={sprites}
        check={true}
        key={(Math.random() + 1).toString(36).substring(7)} 
      />
  )
}

export default memo(Deteil);