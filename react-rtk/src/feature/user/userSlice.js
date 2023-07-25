import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  laoding: false,
  data: [],
  error: "",
};

// createAsyncthunk under the hood  Generated pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios.get("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.data)
    
  
});
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.laoding = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.laoding = false
      state.data = action.payload
      state.error = ""
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.laoding = false
       state.data = []
      state.error = action.error.message
    })
  },
});

export default userSlice.reducer;
