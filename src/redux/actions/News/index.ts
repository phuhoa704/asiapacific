import { createAsyncThunk } from "@reduxjs/toolkit";
import httpRequest from "../../../httpRequest";
import { APIS } from "../../../configs/apis.config";
import { saveNews, saveNewsDetail, saveNewsList } from "../../slices/News";

export const getNewsContent = createAsyncThunk(
    'news/getNewsContent',
    async(data: any, thunky) => {
        try {
            const res = await httpRequest.get(APIS.NEWS);
            if(res.data.result) {
                thunky.dispatch(saveNews(res.data.data));
                return {
                    action: true
                }
            } else {
                thunky.dispatch(saveNews([]));
                return {
                    action: false
                }
            }
        }catch(err){
            console.log(err)
        }
    }
)

export const getNewsList = createAsyncThunk(
    'news/getNewsList',
    async(data: any, thunky) => {
        try {
            const res = await httpRequest.get(APIS.NEWS_LIST);
            if(res.data.result) {
                thunky.dispatch(saveNewsList(res.data.data));
                return {
                    action: true
                }
            } else {
                thunky.dispatch(saveNewsList([]));
                return {
                    action: false
                }
            }
        }catch(err){
            console.log(err);
        }
    }
)

export const getNewsDetail = createAsyncThunk(
    'news/getNewsDetail',
    async(data: number | string, thunky) => {
        try {
            const res = await httpRequest.get(`${APIS.NEWS_DETAIL}${data}`);
            if(res.data.result) {
                thunky.dispatch(saveNewsDetail(res.data.data));
                return {
                    action: true
                }
            } else {
                thunky.dispatch(saveNewsDetail({}));
                return {
                    action: false
                }
            }
        }catch(err){
            console.log(err)
        }
    }
)