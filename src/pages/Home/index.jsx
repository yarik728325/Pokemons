import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { startRequest, moreLoadingPocke } from "../../redux/reducer/pockemons/pockemons";
import Items from "../../components/Items";
import Deteil from "../../components/Deteil";
import MultipleSelectPlaceholder from "../../components/MultiSelect";
import './style.scss';

const Home = ()=>{
  const dispatch = useDispatch();
  const { 
    data, 
    isLoading, 
    countLoad,
    currentPage, 
    count,
    isClosed
   } = useSelector(state=>state.pockemons);
  const tmp = isClosed ? <Deteil/> : null;
  useEffect(()=>{
   dispatch(startRequest())
  },[dispatch])

  if(!data ){
    return <h2>Loading ...</h2>
  }
  const isDisabled = isLoading?true:false;
  return (
    <>
      <MultipleSelectPlaceholder/>
      {tmp}
      <div className="pokemons">
        <h1>Pokedex</h1>
        <Items data={ data } />
        <button disabled={isDisabled}  onClick={(e)=>{
          if(currentPage<count){
            dispatch(moreLoadingPocke(countLoad+10))
          }
        }}>LoadMore</button>
      </div>
    </>
  )
}

export default Home;