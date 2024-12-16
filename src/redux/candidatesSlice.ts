import { dummyCandidates } from "@/dummyData";
import { createSlice } from "@reduxjs/toolkit";

export const candidatesSlice = createSlice({
    name: "candidates",
    initialState: dummyCandidates,
    reducers: {},
});

export default candidatesSlice.reducer;
export const candidatesActions = candidatesSlice.actions;
