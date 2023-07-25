import { ordered as cakeOrdered } from "../cake/cakeSlice";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOficecreams: 40,
};
const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOficecreams--;
    },
    restocked: (state, action) => {
      state.numOficecreams += action.payload;
    },
  },
  // here we implement Extra reducers it means with the help of it we can mutate the state of other slice
  // scenerio:- is that everytime custmer bought a cake the shopkeeper gives 1 icecream free that means when a person
  // bought a cake we also have to reduce the number of icecream as well as

  // it is the first method to use extra reducers
  // extraReducers:{
  //     ['cake/ordered']: (state) => {
  //         state.numofIcecreams--
  //     }
  // }

  // it is secnd method t use extra reducers
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOficecreams--;
    });
  },
});
export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;





















