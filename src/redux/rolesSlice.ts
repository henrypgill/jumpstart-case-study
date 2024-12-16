import { dummyRoles } from "@/dummyData";
import { createSlice } from "@reduxjs/toolkit";


export const rolesSlice = createSlice({
    name: "applications",
    initialState: dummyRoles,
    reducers: {
        // addImage: (state, { payload }: PayloadAction<LabelingDataItem>) => {
        //     return [...state, payload];
        // },
        clearConnections: () => dummyRoles,
    },
});

export default rolesSlice.reducer;
export const rolesActions = rolesSlice.actions;
