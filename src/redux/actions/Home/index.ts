import { createAsyncThunk } from "@reduxjs/toolkit";
import httpRequest from "../../../httpRequest";
import { APIS } from "../../../configs/apis.config";
import { saveFooter, saveHeader, saveHome, saveLogo } from "../../slices/Home";

export const getHomeContent = createAsyncThunk(
    'home/getHomeContent',
    async(data: any, thunky) => {
        try {
            const res = await httpRequest.get(APIS.HOME);
            if(res.data.result) {
                thunky.dispatch(saveHome(res.data.data));
                return {
                    action: true,
                    data: res.data.data
                }
            } else {
                thunky.dispatch(saveHome([]));
                return {
                    action: true,
                    data: []
                }
            }
        }catch(err){
            console.log(err);
        }
    }
)

export const getHeaderContent = createAsyncThunk(
    'home/getHeaderContent',
    async(data: any, thunky) => {
        try {
            const res = await httpRequest.get(APIS.HEADER);
            if(res.data.result) {
                thunky.dispatch(saveHeader(res.data.data));
                return {
                    action: true,
                    data: res.data.data
                }
            } else {
                thunky.dispatch(saveHeader([]));
                return {
                    action: true,
                    data: []
                }
            }
        }catch(err){
            console.log(err);
        }
    }
)

export const getFooterContent = createAsyncThunk(
    'home/getFooterContent',
    async(data: any, thunky) => {
        try {
            const res = await httpRequest.get(APIS.FOOTER);
            if(res.data.result) {
                thunky.dispatch(saveFooter(res.data.data));
                return {
                    action: true,
                    data: res.data.data
                }
            } else {
                thunky.dispatch(saveFooter([]));
                return {
                    action: true,
                    data: []
                }
            }
        }catch(err){
            console.log(err);
        }
    }
)

export const getLogoContent = createAsyncThunk(
    'home/getLogoContent',
    async(data: any, thunky) => {
        try {
            const res = await httpRequest.get(APIS.LOGO);
            if(res.data.result) {
                thunky.dispatch(saveLogo(res.data.data))
                return {
                    action: true
                }
            }
        }catch(err){
            console.log(err)
        }
    }
)