import { createAsyncThunk } from "@reduxjs/toolkit";
import httpRequest from "../../../httpRequest";
import { APIS } from "../../../configs/apis.config";
import { saveService, saveServiceDetail } from "../../slices/Service";
import { SubmitAppointmentDto } from "../../dto";
import { Toast } from "../../../helpers/toast";

export const getServiceContent = createAsyncThunk(
    'service/getServiceContent',
    async(data: any, thunky) => {
        try {
            const res = await httpRequest.get(APIS.SERVICE);
            if(res.data.result) {
                thunky.dispatch(saveService(res.data.data));
                return {
                    action: true
                }
            } else {
                thunky.dispatch(saveService([]));
                return {
                    action: true
                }
            }
        }catch(err) {
            console.log(err);
        }
    }
)

export const getServiceContentDetail = createAsyncThunk(
    'service/getServiceContent',
    async(data: number | string, thunky) => {
        try {
            const res = await httpRequest.get(`${APIS.SERVICE}/${data}`);
            if(res.data.result) {
                thunky.dispatch(saveServiceDetail(res.data.data));
                return {
                    action: true
                }
            } else {
                thunky.dispatch(saveServiceDetail({}));
                return {
                    action: true
                }
            }
        }catch(err) {
            console.log(err);
        }
    }
)

export const submitAppointment = createAsyncThunk(
    'service/submitAppointment',
    async(data: SubmitAppointmentDto, thunky) => {
        try {
            const res = await httpRequest.post(APIS.SUBMIT_SERVICE_FORM, data);
            if(res.data.result) {
                Toast.fire({
                    icon: "success",
                    title: res.data.message
                });
                return {
                    action: true
                }
            } else {
                Toast.fire({
                    icon: "error",
                    title: res.data.message
                });
                return {
                    action: false
                }
            }
        }catch(err){
            console.log(err)
        }
    }
)