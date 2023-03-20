import { createSlice } from '@reduxjs/toolkit';



const initialState = [];


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      addUser: (state, action) => {
        state.push(action.payload);
      },
      updateUser: (state, action) => {
        const { id, name, email, phone, gender, role } = action.payload;
        const user = state.find((u) => u.id === id);
        if (user) {
          user.name = name;
          user.email = email;
          user.phone = phone;
          user.gender = gender;
          user.role = role;
        }
      },
      deleteUser: (state, action) => {
        const id = action.payload;
        state = state.filter((u) => u.id !== id);
      },
    },
  });
  
  export const { addUser, updateUser, deleteUser } = usersSlice.actions;
  
  export default usersSlice.reducer;
  