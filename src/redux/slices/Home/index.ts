import { createSlice } from "@reduxjs/toolkit";
import { Home } from "../../../props";

export interface HomeState {
    home: Home[]
}


const initialState: HomeState = {
    home: []
}

export const HomeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        saveHome: (state, action) => {
            state.home = action.payload;
        }
    }
})

export const { saveHome } = HomeSlice.actions;
export default HomeSlice.reducer;