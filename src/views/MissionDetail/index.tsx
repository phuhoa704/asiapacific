import { useEffect, useRef } from "react";
import HeaderBreadscrumb from "../../components/HeaderBreadcrumb";
import { translateContent, translateDescr, translateName } from "../../helpers/translator";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import CustomHook from "../../utils/CustomHook";
import { useParams } from "react-router-dom";
import { saveMissionDetail } from "../../redux/slices/Mission";

const MissionDetail = () => {
    const dispatch = useAppDispatch();
    const { slug } = useParams();
    const { missionDetail, mission } = useAppSelector(state => state.mission);
    const { language, listLangs } = useAppSelector(state => state.lang);
    const divs = useRef<any[]>([]);
    CustomHook(divs);
    useEffect(() => {
        if(mission.length > 0) {
            if(slug) {
                let finder = mission.find(m => m.slug === slug);
                if(finder) {
                    dispatch(saveMissionDetail(finder))
                }
            }
        }
    }, [slug, mission])
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div>
            <HeaderBreadscrumb page="mission" tab={translateName(language, JSON.parse(missionDetail.name), listLangs)} />
            <div className="w-full">
                <div className="w-11/12 lg:w-8/12 m-auto py-12">
                    <div className="bg-[#223cd1] text-white w-fit rounded uppercase px-2.5 py-1.5 mb-4 text-xs">
                        {missionDetail.name ? translateName(language, JSON.parse(missionDetail.name), listLangs) : ''}
                    </div>
                    <div className="text-[#ae73db] font-medium text-3xl">{missionDetail.name ? translateName(language, JSON.parse(missionDetail.name), listLangs) : ''}</div>
                    <p className="text-xs mt-4 text-[#807d7d] mb-4" ref={(el: any) => el && divs.current.push(el)}>
                        {missionDetail.description ? translateDescr(language, JSON.parse(missionDetail.description), listLangs) : ''}
                    </p>
                    <div className="unstyle mt-4" ref={(el: any) => el && divs.current.push(el)} dangerouslySetInnerHTML={{ __html: missionDetail.content ? translateContent(language, JSON.parse(missionDetail.content), listLangs) : '' }}></div>
                </div>
            </div>
        </div>
    );
}

export default MissionDetail;