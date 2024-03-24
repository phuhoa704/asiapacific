import { createAsyncThunk } from "@reduxjs/toolkit";
import httpRequest from "../../../httpRequest";
import { APIS } from "../../../configs/apis.config";
import { saveRegion, saveRegions } from "../../slices/Region";

export const getRegionContent = createAsyncThunk(
    'region/getRegionContent',
    async(data: any, thunky) => {
        try {
            const res = await httpRequest.get(APIS.REGION);
            if(res.data.result) {
                thunky.dispatch(saveRegion(res.data.data));
                return {
                    action: true
                }
            } else {
                thunky.dispatch(saveRegion([]));
                return {
                    action: false
                }
            }
        }catch(err){
            console.log(err)
        }
    }
)

export const getRegions = createAsyncThunk(
    'region/getRegions',
    async(data: any, thunky) => {
        try {
            const res = await httpRequest.get(APIS.REGIONS);
            if(res.data.result) {
                thunky.dispatch(saveRegions(res.data.data));
                return {
                    action: true
                }
            } else {
                thunky.dispatch(saveRegions([]));
                return {
                    action: false
                }
            }
        }catch(err){
            console.log(err);
        }
    }
)