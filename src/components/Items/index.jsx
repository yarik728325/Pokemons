import React,{memo} from "react";
import Item from "../Item";
import './style.scss';


const Items = ({ data }) => {
  return (
    <div className="wrapper">
      {
        data.map((e,index)=>{
          const { name, types, sprites,stats,weight,moves } = e;
          return (
          <Item 
            moves={moves.length}
            weight={weight}
            name={name} 
            types={types} 
            stats = {stats}
            sprites={sprites}
            index={index}
            key={(Math.random() + 1).toString(36).substring(7)} 
          />
          )
        })
      }
    </div>
  )
}

export default memo(Items);