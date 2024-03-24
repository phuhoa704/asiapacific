import { createSlice } from "@reduxjs/toolkit";
import { Common, Services } from "../../../props";


export interface ServiceState {
    service: Common[]
    services: Services[]
    serviceDetail: Common
    servicesById: Services
}


const initialState: ServiceState = {
    service: [],
    services: [],
    serviceDetail: {
        description: '',
        id: 0,
        name: '',
        slug: ''
    },
    servicesById: {
        content: '',
        created_at: '',
        deleted_at: '',
        description: '',
        id: 0,
        image: '',
        meta_desc: '',
        meta_keyword: '',
        meta_title: '',
        name: '',
        slug: '',
        updated_at: '',
        user_id: 0,
        user_update: ''
    }
}

export const ServiceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        saveService: (state, action) => {
            state.service = action.payload;
        },
        saveServices: (state, action) => {
            state.services = action.payload;
        },
        saveServiceDetail: (state, action) => {
            state.serviceDetail = action.payload;
        },
        saveServiceById: (state, action) => {
            state.servicesById = action.payload;
        }
    }
})

export const { saveService, saveServiceDetail, saveServices, saveServiceById } = ServiceSlice.actions;
export default ServiceSlice.reducer;