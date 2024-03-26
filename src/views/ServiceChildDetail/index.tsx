import HeaderBreadscrumb from "../../components/HeaderBreadcrumb";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { translateContent, translateDescr, translateName } from "../../helpers/translator";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { saveServiceChildDetail } from "../../redux/slices/Service";

const ServiceChildDetail = () => {
    const dispatch = useAppDispatch();
    const { child_slug } = useParams();
    const { serviceChildDetail, services } = useAppSelector(state => state.service);
    const { language, listLangs } = useAppSelector(state => state.lang);
    useEffect(() => {
        if(services) {
            if(child_slug) {
                let finder = services.find(s => s.slug === child_slug);
                if(finder) {
                    dispatch(saveServiceChildDetail(finder))
                }
            }
        }
    }, [services, child_slug])
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    return (
        <div>
            <HeaderBreadscrumb page="services" tab={serviceChildDetail.name ? translateName(language, JSON.parse(serviceChildDetail.name), listLangs) : ''} />
            <div className="w-full">
                <div className="w-11/12 lg:w-8/12 m-auto py-12">
                    <p className="text-[#ae73db] text-3xl font-semibold mb-4">{serviceChildDetail.name ? translateName(language, JSON.parse(serviceChildDetail.name), listLangs) : ''}</p>
                    <p className="text-[#807d7d] text-xs mt-2 mb-2">{serviceChildDetail.description ? translateDescr(language, JSON.parse(serviceChildDetail.description), listLangs) : ''}</p>
                    <div className="unstyle text-left" dangerouslySetInnerHTML={{ __html: serviceChildDetail.content ? translateContent(language, JSON.parse(serviceChildDetail.content), listLangs) : ''}}></div>
                </div>
            </div>
        </div>
    );
}

export default ServiceChildDetail;