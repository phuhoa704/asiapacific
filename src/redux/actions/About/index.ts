import { createAsyncThunk } from "@reduxjs/toolkit";
import httpRequest from "../../../httpRequest";
import { APIS } from "../../../configs/apis.config";
import { saveAbout, saveAboutSteps } from "../../slices/About";

export const getAboutSteps = createAsyncThunk(
    'about/getAboutSteps',
    async(data: any, thunky) => {
        try {
            const res = await httpRequest.get(APIS.ABOUT_STEPS);
            if(res.data.result) {
                thunky.dispatch(saveAboutSteps(res.data.data));
                return {
                    action: true
                }
            } else {
                thunky.dispatch(saveAboutSteps([]));
                return {
                    action: false
                }
            }
        }catch(err){
            console.log(err);
        }
    }
)

export const getAboutContent = createAsyncThunk(
    'about/getAboutContent',
    async(data: string[], thunky) => {
        try {
            const res = await httpRequest.post(APIS.GET_CONTENT, {key: data});
            if(res.data.result) {
                thunky.dispatch(saveAbout(res.data.data));
                return {
                    action: true
                }
            } else {
                thunky.dispatch(saveAbout([]));
                return {
                    action: false
                }
            }
        }catch(err){
            console.log(err);
        }
    }
)