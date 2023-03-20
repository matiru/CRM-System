import { createSlice } from '@reduxjs/toolkit';



const initialState = {}
const userstateSlice = createSlice({
    name: 'userstate',
    initialState,
    reducers: {
      setUserstate: (state, action) => {
        state.role = action.payload.role;
      },
    },
  });
  
  export const { setUserstate } = userstateSlice.actions;
  
  export default userstateSlice.reducer;
  