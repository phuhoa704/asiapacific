import { createSlice } from "@reduxjs/toolkit";
import { News } from "../../../props";


export interface NewsState {
    news: any[]
    newsList: News[]
    newsDetail: News
}


const initialState: NewsState = {
    news: [],
    newsList: [],
    newsDetail: {
        banner: '',
        category_id: 1,
        content: '',
        created_at: '',
        deleted_at: '',
        description: '',
        id: 1,
        image: '',
        meta_desc: '',
        meta_keyword: '',
        meta_title: '',
        name: '',
        slug: '',
        updated_at: '',
        user_id: 0,
        user_update: 0
    }
}

export const NewsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        saveNews: (state, action) => {
            state.news = action.payload;
        },
        saveNewsList: (state, action) => {
            state.newsList = action.payload;
        },
        saveNewsDetail: (state, action) => {
            state.newsDetail = action.payload;
        }
    }
})

export const { saveNews, saveNewsList, saveNewsDetail } = NewsSlice.actions;
export default NewsSlice.reducer;