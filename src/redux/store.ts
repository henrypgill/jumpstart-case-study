import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import applicationsReducer from "./applicationsSlice";
import candidatesReducer from "./candidatesSlice";
import rolesReducer from "./rolesSlice";

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const makeStore = () => {
    return configureStore({
        reducer: {
            candidates: candidatesReducer,
            roles: rolesReducer,
            applications: applicationsReducer,
        },
    });
};

//export the store's dispatch and selector functions for ease of use
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
