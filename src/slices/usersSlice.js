import { createSlice, nanoid } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [
    { id: 0, name: "select Author" },
    { id: 1, name: "Prathmesh" },
    { id: 2, name: "Darshan" },
    { id: 3, name: "Ganesh" },
  ],

  reducers: {},
});

export const selectAllUsers = (globalState) => globalState.users;

export default usersSlice.reducer;
