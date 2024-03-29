import { useEffect, useRef, useState } from "react";
import CustomHook from "../../utils/CustomHook";
import { useAppSelector } from "../../redux/hook";
import { Home } from "../../props";
import { HOME_CONSTANTS } from "../../configs/constants.config";
import { translate, translateDescr, translateName } from "../../helpers/translator";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

const OurServices = () => {
    const { home } = useAppSelector(state => state.home);
    const { language, listLangs } = useAppSelector(state => state.lang);
    const { services } = useAppSelector(state => state.service);
    const [tag, setTag] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [desc, setDesc] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const divs = useRef<any[]>([]);
    CustomHook(divs);
    useEffect(() => {
        if (home.length > 0) {
            //tag
            const findTag = home.find(h => h.key === HOME_CONSTANTS.OUR_SERVICES_TAG);
            setTag(findTag ? findTag : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //description
            const findDesc = home.find(h => h.key === HOME_CONSTANTS.OUR_SERVICES_DESCRIPTION);
            setDesc(findDesc ? findDesc : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
        }
    }, [home])
    const swiperParams = {
        navigation: true,
        slidesPerView: 6,
        loop: true,
        breakpoints: {
            1200: {
                slidesPerView: 6,
            },
            768: {
                slidesPerView: 3,
            },
            320: {
                slidesPerView: 2,
            },
        },
    };
    return (
        <section className="w-full p-6">
            <div className="w-11/12 m-auto">
                <div className="w-full flex flex-col items-center m-auto md:w-1/2">
                    <div className="bg-[#223cd1] text-white w-fit rounded uppercase px-2.5 py-1.5 mb-4 text-xs" ref={(el: any) => el && divs.current.push(el)}>
                        {translate(language, JSON.parse(tag.value), listLangs)}
                    </div>
                    <div className="text-[#ae73db] font-medium text-3xl capitalize" ref={(el: any) => el && divs.current.push(el)}>{translate(language, JSON.parse(tag.value), listLangs)}</div>
                    <p className="text-[11px] text-[#1d1e1f] mt-4 mb-4 text-center" ref={(el: any) => el && divs.current.push(el)}>{translate(language, JSON.parse(desc.value), listLangs)}</p>
                </div>
                <Swiper {...swiperParams} navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">
                    {services.filter(s => s.parent_id === 0).map(s => (
                        <SwiperSlide key={s.id}>
                            <div className="group text-[#223cd1] w-11/12 m-auto" ref={(el: any) => el && divs.current.push(el)}>
                                <div className="service-icon text-2xl w-10 h-10 group-hover:text-[#cf2757]">
                                    <i className="fa-solid fa-list-check"></i>
                                </div>
                                <div className="text-sm font-medium group-hover:text-[#cf2757] cursor-default">{translateName(language, JSON.parse(s.name), listLangs)}</div>
                                <p className="tax-service-desc text-[10px] text-[#1d1e1f] opacity-0 transition-all group-hover:opacity-100 cursor-default">{translateDescr(language, JSON.parse(s.description), listLangs)}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default OurServices;