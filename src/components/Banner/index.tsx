import { useAppSelector } from '../../redux/hook';
import { useEffect, useState } from 'react';
import { Home } from '../../props';
import { HOME_CONSTANTS } from '../../configs/constants.config';
import { translate } from '../../helpers/translator';
import { ASSETS_API } from '../../configs/apis.config';

const Banner = () => {
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
    const [slogan, setSlogan] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [leftImg, setLeftImg] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [botLeftImg, setBotLeftImg] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [leftBg, setLeftBg] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [centerBg, setCenterBg] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [rightBg, setRightBg] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [botRightBg, setBotRightBg] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [rightImg, setRightImg] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [underBg, setUnderBg] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    useEffect(() => {
        if (home.length > 0) {
            //tag
            const findTag = home.find(h => h.key === HOME_CONSTANTS.TAG);
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
            const findSlogan = home.find(h => h.key === HOME_CONSTANTS.SLOGAN);
            setSlogan(findSlogan ? findSlogan : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //lantern
            const findLeftImg = home.find(h => h.key === HOME_CONSTANTS.LEFT_BANNER_IMAGE);
            setLeftImg(findLeftImg ? findLeftImg : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //passport
            const findBotLeftImg = home.find(h => h.key === HOME_CONSTANTS.BOT_LEFT_BANNER_IMAGE);
            setBotLeftImg(findBotLeftImg ? findBotLeftImg : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //left background
            const findLeftBg = home.find(h => h.key === HOME_CONSTANTS.LEFT_BANNER_BG);
            setLeftBg(findLeftBg ? findLeftBg : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //center background
            const findCenterBg = home.find(h => h.key === HOME_CONSTANTS.CENTER_BANNER_BG);
            setCenterBg(findCenterBg ? findCenterBg : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //right background
            const findRightBg = home.find(h => h.key === HOME_CONSTANTS.RIGHT_BANNER_BG);
            setRightBg(findRightBg ? findRightBg : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //bot right background
            const findBotRightBg = home.find(h => h.key === HOME_CONSTANTS.BOT_RIGHT_BANNER_IMAGE);
            setBotRightBg(findBotRightBg ? findBotRightBg : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //bot right img
            const findRightImg = home.find(h => h.key === HOME_CONSTANTS.RIGHT_BANNER_IMAGE);
            setRightImg(findRightImg ? findRightImg : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //under background
            const findUnderBg = home.find(h => h.key === HOME_CONSTANTS.UNDER_BANNER_BACKGROUND);
            setUnderBg(findUnderBg ? findUnderBg : {
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
        <section className="w-full bg-banner px-[10%] py-[5%] pb-[50px]">
            <div className="grid grid-cols-2 max-sm:grid-cols-1">
                <div className="flex flex-col col-span-1 gap-4">
                    <div className="rounded-lg border-white uppercase border text-white text-base px-2 py-x w-fit">
                        {translate(language, JSON.parse(tag.value), listLangs)}
                    </div>
                    <span className="capitalize font-medium text-white text-4xl lg:text-5xl">{translate(language, JSON.parse(slogan.value), listLangs)}</span>
                    <button className='bg-[#fdcd2e] text-[#cf2757] rounded p-2.5 w-32' onClick={() => window.scrollTo(0, 550)}>Learn more</button>
                </div>
                <div className="relative col-span-1 max-sm:hidden">
                    <div className="blossom"></div>
                    <div className="blossom2"></div>
                    <div className="w-full h-full relative">
                        <div className="w-full m-auto flex justify-center">
                            <img src={`${ASSETS_API}${translate(language, JSON.parse(underBg.value), listLangs)}`} alt="" />
                        </div>
                        <div className="absolute bottom-0 z-[1] flex left-0 right-0 mx-auto justify-evenly">
                            <div className='w-[120px] h-[170px] bg-center bg-cover rotate-[-10deg] shadow-lg rounded-lg lg:w-[150px] lg:h-[200px]' style={{ backgroundImage: `url(${ASSETS_API}${translate(language, JSON.parse(leftBg.value), listLangs)})` }}></div>
                            <div className='w-[120px] h-[170px] bg-center bg-cover rotate-[10deg] shadow-lg rounded-lg lg:w-[150px] lg:h-[200px]' style={{ backgroundImage: `url(${ASSETS_API}${translate(language, JSON.parse(rightBg.value), listLangs)})` }}></div>
                        </div>
                        <div className="absolute bottom-0 w-[150px] z-[2] left-0 right-0 mx-auto">
                            <img src={`${ASSETS_API}${translate(language, JSON.parse(centerBg.value), listLangs)}`} alt="" />
                        </div>
                        <div className="absolute top-20 w-16 lg:w-20 rotate-[-15deg] z-[2] lantern-animation">
                            <img src={`${ASSETS_API}${translate(language, JSON.parse(leftImg.value), listLangs)}`} alt="" />
                        </div>
                        <div className="absolute w-28 lg:w-32 top-24 right-0 z-[2] rotate-[35deg] flag-animation">
                            <img src={`${ASSETS_API}${translate(language, JSON.parse(rightImg.value), listLangs)}`} alt="" />
                        </div>
                        <div className="absolute w-16 z-[2] bottom-0 left-12 rotate-[30deg]">
                            <img src={`${ASSETS_API}${translate(language, JSON.parse(botLeftImg.value), listLangs)}`} alt="" />
                        </div>
                        <div className="absolute w-32 z-[2] bottom-12 right-0 transition-transform airplane-animation">
                            <img className='flip-img' src={`${ASSETS_API}${translate(language, JSON.parse(botRightBg.value), listLangs)}`} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;