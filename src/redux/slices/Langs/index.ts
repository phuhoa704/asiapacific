import { createSlice } from "@reduxjs/toolkit";
import { Language } from "../../../props";

export interface LangState {
    language: string
    listLangs: Language[]
    currentLang: Language
}


const initialState: LangState = {
    language: 'en',
    listLangs: [],
    currentLang: {
        default: 1,
        image: '',
        key: '',
        lang: '',
        name: '',
        descr_key: '',
        name_key: '',
        content_key: '',
        title_key: ''
    }
}

export const LangSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        setLang: (state, action) => {
            localStorage.setItem('LANG', action.payload);
            state.language = action.payload;
        },
        setListLangs: (state, action) => {
            state.listLangs = action.payload;
        },
        setCurrentLang: (state, action) => {
            state.currentLang = action.payload;
        }
    }
})

export const { setLang, setListLangs, setCurrentLang } = LangSlice.actions;
export const getLang = (state: any) => state.lang.language;
export default LangSlice.reducer;
