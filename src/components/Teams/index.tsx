import { useEffect, useRef, useState } from 'react';
import RequestBanner from '../RequestBanner';
import CustomHook from '../../utils/CustomHook';
import { useAppSelector } from '../../redux/hook';
import { Home } from '../../props';
import { HOME_CONSTANTS } from '../../configs/constants.config';
import { translate } from '../../helpers/translator';
import { ASSETS_API } from '../../configs/apis.config';

const Teams = () => {
    const { home } = useAppSelector(state => state.home);
    const { language, listLangs } = useAppSelector(state => state.lang);
    const [imgsKey] = useState<string[]>([HOME_CONSTANTS.TEAM_FIRST_IMG, HOME_CONSTANTS.TEAM_SECOND_IMG, HOME_CONSTANTS.TEAM_THIRD_IMG, HOME_CONSTANTS.TEAM_FOURTH_IMG])
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
    const [images, setImages] = useState<Home[]>([]);
    const divs = useRef<any[]>([]);
    CustomHook(divs);
    useEffect(() => {
        if (home.length > 0) {
            //tag
            const findTag = home.find(h => h.key === HOME_CONSTANTS.TEAM_TAG);
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
            const findTitle = home.find(h => h.key === HOME_CONSTANTS.TEAM_TITLE);
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
            const findDescription = home.find(h => h.key === HOME_CONSTANTS.TEAM_DESCRIPTION);
            setDescription(findDescription ? findDescription : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //images
            let tempArr: Home[] = [];
            imgsKey.forEach(i => {
                const findImg: any = home.find(h => h.key === i);
                tempArr.push(findImg);
            })
            setImages(tempArr)
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
            </div>
            <div className="w-9/12 grid grid-cols-4 gap-4 h-[250px] m-auto">
                {images.map(i => (
                    <div key={i.id} className="col-span-1 bg-[#23b830] bg-cover bg-center border border-[#ae73db] border-4 rounded-xl" style={{ backgroundImage: `url(${ASSETS_API}${translate(language, JSON.parse(i.value), listLangs)})` }} ref={(el: any) => el && divs.current.push(el)}></div>
                ))}
            </div>
            <RequestBanner />
        </section>
    );
}

export default Teams;