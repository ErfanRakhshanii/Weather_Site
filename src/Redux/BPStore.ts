import { configureStore } from "@reduxjs/toolkit";
import bPReducers from "./BankPortalReducers/bPReducers";

 export const store = configureStore({
    reducer: {
        bPReducers: bPReducers
    }
 })

 export type RootState = ReturnType<typeof store.getState>;
export type BPDispatch = typeof store.dispatch;

export default store