import { createSlice } from '@reduxjs/toolkit';



const state = {
  users: []
}


const usersSlice = createSlice({
    name: 'usersSlice',
    initialState : state,
    reducers: {
      addUser: (state, action) => {
        state.users = [...state.users, action.payload];
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
  