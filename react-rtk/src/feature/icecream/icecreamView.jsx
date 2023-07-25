import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { ordered,restocked } from './icecreamSlice';


const IcecreamView = () => {
   const numOficecreams =  useSelector((state) => state.icecream.numOficecreams)
   const dispatch = useDispatch()
   const[value,setValue] = useState(1)
  return (
    <div>
        <h2>Number of ice creams - {numOficecreams}</h2>
        <button onClick={() => dispatch(ordered())}>Order ice cream </button>
        <input   onChange={(e) => setValue(parseInt(e.target.value))}/>
        <button onClick={() => dispatch(restocked(value))}>Restock ice cream</button>
        

    </div>
  )
}

export default IcecreamView