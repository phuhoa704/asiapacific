import { useEffect, useRef } from "react";
import CustomHook from "../../utils/CustomHook";
import HeaderBreadscrumb from "../../components/HeaderBreadcrumb";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { translateContent, translateDescr, translateName } from "../../helpers/translator";
import { useNavigate, useParams } from "react-router-dom";
import { saveServiceById, saveServiceChildDetail } from "../../redux/slices/Service";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { ROUTES } from "../../configs/routes.config";

const ServiceDetail = () => {
    const navigate = useNavigate();
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
    const swiperParams = {
        navigation: true,
        slidesPerView: 3,
        loop: true,
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 2,
            },
        },
    };
    return (
        <div>
            <HeaderBreadscrumb page="services" tab={servicesById.name ? translateName(language, JSON.parse(servicesById.name), listLangs) : ''} />
            <div className="w-full">
                <div className="w-11/12 lg:w-8/12 m-auto py-12">
                    <div className="bg-[#223cd1] text-white w-fit rounded uppercase px-2.5 py-1.5 mb-4 text-xs">
                        {servicesById.name ? translateName(language, JSON.parse(servicesById.name), listLangs) : ''}
                    </div>
                    <div className="text-[#ae73db] font-medium text-3xl">{servicesById.name ? translateName(language, JSON.parse(servicesById.name), listLangs) : ''}</div>
                    <p className="text-xs mt-4 text-[#807d7d] mb-4" ref={(el: any) => el && divs.current.push(el)}>
                        {servicesById.description ? translateDescr(language, JSON.parse(servicesById.description), listLangs) : ''}
                    </p>
                    <Swiper {...swiperParams} navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">
                        {services.filter(s => s.parent_id === servicesById.id).map(s => (
                            <SwiperSlide key={s.id}>
                                <div className="group text-[#223cd1] w-8/12 m-auto" ref={(el: any) => el && divs.current.push(el)}>
                                    <div className="service-icon text-2xl w-10 h-10 group-hover:text-[#cf2757]">
                                        <i className="fa-solid fa-list-check"></i>
                                    </div>
                                    <div className="text-sm font-medium group-hover:text-[#cf2757] cursor-pointer" onClick={() => {
                                        dispatch(saveServiceChildDetail(s));
                                        navigate(`${ROUTES.SERVICES}/${servicesById.slug}/${s.slug}`)
                                    }}>{translateName(language, JSON.parse(s.name), listLangs)}</div>
                                    <p className="tax-service-desc text-[10px] text-[#1d1e1f] opacity-100 transition-all group-hover:opacity-100 cursor-default lg:opacity-0">{translateDescr(language, JSON.parse(s.description), listLangs)}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="unstyle mt-4" ref={(el: any) => el && divs.current.push(el)} dangerouslySetInnerHTML={{ __html: servicesById.content ? translateContent(language, JSON.parse(servicesById.content), listLangs) : '' }}></div>
                </div>
            </div>
        </div>
    );
}

export default ServiceDetail;