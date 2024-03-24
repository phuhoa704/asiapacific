import { useEffect } from "react";
import HeaderBreadscrumb from "../../components/HeaderBreadcrumb";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { translateContent, translateDescr, translateName } from "../../helpers/translator";
import { useParams } from "react-router-dom";
import { getNewsDetail } from "../../redux/actions/News";

const NewsDetail = () => {
    const dispatch = useAppDispatch()
    const { slug } = useParams();
    const { newsDetail, newsList } = useAppSelector(state => state.news);
    const { language, listLangs } = useAppSelector(state => state.lang);
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    useEffect(() => {
        if(newsList.length > 0) {
            if(slug) {
                const finder = newsList.find(n => n.slug === slug);
                if(finder) {
                    dispatch(getNewsDetail(finder.id))
                }
            }
        }
    },[slug, newsList])
    return (
        <div>
            <HeaderBreadscrumb page="news" tab={newsDetail.name ? translateName(language, JSON.parse(newsDetail.name), listLangs) : ''} />
            <div className="w-full">
                <div className="w-8/12 m-auto py-12">
                    <p className="text-[#ae73db] text-3xl font-semibold mb-4">{newsDetail.name ? translateName(language, JSON.parse(newsDetail.name), listLangs) : ''}</p>
                    <p className="text-[#807d7d] text-xs mt-2 mb-2">{newsDetail.description ? translateDescr(language, JSON.parse(newsDetail.description), listLangs) : ''}</p>
                    <div className="bg-[#223cd1] text-white w-fit rounded px-2.5 py-1.5 mb-4 text-xs">
                        <i className="fa-regular fa-clock"></i>
                        &nbsp;{moment(new Date(newsDetail.created_at)).format('DD-MM-YYYY')}
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: newsDetail.content ? translateContent(language, JSON.parse(newsDetail.content), listLangs) : ''}}></div>
                </div>
            </div>
        </div>
    );
}

export default NewsDetail;