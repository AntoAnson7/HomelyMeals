// redux/menuSlice.js
import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {
        setMenuItems(state, action) {
            state.items = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
    },
});

export const { setMenuItems, setLoading, setError } = menuSlice.actions;

export default menuSlice.reducer;
