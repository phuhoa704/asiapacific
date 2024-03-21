import { createAsyncThunk } from "@reduxjs/toolkit";
import httpRequest from "../../../httpRequest";
import { APIS } from "../../../configs/apis.config";
import { setCurrentLang, setLang, setListLangs } from "../../slices/Langs";
import { Language } from "../../../props";

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
                        name: t.name
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
            thunky.dispatch(setLang(data.lang));
            thunky.dispatch(setCurrentLang(data));
        }catch(err){
            console.log(err);
        }
    }
)