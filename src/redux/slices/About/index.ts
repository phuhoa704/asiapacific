import { createSlice } from "@reduxjs/toolkit";
import { AboutStep } from "../../../props";


export interface AboutState {
    aboutSteps: AboutStep[],
    about: any[]
}


const initialState: AboutState = {
    aboutSteps: [],
    about: []
}

export const AboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {
        saveAboutSteps: (state, action) => {
            state.aboutSteps = action.payload;
        },
        saveAbout: (state, action) => {
            state.about = action.payload;
        }
    }
})

export const { saveAboutSteps, saveAbout } = AboutSlice.actions;
export default AboutSlice.reducer;