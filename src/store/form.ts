import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialFormState } from "../type/interface";

const initialFormState: InitialFormState = {
  userInfo: {
    name: "",
    email: "",
    position: "",
    phone: 0,
    resume: {
      name: "",
      format: "",
    },
  },
  auth: false,
};

const formSlice = createSlice({
  name: "form",
  initialState: initialFormState,
  reducers: {
    showUserInfo(state, action: PayloadAction<InitialFormState>) {
      state.userInfo = action.payload.userInfo;
      state.auth = action.payload.auth;
    },
  },
});

export const formActions = formSlice.actions;

export default formSlice.reducer;
