import { createSlice } from "@reduxjs/toolkit";
import { Common } from "../../../props";


export interface ServiceState {
    service: Common[]
    serviceDetail: Common
}


const initialState: ServiceState = {
    service: [],
    serviceDetail: {
        description: '',
        id: 0,
        name: '',
        slug: ''
    }
}

export const ServiceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        saveService: (state, action) => {
            state.service = action.payload;
        },
        saveServiceDetail: (state, action) => {
            state.serviceDetail = action.payload;
        }
    }
})

export const { saveService, saveServiceDetail } = ServiceSlice.actions;
export default ServiceSlice.reducer;