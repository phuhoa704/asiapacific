import { useEffect, useRef, useState } from "react";
import CustomHook from "../../utils/CustomHook";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { Home } from "../../props";
import { HOME_CONSTANTS } from "../../configs/constants.config";
import { translate, translateDescr, translateName } from "../../helpers/translator";
import { ASSETS_API } from "../../configs/apis.config";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { saveMissionDetail } from "../../redux/slices/Mission";
import { useNavigate } from "react-router-dom";

const Mission = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { home } = useAppSelector(state => state.home);
    const { language, listLangs } = useAppSelector(state => state.lang);
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
    const [description, setDescription] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const divs = useRef<any[]>([]);
    const [hover, setHover] = useState<number>(1);
    const { mission } = useAppSelector(state => state.mission);
    CustomHook(divs);
    useEffect(() => {
        if (home.length > 0) {
            //tag
            const findTag = home.find(h => h.key === HOME_CONSTANTS.MISSION_TAG);
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
            const findTitle = home.find(h => h.key === HOME_CONSTANTS.MISSION_TAG);
            setTitle(findTitle ? findTitle : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //description
            const findDescription = home.find(h => h.key === HOME_CONSTANTS.MISSION_TAG);
            setDescription(findDescription ? findDescription : {
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
        slidesPerView: 3,
        loop: true,
        autoPlay: true,
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
    return (
        <section className="w-full p-2 md:py-6">
            <div className="w-11/12 m-auto">
                <div className="w-10/12 flex flex-col items-center m-auto lg:w-1/2">
                    <div className="bg-[#223cd1] text-white w-fit rounded uppercase px-2.5 py-1.5 mb-4 text-xs" ref={(el: any) => el && divs.current.push(el)}>
                        {translate(language, JSON.parse(tag.value), listLangs)}
                    </div>
                    <div className="text-[#ae73db] font-medium text-3xl capitalize" ref={(el: any) => el && divs.current.push(el)}>{translate(language, JSON.parse(title.value), listLangs)}</div>
                    <p className="text-[11px] text-[#1d1e1f] mt-4 mb-4 text-center" ref={(el: any) => el && divs.current.push(el)}>
                        {translate(language, JSON.parse(description.value), listLangs)}
                    </p>
                </div>
            </div>
            <Swiper {...swiperParams} navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">
                {mission.map(m => (
                    <SwiperSlide key={m.id}>
                        <div className={`shadow-2xl rounded h-[300px] bg-cover bg-center w-8/12 m-auto`} onMouseEnter={() => setHover(m.id)} onMouseLeave={() => setHover(0)} ref={(el: any) => el && divs.current.push(el)}
                            style={{ backgroundImage: `url(${ASSETS_API}${m.image})` }}
                            onClick={() => {
                                navigate(`mission/${m.slug}`)
                                dispatch(saveMissionDetail(m))
                            }}
                        >
                            {(hover === m.id) && (<div className="w-full h-full p-6 flex flex-col justify-between rounded" style={{ backgroundColor: 'rgba(0,0,0,.4)' }}>
                                <div className='rounded-full bg-white w-[50px] h-[50px] p-4 flex items-center justify-center text-[#223cd1] text-lg'>
                                    <i className="fa-solid fa-chart-column"></i>
                                </div>
                                <div>
                                    <div className='text-xl text-white font-semibold mb-2'>{translateName(language, JSON.parse(m.name), listLangs)}</div>
                                    <div className="tax-service-desc text-xs text-white mb-2">{translateDescr(language, JSON.parse(m.description), listLangs)}</div>
                                    <button className='bg-white text-[#cf2757] rounded p-2.5 w-32'>View Details</button>
                                </div>
                            </div>)}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Mission;