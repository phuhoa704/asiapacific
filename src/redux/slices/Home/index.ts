import { createSlice } from "@reduxjs/toolkit";
import { Home, Logo } from "../../../props";

export interface HomeState {
    home: Home[]
    header: Home[]
    footer: Home[]
    logo: Logo
    menu: Home[]
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
    },
    menu: []
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
        },
        saveMenu: (state, action) => {
            state.menu = action.payload;
        }
    }
})

export const { saveHome, saveHeader, saveFooter, saveLogo, saveMenu } = HomeSlice.actions;
export default HomeSlice.reducer;