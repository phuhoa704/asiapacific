import { createAsyncThunk } from "@reduxjs/toolkit";
import httpRequest from "../../../httpRequest";
import { APIS } from "../../../configs/apis.config";
import { saveHome } from "../../slices/Home";

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