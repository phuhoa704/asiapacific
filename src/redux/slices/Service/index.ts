import { createSlice } from "@reduxjs/toolkit";
import { Common, Home, Services } from "../../../props";


export interface ServiceState {
    service: Common[]
    services: Services[]
    serviceDetail: Common
    servicesById: Services
    serviceChildDetail: Services,
    setting: Home[]
}


const initialState: ServiceState = {
    service: [],
    services: [],
    serviceDetail: {
        description: '',
        id: 0,
        name: '',
        slug: '',
        content: '',
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
        user_update: '',
        parent_id: 0
    },
    serviceChildDetail: {
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
        user_update: '',
        parent_id: 0
    },
    setting: []
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
        },
        saveServiceChildDetail: (state, action) => {
            state.serviceChildDetail = action.payload;
        },
        saveSetting: (state, action) => {
            state.setting = action.payload;
        }
    }
})

export const { saveService, saveServiceDetail, saveServices, saveServiceById, saveServiceChildDetail, saveSetting } = ServiceSlice.actions;
export default ServiceSlice.reducer;