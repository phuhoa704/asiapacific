import { useEffect, useRef, useState } from "react";
import CustomHook from "../../utils/CustomHook";
import { useAppSelector } from "../../redux/hook";
import { Home } from "../../props";
import { HOME_CONSTANTS } from "../../configs/constants.config";
import { ASSETS_API } from "../../configs/apis.config";
import { translate } from "../../helpers/translator";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../configs/routes.config";

const ImmigrationServices = () => {
    const navigate = useNavigate();
    const { home } = useAppSelector(state => state.home);
    const { language, listLangs } = useAppSelector(state => state.lang);
    const [leftImg, setLeftImg] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [topRightImg, setTopRightImg] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [botRightImg, setBotRightImg] = useState<Home>({
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
    const [slogan, setSlogan] = useState<Home>({
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
    useEffect(() => {
        if(home.length > 0) {
            //left image
            const findLeftImg = home.find(h => h.key === HOME_CONSTANTS.LEFT_SERVICE_IMAGE);
            setLeftImg(findLeftImg ? findLeftImg : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //top right image
            const findTopRightImg = home.find(h => h.key === HOME_CONSTANTS.TOP_RIGHT_SERVICE_IMAGE);
            setTopRightImg(findTopRightImg ? findTopRightImg : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //bot right image
            const findBotRightImg = home.find(h => h.key === HOME_CONSTANTS.BOT_RIGHT_SERVICE_IMAGE);
            setBotRightImg(findBotRightImg ? findBotRightImg : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //tag
            const findTag = home.find(h => h.key === HOME_CONSTANTS.SERVICE_TAG);
            setTag(findTag ? findTag : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //slogan
            const findSlogan = home.find(h => h.key === HOME_CONSTANTS.SERVICE_SLOGAN);
            setSlogan(findSlogan ? findSlogan : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //description
            const findDescription = home.find(h => h.key === HOME_CONSTANTS.SERVICE_DESCRIPTION);
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
    const divs = useRef<any[]>([]);
    CustomHook(divs);
    return (
        <section className="w-full h-[550px] py-20">
            <div className="w-9/12 m-auto grid grid-cols-2 gap-6">
                <div className="col-span-1">
                    <div className="grid grid-cols-3 h-full" ref={(el: any) => el && divs.current.push(el)}>
                        <div className="col-span-2 pt-[50px]">
                            <div className="shadow-secondary h-[300px] bg-cover bg-center rounded-tl-[48px] rounded-br-[48px] border border-4 border-white w-9/12 m-auto" style={{ backgroundImage: `url(${ASSETS_API}${translate(language, JSON.parse(leftImg.value), listLangs)})`}}>
                            </div>
                        </div>
                        <div className="col-span-1 grid grid-rows-2 gap-2">
                            <div className="shadow-secondary col-span-1 bg-cover bg-center rounded-tl-[48px] rounded-br-[48px] border border-4 border-white mb-4" style={{ backgroundImage: `url(${ASSETS_API}${translate(language, JSON.parse(topRightImg.value), listLangs)})`}}>
                            </div>
                            <div className="shadow-secondary col-span-1 bg-cover bg-center rounded-tr-[48px] rounded-bl-[48px] border border-4 border-white relative" style={{ backgroundImage: `url(${ASSETS_API}${translate(language, JSON.parse(botRightImg.value), listLangs)})`}}>
                                <div className="absolute bottom-0 right-0 bg-[#2b81d6] w-8/12 text-white text-center p-2 rounded-bl-[32px] rounded-tr-[32px]">
                                    <p className="text-2xl">20</p>
                                    <p className="capitalized">years of experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 pl-[10%]">
                    <div className="bg-[#223cd1] text-white w-fit rounded capitalize px-2.5 py-1.5 mb-4 text-xs" ref={(el: any) => el && divs.current.push(el)}>
                        {translate(language, JSON.parse(tag.value), listLangs)}
                    </div>
                    <span className="text-[#ae73db] font-medium text-3xl" ref={(el: any) => el && divs.current.push(el)}>{translate(language, JSON.parse(slogan.value), listLangs)}</span>
                    <p className="text-[10px] text-[#1d1e1f] mt-4 mb-4" ref={(el: any) => el && divs.current.push(el)}>{translate(language, JSON.parse(description.value), listLangs)}</p>
                    <button className='bg-[#fdcd2e] text-[#cf2757] rounded p-2.5 w-32' ref={(el: any) => el && divs.current.push(el)} onClick={() => navigate(ROUTES.SERVICES)}>Learn more</button>
                </div>
            </div>
        </section>
    );
}

export default ImmigrationServices;