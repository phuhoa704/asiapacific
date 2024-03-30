import { useEffect, useRef, useState } from "react";
import HeaderBreadscrumb from "../../components/HeaderBreadcrumb";
import CustomHook from "../../utils/CustomHook";
import ServiceCard from "../../components/ServiceCard";
import ServiceForm from "../../components/ServiceForm";
import RequestBanner from "../../components/RequestBanner";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { getServiceContent } from "../../redux/actions/Service";
import { Home } from "../../props";
import { SERVICE_CONSTANTS } from "../../configs/constants.config";
import { translate } from "../../helpers/translator";

const Services = () => {
    const dispatch = useAppDispatch();
    const { services, setting } = useAppSelector(state => state.service);
    const { language, listLangs } = useAppSelector(state => state.lang);
    const divs = useRef<any[]>([]);
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
    CustomHook(divs);
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
                slidesPerView: 1,
            },
        },
    };
    useEffect(() => {
        dispatch(getServiceContent([]))
    }, [])
    useEffect(() => {
        if (setting.length > 0) {
            //breadscrum
            const findBread = setting.find(h => h.key === SERVICE_CONSTANTS.BREADSCRUM);
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
            const findTag = setting.find(h => h.key === SERVICE_CONSTANTS.TAG);
            setTag(findTag ? findTag : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //tag
            const findTitle = setting.find(h => h.key === SERVICE_CONSTANTS.TITLE);
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
    }, [setting])
    return (
        <div>
            <HeaderBreadscrumb page={translate(language, JSON.parse(breadscrum.value), listLangs)} tab={translate(language, JSON.parse(breadscrum.value), listLangs)} />
            <div className="w-full">
                <div className="w-8/12 m-auto py-12">
                    <div className="flex flex-col items-center m-auto">
                        <div className="bg-[#223cd1] text-white w-fit rounded uppercase px-2.5 py-1.5 mb-4 text-xs">
                            {translate(language, JSON.parse(tag.value), listLangs)}
                        </div>
                        <div className="text-[#ae73db] font-medium text-3xl text-center mb-4">{translate(language, JSON.parse(title.value), listLangs)}</div>
                    </div>
                    <Swiper {...swiperParams} navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">
                        {services.filter(s => s.parent_id === 0).map(s => (
                            <SwiperSlide key={s.id}>
                                <div className="w-10/12 m-auto">
                                    <ServiceCard item={s} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="w-full bg-[#fcf7f7]">
                <div className="w-11/12 lg:w-7/12 m-auto py-12">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="col-span-1" ref={(el: any) => el && divs.current.push(el)}>
                            <ServiceForm />
                        </div>
                        <div className="col-span-1 p-6">
                            <div className="bg-[#223cd1] text-white w-fit rounded uppercase px-2.5 py-1.5 mb-4 text-xs" ref={(el: any) => el && divs.current.push(el)}>
                                make appointment
                            </div>
                            <div className="text-[#ae73db] font-medium text-3xl capitalized" ref={(el: any) => el && divs.current.push(el)}>Get Appointment Meet For Consultation</div>
                            <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                                Asia Pacific offers full range of consultancy & training methods for data analysis, business analysis and strategic ways for business. It is an opportunity for new ventures.
                            </p>
                            <div className="text-xs mt-6 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                                Or You May <span className="text-[#ae73db]">Call Us</span> For Appointment
                            </div>
                            <a href={`tel:+85223411444`} className="mt-4 flex gap-4 text-[#ae73db] cursor-pointer" ref={(el: any) => el && divs.current.push(el)}>
                                <div className="h-5 w-5 flex items-center justify-center text-white rounded-full bg-[#ae73db] p-3 text-xs">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <span>(+85) 22341 1444</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mb-4">
                <RequestBanner />
            </div>
        </div>
    );
}

export default Services;