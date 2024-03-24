import { createSlice } from "@reduxjs/toolkit";


export interface ContactState {
    contact: any[]
}


const initialState: ContactState = {
    contact: []
}

export const ContactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        saveContact: (state, action) => {
            state.contact = action.payload;
        }
    }
})

export const { saveContact } = ContactSlice.actions;
export default ContactSlice.reducer;