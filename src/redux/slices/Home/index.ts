import { createSlice } from "@reduxjs/toolkit";
import { Home, Logo } from "../../../props";

export interface HomeState {
    home: Home[]
    header: Home[]
    footer: Home[]
    logo: Logo
}


const initialState: HomeState = {
    home: [],
    header: [],
    footer: [],
    logo: {
        created_at: '',
        id: 0,
        image_desc: '',
        key: '',
        updated_at: '',
        value: ''
    }
}

export const HomeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        saveHome: (state, action) => {
            state.home = action.payload;
        },
        saveHeader: (state, action) => {
            state.header = action.payload;
        },
        saveFooter: (state, action) => {
            state.footer = action.payload;
        },
        saveLogo: (state, action) => {
            state.logo = action.payload;
        }
    }
})

export const { saveHome, saveHeader, saveFooter, saveLogo } = HomeSlice.actions;
export default HomeSlice.reducer;