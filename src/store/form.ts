import { createSlice } from "@reduxjs/toolkit";

const initialFormState = {
  name: "",
  email: "",
  position: "",
  phone: "",
  resume: "",
};

const formSlice = createSlice({
  name: "form",
  initialState: initialFormState,
  reducers: {
    showUserInfo(state, action) {
      console.log(action.payload);
    },
  },
});

export const formActions = formSlice.actions;

export default formSlice.reducer;
