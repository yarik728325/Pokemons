import React  from 'react';
import PockemonType from '../PockemonType';
import { useDispatch } from 'react-redux';
import { changeOnePocke,closedPocke } from '../../redux/reducer/pockemons/pockemons';
import './style.scss';


const Item = ({name,types,sprites,moves,stats, weight, check,index})=>{
  const dispatch = useDispatch();
  const tmp = check?(
    <div className='deteil' >
    <div className='second'>
      <div className="closeModal" onClick={()=>dispatch(closedPocke())} ></div>
      <img src={sprites.front_default} alt="" />
      <h2 className="box__subtitle">{name}</h2>
      <div className="box__type">
        {
          types.map(e=>{
            return <PockemonType name={e.type.name} key={(Math.random() + 1).toString(36).substring(7)} />
          })
        }
      </div>
      <table>
        <tbody>
        {
          stats.map(e=>{
            const { base_stat } = e;
            const { name } = e.stat;
            return(
              <tr key={(Math.random() + 1).toString(36).substring(7)}>
                <td>{name}</td>
                <td>{base_stat }</td>
              </tr>
            )
          })
        }
        <tr>
          <td>Weight</td>
          <td>{weight}</td>
        </tr>
        <tr>
          <td>Total moves</td>
          <td>{moves}</td>
        </tr>
        </tbody>
      </table>
    </div>
    </div>
  ):(
    <div className='box' onClick={()=>{
        dispatch(changeOnePocke({
           moves,
           stats,
           weight,
           name,
           types,
           sprites
         }))
    }} >

      <img src={sprites.front_default} alt="" />
      <h2 className="box__subtitle">{name}</h2>
      <div className="box__type">
        {
          types.map(e=>{
            return <PockemonType name={e.type.name} key={(Math.random() + 1).toString(36).substring(7)} />
          })
        }
      </div>
    </div>
  )
  return tmp
}

export default Item;