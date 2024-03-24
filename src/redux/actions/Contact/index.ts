import { createAsyncThunk } from "@reduxjs/toolkit";
import httpRequest from "../../../httpRequest";
import { APIS } from "../../../configs/apis.config";
import { saveContact } from "../../slices/Contact";
import { SubmitContactDto } from "../../dto";
import { Toast } from "../../../helpers/toast";

export const getContactContent = createAsyncThunk(
    'contact/getContactContent',
    async(data: any, thunky) => {
        try {
            const res = await httpRequest.get(APIS.CONTACT);
            if(res.data.result) {
                thunky.dispatch(saveContact(res.data.data));
                return {
                    action: true
                }
            } else {
                thunky.dispatch(saveContact([]));
                return {
                    action: false
                }
            }
        }catch(err){
            console.log(err)
        }
    }
)

export const submitContact = createAsyncThunk(
    'contact/submitContact',
    async(data: SubmitContactDto, thunky) => {
        try {
            const res = await httpRequest.post(APIS.SUBMIT_CONTACT_FORM, data);
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
            console.log(err);
        }
    }
)