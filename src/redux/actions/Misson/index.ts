import { createAsyncThunk } from "@reduxjs/toolkit";
import httpRequest from "../../../httpRequest";
import { APIS } from "../../../configs/apis.config";
import { saveMission, saveMissionDetail } from "../../slices/Mission";

export const getMissionContent = createAsyncThunk(
    'mission/getMissionContent',
    async(data: any, thunky) => {
        try {
            const res = await httpRequest.get(APIS.MISSION);
            if(res.data.result) {
                thunky.dispatch(saveMission(res.data.data));
                return {
                    action: true,
                    data: res.data.data
                }
            } else {
                thunky.dispatch(saveMission([]));
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

export const getMissionContentDetail = createAsyncThunk(
    'mission/getMissionContentDetail',
    async(data: number | string, thunky) => {
        try {
            const res = await httpRequest.get(`${APIS.MISSION_DETAIL}/${data}`);
            if(res.data.result) {
                thunky.dispatch(saveMissionDetail(res.data.data));
                return {
                    action: true,
                    data: res.data.data
                }
            } else {
                thunky.dispatch(saveMissionDetail([]));
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