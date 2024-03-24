import { createAsyncThunk } from "@reduxjs/toolkit";
import httpRequest from "../../../httpRequest";
import { APIS } from "../../../configs/apis.config";
import { saveSocialMedia } from "../../slices/SocialMedia";

export const getSocialMedia = createAsyncThunk(
    'socialMedia/getSocialMedia',
    async(data: any, thunky) => {
        try {
            const res = await httpRequest.get(APIS.SOCIAL_MEDIA);
            if(res.data.result) {
                thunky.dispatch(saveSocialMedia(res.data.data));
                return {
                    action: true
                }
            } else {
                thunky.dispatch(saveSocialMedia([]));
                return {
                    action: false
                }
            }
        }catch(err) {
            console.log(err)
        }
    }
)