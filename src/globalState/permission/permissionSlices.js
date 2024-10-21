import { createSlice } from '@reduxjs/toolkit';

const permissionSlice = createSlice({
    name: 'permissions',
    initialState: {
        selectedPermissions: {},
        loading: false,
        error: null,
    },
    reducers: {
        togglePermission(state, action) {
            const { controllerName, actionId } = action.payload;

            if (!state.selectedPermissions[controllerName]) {
                state.selectedPermissions[controllerName] = { actions: [actionId] };
            } else {
                const actions = state.selectedPermissions[controllerName].actions;
                const index = actions.indexOf(actionId);

                if (index === -1) {
                    actions.push(actionId);
                } else {
                    actions.splice(index, 1);
                }
            }
        },
        toggleAllPermissionsForController(state, action) {
            const { controllerName, allActionIds } = action.payload;
            const areAllSelected = allActionIds.every(id => state.selectedPermissions[controllerName]?.actions.includes(id));

            if (areAllSelected) {
                state.selectedPermissions[controllerName].actions = [];
            } else {
                state.selectedPermissions[controllerName] = { actions: allActionIds };
            }
        },
    },
});

export const {
    togglePermission,
    toggleAllPermissionsForController
} = permissionSlice.actions;

export default permissionSlice.reducer;
