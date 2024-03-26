import HeaderBreadscrumb from "../../components/HeaderBreadcrumb";
import RequestBanner from "../../components/RequestBanner";
import NewsItem from "../../components/NewsItem";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getNewsContent, getNewsList } from "../../redux/actions/News";
import { translate } from "../../helpers/translator";
import { Home } from "../../props";
import { NEWS_CONSTANTS } from "../../configs/constants.config";

const NewsPage = () => {
    const { news } = useAppSelector(state => state.news);
    const { language, listLangs } = useAppSelector(state => state.lang);
    const [breadscrum, setBreadscrum] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [tag, setTag] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [title, setTitle] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getNewsList([]));
        dispatch(getNewsContent([]));
    },[])
    useEffect(() => {
        if(news.length > 0) {
            //breadscrum
            const findBread = news.find(h => h.key === NEWS_CONSTANTS.BREADSCRUM);
            setBreadscrum(findBread ? findBread : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //tag
            const findTag = news.find(h => h.key === NEWS_CONSTANTS.TAG);
            setTag(findTag ? findTag : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //title
            const findTitle = news.find(h => h.key === NEWS_CONSTANTS.TITLE);
            setTitle(findTitle ? findTitle : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
        }
    },[news])
    return (
        <div>
            <HeaderBreadscrumb page={translate(language, JSON.parse(breadscrum.value), listLangs)} tab={translate(language, JSON.parse(breadscrum.value), listLangs)}/>
            <div className="w-full">
                <div className="w-11/12 lg:w-9/12 m-auto py-12 flex flex-col items-center">
                    <div className="bg-[#223cd1] text-white w-fit rounded capitalize px-2.5 py-1.5 mb-4 text-xs">
                    {translate(language, JSON.parse(tag.value), listLangs)}
                    </div>
                    <p className="text-[#ae73db] text-3xl font-semibold mb-4">{translate(language, JSON.parse(title.value), listLangs)}</p>
                    <NewsItem />
                </div>
            </div>
            <div className="w-full mb-4">
                <RequestBanner />
            </div>
        </div>
    );
}

export default NewsPage;