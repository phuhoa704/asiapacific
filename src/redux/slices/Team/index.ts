import { createSlice } from "@reduxjs/toolkit";


export interface TeamState {
    team: any[]
}


const initialState: TeamState = {
    team: []
}

export const TeamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        saveTeam: (state, action) => {
            state.team = action.payload;
        }
    }
})

export const { saveTeam } = TeamSlice.actions;
export default TeamSlice.reducer;