import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import candidatesReducer from "./candidatesSlice";
import rolesReducer from "./rolesSlice";
import applicationsReducer from "./applicationsSlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
    reducer: {
        candidates: candidatesReducer,
        roles: rolesReducer,
        applications: applicationsReducer,
    },
});

//export the store's dispatch and selector functions for ease of use
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
