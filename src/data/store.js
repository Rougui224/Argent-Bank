import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./dataSlice";

export const store = configureStore({ reducer: { login: dataSlice.reducer } });
