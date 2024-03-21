import { useEffect, useRef, useState } from 'react';
import banner from '../../assets/banner.jpg';
import CustomHook from '../../utils/CustomHook';
import { useAppSelector } from '../../redux/hook';
import { Home } from '../../props';
import { HOME_CONSTANTS } from '../../configs/constants.config';
import { ASSETS_API } from '../../configs/apis.config';
import { translate } from '../../helpers/translator';

const RequestBanner = () => {
    const { home } = useAppSelector(state => state.home);
    const { language, listLangs } = useAppSelector(state => state.lang);
    const [img, setImg] = useState<Home>({
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
    const [subTitle, setSubTitle] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [phone, setPhone] = useState<Home>({
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
        if(home.length > 0) {
            //image
            const findImg = home.find(h => h.key === HOME_CONSTANTS.REQ_BANNER_IMG);
            setImg(findImg ? findImg : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //title
            const findTitle = home.find(h => h.key === HOME_CONSTANTS.REQ_BANNER_TITLE);
            setTitle(findTitle ? findTitle : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //subtitle
            const findSubTitle = home.find(h => h.key === HOME_CONSTANTS.REQ_BANNER_SUBTITLE);
            setSubTitle(findSubTitle ? findSubTitle : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //subtitle
            const findPhone = home.find(h => h.key === HOME_CONSTANTS.REQ_BANNER_PHONE);
            setPhone(findPhone ? findPhone : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
        }
    },[home])
    return (
        <div className="w-8/12 m-auto h-[100px] flex justify-between mt-8 shadow-primary rounded-xl p-8" style={{ backgroundImage: `url(${banner})` }}  ref={(el: any) => el && divs.current.push(el)}>
            <div className="flex items-center">
                <img className='w-[50px] mr-4' src={`${ASSETS_API}${translate(language, JSON.parse(img.value), listLangs)}`} alt="" />
                <div className='text-white font-semibold'>
                    <p>{translate(language, JSON.parse(title.value), listLangs)}</p>
                    <p>{translate(language, JSON.parse(subTitle.value), listLangs)}</p>
                </div>
            </div>
            <div className='text-right'>
                <p className='text-white text-xs'>{translate(language, JSON.parse(subTitle.value), listLangs)}</p>
                <p className='drop-shadow-lg text-[#ebba34] text-lg font-bold tracking-widest'>{translate(language, JSON.parse(phone.value), listLangs)}</p>
            </div>
        </div>
    );
}

export default RequestBanner;