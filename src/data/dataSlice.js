import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userToken:
    JSON.parse(sessionStorage.getItem("token")) ||
    JSON.parse(localStorage.getItem("token")) ||
    null,
  userProfil: null,
};
// Definir les actions asynchrones
export const dataSlice = createSlice({
  name: "login",
  initialState,

  reducers: {
    // connexion de l'utilisateur
    reduxUserLogIn: (state, action) => {
      state.userToken = action.payload;
    },
    // Deconnexion de l'utilisateur
    userLogOut: (state) => {
      state.userToken = null;
      state.userProfil = null;
    },
    // les informations de l'utilisateurs
    reduxUserInfo: (state, action) => {
      state.userProfil = action.payload;
      console.log(state.userProfil);
    },
    //Action pour stoker le userName de l'utilisateur
    infoUserName: (state, action) => {
      state.userProfil.userName = action.payload;
    },
  },
});
export const { reduxUserLogIn, userLogOut, reduxUserInfo, infoUserName } =
  dataSlice.actions;
