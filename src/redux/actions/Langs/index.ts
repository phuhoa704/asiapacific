import { createAsyncThunk } from "@reduxjs/toolkit";
import httpRequest from "../../../httpRequest";
import { APIS } from "../../../configs/apis.config";
import { setCurrentLang, setLang, setListLangs } from "../../slices/Langs";
import { Language } from "../../../props";
import { LANGUAGE } from "../../../configs/constants.config";

export const getListLang = createAsyncThunk(
    'lang/getListLang',
    async(data: any, thunky) => {
        try {
            const res = await httpRequest.get(APIS.LANG);
            if(res.data.result) {
                thunky.dispatch(setCurrentLang(res.data.data.find((t: any) => t.default === 1)));
                thunky.dispatch(setListLangs(res.data.data.map((t: any) => {
                    return {
                        lang: t.key,
                        key: `value_${t.key}`,
                        default: t.default,
                        image: t.image,
                        name: t.name,
                        name_key: `name_${t.key}`,
                        descr_key: `description_${t.key}`,
                        content_key: `content_${t.key}`,
                        title_key: `title_${t.key}`,
                    }
                })));
                return {
                    action: true,
                    data: res.data.data
                }
            } else {
                thunky.dispatch(setListLangs([]));
                return {
                    action: false,
                    data: []
                }
            }
        }catch(err){
            console.log(err);
        }
    }
)

export const changeLang = createAsyncThunk(
    'lang/changeLang',
    async(data: Language, thunky) => {
        try {
            window.localStorage.setItem(LANGUAGE, data.lang)
            thunky.dispatch(setLang(data.lang));
            thunky.dispatch(setCurrentLang(data));
        }catch(err){
            console.log(err);
        }
    }
)