import { createSlice } from "@reduxjs/toolkit";
import { Region } from "../../../props";


export interface RegionState {
    region: any[],
    regions: Region[]
}


const initialState: RegionState = {
    region: [],
    regions: []
}

export const RegionSlice = createSlice({
    name: 'region',
    initialState,
    reducers: {
        saveRegion: (state, action) => {
            state.region = action.payload;
        },
        saveRegions: (state, action) => {
            state.regions = action.payload;
        }
    }
})

export const { saveRegion, saveRegions } = RegionSlice.actions;
export default RegionSlice.reducer;