import { createAsyncThunk } from "@reduxjs/toolkit";
import httpRequest from "../../../httpRequest";
import { APIS } from "../../../configs/apis.config";
import { saveTeam } from "../../slices/Team";

export const getTeamContent = createAsyncThunk(
    'team/getTeamContent',
    async(data: any, thunky) => {
        try {
            const res = await httpRequest.get(APIS.TEAM_MEMBER);
            if(res.data.result) {
                thunky.dispatch(saveTeam(res.data.data));
                return {
                    action: true
                }
            } else {
                thunky.dispatch(saveTeam([]));
                return {
                    action: false
                }
            }
        }catch(err){
            console.log(err)
        }
    }
)