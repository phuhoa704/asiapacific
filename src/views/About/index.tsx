import { useEffect, useRef, useState } from "react";
import HeaderBreadscrumb from "../../components/HeaderBreadcrumb";
import RequestBanner from "../../components/RequestBanner";
import './styles.scss'
import VerticalSteps from "../../components/VerticalSteps";
import meeting from '../../assets/meeting.jpg';
import CustomHook from "../../utils/CustomHook";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { translate, translateDescr, translateTitle } from "../../helpers/translator";
import { getAboutContent } from "../../redux/actions/About";
import { ABOUT_CONSTANTS } from "../../configs/constants.config";
import { Home } from "../../props";
import { ASSETS_API } from "../../configs/apis.config";

const About = () => {
    const dispatch = useAppDispatch();
    const { aboutSteps, about } = useAppSelector(state => state.about);
    const { language, listLangs } = useAppSelector(state => state.lang);
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
    const [description, setDescription] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [image, setImage] = useState<Home>({
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
        dispatch(getAboutContent([ABOUT_CONSTANTS.BREADSCRUM, ABOUT_CONSTANTS.DESCRIPTION, ABOUT_CONSTANTS.IMAGE, ABOUT_CONSTANTS.TAG, ABOUT_CONSTANTS.TITLE]))
    }, [])
    useEffect(() => {
        if (about.length > 0) {
            //breadscrum
            const findBread = about.find(h => h.key === ABOUT_CONSTANTS.BREADSCRUM);
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
            const findTag = about.find(h => h.key === ABOUT_CONSTANTS.TAG);
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
            const findTitle = about.find(h => h.key === ABOUT_CONSTANTS.TITLE);
            setTitle(findTitle ? findTitle : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //desc
            const findDescr = about.find(h => h.key === ABOUT_CONSTANTS.DESCRIPTION);
            setDescription(findDescr ? findDescr : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //image
            const findImage = about.find(h => h.key === ABOUT_CONSTANTS.IMAGE);
            setImage(findImage ? findImage : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
        }
    }, [about])
    return (
        <div>
            <HeaderBreadscrumb page={translate(language, JSON.parse(breadscrum.value), listLangs)} tab={translate(language, JSON.parse(breadscrum.value), listLangs)} />
            <div className="w-full">
                <div className="w-8/12 m-auto py-12">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <div className="bg-[#223cd1] text-white w-fit rounded capitalize px-2.5 py-1.5 mb-4 text-xs" ref={(el: any) => el && divs.current.push(el)}>
                                {translate(language, JSON.parse(tag.value), listLangs)}
                            </div>
                            <span className="text-[#ae73db] font-medium text-3xl" ref={(el: any) => el && divs.current.push(el)}>{translate(language, JSON.parse(title.value), listLangs)}</span>
                        </div>
                        <div className="col-span-1">
                            <div className="text-left text-xs text-[#393b3a] flex items-center" ref={(el: any) => el && divs.current.push(el)}>
                                {translate(language, JSON.parse(description.value), listLangs)}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="col-span-1">
                            <div className="w-full rounded-tl-[56px] rounded-br-[56px] h-[500px] bg-center bg-cover" style={{ backgroundImage: `url(${ASSETS_API}${translate(language, JSON.parse(image.value), listLangs)})` }} ref={(el: any) => el && divs.current.push(el)}>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <VerticalSteps steps={aboutSteps.slice().sort((a, b) => a.id - b.id).map(s => {
                                return {
                                    ...s,
                                    title: translateTitle(language, JSON.parse(s.title), listLangs),
                                    descr: translateDescr(language, JSON.parse(s.description), listLangs)
                                }
                            })} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full pb-12">
                <RequestBanner />
            </div>
        </div>
    );
}

export default About;