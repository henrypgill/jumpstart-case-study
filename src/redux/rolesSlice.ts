import { dummyRoles } from "@/dummyData";
import { RoleStage } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const rolesSlice = createSlice({
    name: "roles",
    initialState: dummyRoles,
    reducers: {
        createRoleStage: (
            state,
            {
                payload: { roleId, title, description },
            }: PayloadAction<{
                roleId: string;
                title: string;
                description: string;
            }>
        ) => {
            const roleIndex = state.findIndex((r) => r.id === roleId);
            const newStage: RoleStage = {
                id: String(state[roleIndex].stages.length + 1),
                title,
                description,
            };
            // state[roleIndex].stages.splice(position, 0, newStage);
            state[roleIndex].stages.push(newStage);
            state[roleIndex].stages.sort((a, b) => Number(a) - Number(b));
        },
        deleteRoleStage: (
            state,
            {
                payload: { roleId, stageId },
            }: PayloadAction<{ roleId: string; stageId: string }>
        ) => {
            const roleIndex = state.findIndex((r) => r.id === roleId);
            const stageIndex = state[roleIndex].stages.findIndex(
                (s) => s.id === stageId
            );
            state[roleIndex].stages.splice(stageIndex, 1);
        },
        editRoleStage: (
            state,
            {
                payload: { roleId, stageId, title, description },
            }: PayloadAction<{
                roleId: string;
                stageId: string;
                title: string;
                description: string;
            }>
        ) => {
            const roleIndex = state.findIndex((r) => r.id === roleId);
            const stageIndex = state[roleIndex].stages.findIndex(
                (s) => s.id === stageId
            );
            state[roleIndex].stages[stageIndex].title = title;
            state[roleIndex].stages[stageIndex].description = description;
        },
        clearConnections: () => dummyRoles,
    },
});

export default rolesSlice.reducer;
export const rolesActions = rolesSlice.actions;
