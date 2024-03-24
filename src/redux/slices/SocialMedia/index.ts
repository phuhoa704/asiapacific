import { createSlice } from "@reduxjs/toolkit";
import { SocialMedia } from "../../../props";


export interface SocialMediaState {
    socialMedia: SocialMedia[]
}


const initialState: SocialMediaState = {
    socialMedia: []
}

export const SocialMediaSlice = createSlice({
    name: 'socialMedia',
    initialState,
    reducers: {
        saveSocialMedia: (state, action) => {
            state.socialMedia = action.payload;
        }
    }
})

export const { saveSocialMedia } = SocialMediaSlice.actions;
export default SocialMediaSlice.reducer;