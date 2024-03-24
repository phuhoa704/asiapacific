import { createSlice } from "@reduxjs/toolkit";
import { Common } from "../../../props";


export interface MissionState {
    mission: Common[]
    missionDetail: Common
}


const initialState: MissionState = {
    mission: [],
    missionDetail: {
        description: '',
        id: 0,
        name: '',
        slug: ''
    }
}

export const MissionSlice = createSlice({
    name: 'mission',
    initialState,
    reducers: {
        saveMission: (state, action) => {
            state.mission = action.payload;
        },
        saveMissionDetail: (state, action) => {
            state.missionDetail = action.payload;
        }
    }
})

export const { saveMission, saveMissionDetail } = MissionSlice.actions;
export default MissionSlice.reducer;