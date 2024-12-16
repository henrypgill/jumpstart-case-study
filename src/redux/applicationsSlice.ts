import { dummyApplications } from "@/dummyData";
import { createSlice } from "@reduxjs/toolkit";

export const applicationsSlice = createSlice({
    name: "applications",
    initialState: dummyApplications,
    reducers: {
        // addImage: (state, { payload }: PayloadAction<LabelingDataItem>) => {
        //     return [...state, payload];
        // },
        clearConnections: () => dummyApplications,
    },
});

export default applicationsSlice.reducer;
export const applicationsActions = applicationsSlice.actions;
