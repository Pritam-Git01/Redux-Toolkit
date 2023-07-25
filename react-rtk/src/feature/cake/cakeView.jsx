import React from "react";
import {  useSelector, useDispatch } from "react-redux";
import { ordered,restocked } from "./cakeSlice";

const CakeView = () => {
   const numOfcakes =  useSelector((state) => state.cake.numOfcakes)
   const dispatch  = useDispatch()
  return (
    <div>
     
      <h2>Number of cakes - {numOfcakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order cake </button>
      <button onClick={() => dispatch(restocked(4))}>Restock cake</button>
    </div>
  );
};

export default CakeView;
