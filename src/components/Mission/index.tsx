import { useEffect, useRef, useState } from "react";
import CustomHook from "../../utils/CustomHook";
import { useAppSelector } from "../../redux/hook";
import { Home } from "../../props";
import { HOME_CONSTANTS } from "../../configs/constants.config";
import { translate } from "../../helpers/translator";
import { ASSETS_API } from "../../configs/apis.config";

const Mission = () => {
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
    const [firstImg, setFirstImg] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [firstTitle, setFirstTitle] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [secondImg, setSecondImg] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [secondTitle, setSecondTitle] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [thirdImg, setThirdImg] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [thirdTitle, setThirdTitle] = useState<Home>({
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
            //first image
            const findFirstImg = home.find(h => h.key === HOME_CONSTANTS.MISSION_FIRST_IMG);
            setFirstImg(findFirstImg ? findFirstImg : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //first title
            const findFirstTitle = home.find(h => h.key === HOME_CONSTANTS.MISSION_FIRST_TITLE);
            setFirstTitle(findFirstTitle ? findFirstTitle : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //second image
            const findSecondImg = home.find(h => h.key === HOME_CONSTANTS.MISSION_SECOND_IMG);
            setSecondImg(findSecondImg ? findSecondImg : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //second title
            const findSecondTitle = home.find(h => h.key === HOME_CONSTANTS.MISSION_SECOND_TITLE);
            setSecondTitle(findSecondTitle ? findSecondTitle : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //third image
            const findThirdImg = home.find(h => h.key === HOME_CONSTANTS.MISSION_THIRD_IMG);
            setThirdImg(findThirdImg ? findThirdImg : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //third title
            const findThirdTitle = home.find(h => h.key === HOME_CONSTANTS.MISSION_THIRD_TITLE);
            setThirdTitle(findThirdTitle ? findThirdTitle : {
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
    return (
        <section className="w-full p-6">
            <div className="w-11/12 m-auto">
                <div className="w-1/2 flex flex-col items-center m-auto">
                    <div className="bg-[#223cd1] text-white w-fit rounded uppercase px-2.5 py-1.5 mb-4 text-xs" ref={(el: any) => el && divs.current.push(el)}>
                        {translate(language, JSON.parse(tag.value), listLangs)}
                    </div>
                    <div className="text-[#ae73db] font-medium text-3xl" ref={(el: any) => el && divs.current.push(el)}>{translate(language, JSON.parse(title.value), listLangs)}</div>
                    <p className="text-[11px] text-[#1d1e1f] mt-4 mb-4 text-center" ref={(el: any) => el && divs.current.push(el)}>
                        {translate(language, JSON.parse(description.value), listLangs)}
                    </p>
                </div>
                <div className="flex justify-evenly">
                    <div className={`group p-6 shadow-2xl rounded h-[300px] bg-cover bg-center flex flex-col justify-between transition-all`} onMouseEnter={() => setHover(1)} onMouseLeave={() => setHover(0)} ref={(el: any) => el && divs.current.push(el)}
                        style={(hover === 1) ? { backgroundColor: '#4287f5' } : { backgroundImage: `url(${ASSETS_API}${translate(language, JSON.parse(firstImg.value), listLangs)})` }}
                    >
                        <div className='rounded-full bg-white w-[50px] h-[50px] p-4 flex items-center justify-center text-[#223cd1] text-lg opacity-0 group-hover:opacity-100'>
                            <i className="fa-solid fa-chart-column"></i>
                        </div>
                        <div>
                            <div className='text-xl text-white font-semibold mb-2'>{translate(language, JSON.parse(firstTitle.value), listLangs)}</div>
                            <button className='bg-white text-[#cf2757] rounded p-2.5 w-32'>View Details</button>
                        </div>
                    </div>
                    <div className={`group p-6 shadow-2xl rounded h-[300px] bg-cover bg-center flex flex-col justify-between transition-all`} onMouseEnter={() => setHover(2)} onMouseLeave={() => setHover(0)} ref={(el: any) => el && divs.current.push(el)}
                        style={(hover === 2) ? { backgroundColor: '#4287f5' } : { backgroundImage: `url(${ASSETS_API}${translate(language, JSON.parse(secondImg.value), listLangs)})` }}
                    >
                        <div className='rounded-full bg-white w-[50px] h-[50px] p-4 flex items-center justify-center text-[#223cd1] text-lg opacity-0 group-hover:opacity-100'>
                            <i className="fa-solid fa-chart-column"></i>
                        </div>
                        <div>
                            <div className='text-xl text-white font-semibold mb-2'>{translate(language, JSON.parse(secondTitle.value), listLangs)}</div>
                            <button className='bg-white text-[#cf2757] rounded p-2.5 w-32'>View Details</button>
                        </div>
                    </div>
                    <div className={`group p-6 shadow-2xl rounded h-[300px] bg-cover bg-center ${hover === 3 ? 'bg-[#4287f5]' : 'bg-mission'} flex flex-col justify-between transition-all`} onMouseEnter={() => setHover(3)} onMouseLeave={() => setHover(0)} ref={(el: any) => el && divs.current.push(el)}
                        style={(hover === 3) ? { backgroundColor: '#4287f5' } : { backgroundImage: `url(${ASSETS_API}${translate(language, JSON.parse(thirdImg.value), listLangs)})` }}
                    >
                        <div className='rounded-full bg-white w-[50px] h-[50px] p-4 flex items-center justify-center text-[#223cd1] text-lg opacity-0 group-hover:opacity-100'>
                            <i className="fa-solid fa-chart-column"></i>
                        </div>
                        <div>
                            <div className='text-xl text-white font-semibold mb-2'>{translate(language, JSON.parse(thirdTitle.value), listLangs)}</div>
                            <button className='bg-white text-[#cf2757] rounded p-2.5 w-32'>View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Mission;