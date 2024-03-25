import { useEffect, useRef } from "react";
import CustomHook from "../../utils/CustomHook";
import HeaderBreadscrumb from "../../components/HeaderBreadcrumb";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { translateContent, translateDescr, translateName } from "../../helpers/translator";
import { useParams } from "react-router-dom";
import { saveServiceById } from "../../redux/slices/Service";

const ServiceDetail = () => {
    const dispatch = useAppDispatch();
    const { slug } = useParams();
    const { servicesById, services } = useAppSelector(state => state.service);
    const { language, listLangs } = useAppSelector(state => state.lang);
    const divs = useRef<any[]>([]);
    CustomHook(divs);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    useEffect(() => {
        if (services.length > 0) {
            if (slug) {
                let finder = services.find(s => s.slug === slug);
                if (finder) {
                    dispatch(saveServiceById(finder))
                }
            }
        }
    }, [services, slug])
    return (
        <div>
            <HeaderBreadscrumb page="services" tab={servicesById.name ? translateName(language, JSON.parse(servicesById.name), listLangs) : ''} />
            <div className="w-full">
                <div className="w-11/12 lg:w-8/12 m-auto py-12">
                    <div className="bg-[#223cd1] text-white w-fit rounded uppercase px-2.5 py-1.5 mb-4 text-xs" ref={(el: any) => el && divs.current.push(el)}>
                        {servicesById.name ? translateName(language, JSON.parse(servicesById.name), listLangs) : ''}
                    </div>
                    <div className="text-[#ae73db] font-medium text-3xl" ref={(el: any) => el && divs.current.push(el)}>{servicesById.name ? translateName(language, JSON.parse(servicesById.name), listLangs) : ''}</div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        {servicesById.description ? translateDescr(language, JSON.parse(servicesById.description), listLangs) : ''}
                    </p>
                    <div className="mt-4" dangerouslySetInnerHTML={{ __html: servicesById.content ? translateContent(language, JSON.parse(servicesById.content), listLangs) : '' }}></div>
                </div>
            </div>
        </div>
    );
}

export default ServiceDetail;