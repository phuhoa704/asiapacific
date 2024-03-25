import { useEffect, useRef, useState } from "react";
import ProcessBar from "../ProcessBar";
import CustomHook from "../../utils/CustomHook";
import { useAppSelector } from "../../redux/hook";
import { Home } from "../../props";
import { HOME_CONSTANTS } from "../../configs/constants.config";
import { ASSETS_API } from "../../configs/apis.config";
import { translate } from "../../helpers/translator";

function ProfessionalKnowledge() {
    const { home } = useAppSelector(state => state.home);
    const { language, listLangs } = useAppSelector(state => state.lang);
    const [firstImg, setFirstImg] = useState<Home>({
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
    const [thirdImg, setThirdImg] = useState<Home>({
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
    const [desc, setDesc] = useState<Home>({
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
    const [firstValue, setFirstValue] = useState<Home>({
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
    const [secondValue, setSecondValue] = useState<Home>({
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
    const [thirdValue, setThirdValue] = useState<Home>({
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
            //first image
            const findFirstImg = home.find(h => h.key === HOME_CONSTANTS.KNOWLEDGE_FIRST_IMG);
            setFirstImg(findFirstImg ? findFirstImg : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //second image
            const findSecondImg = home.find(h => h.key === HOME_CONSTANTS.KNOWLEDGE_SECOND_IMG);
            setSecondImg(findSecondImg ? findSecondImg : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //third image
            const findThirdImg = home.find(h => h.key === HOME_CONSTANTS.KNOWLEDGE_THIRD_IMG);
            setThirdImg(findThirdImg ? findThirdImg : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //tag
            const findTag = home.find(h => h.key === HOME_CONSTANTS.KNOWLEDGE_TAG);
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
            const findDesc = home.find(h => h.key === HOME_CONSTANTS.KNOWLEDGE_DESCRIPTION);
            setDesc(findDesc ? findDesc : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //first title
            const findFirstTitle = home.find(h => h.key === HOME_CONSTANTS.KNOWLEDGE_FIRST_TITLE);
            setFirstTitle(findFirstTitle ? findFirstTitle : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //first value
            const findFirstValue = home.find(h => h.key === HOME_CONSTANTS.KNOWLEDGE_FIRST_VALUE);
            setFirstValue(findFirstValue ? findFirstValue : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //second title
            const findSecondTitle = home.find(h => h.key === HOME_CONSTANTS.KNOWLEDGE_SECOND_TITLE);
            setSecondTitle(findSecondTitle ? findSecondTitle : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //second value
            const findSecondValue = home.find(h => h.key === HOME_CONSTANTS.KNOWLEDGE_SECOND_VALUE);
            setSecondValue(findSecondValue ? findSecondValue : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //third title
            const findThirdTitle = home.find(h => h.key === HOME_CONSTANTS.KNOWLEDGE_THIRD_TITLE);
            setThirdTitle(findThirdTitle ? findThirdTitle : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //third value
            const findThirdValue = home.find(h => h.key === HOME_CONSTANTS.KNOWLEDGE_THIRD_VALUE);
            setThirdValue(findThirdValue ? findThirdValue : {
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
        <section className="relative w-full h-fit bg-banner py-[50px] md:h-[550px]">
            <div className="snow"></div>
            <div className="w-11/12 m-auto grid grid-cols-1 gap-4 md:w-9/12 md:grid-cols-2">
                <div className="col-span-1 grid grid-cols-2 gap-4">
                    <div className="col-span-1 grid grid-rows-2 gap-6">
                        <div className="shadow-secondary h-full col-span-1 rounded w-11/12 bg-cover bg-center" style={{ backgroundImage: `url(${ASSETS_API}${translate(language, JSON.parse(firstImg.value), listLangs)})` }} ref={(el: any) => el && divs.current.push(el)}>
                        </div>
                        <div className="shadow-secondary h-full col-span-1 rounded w-11/12 bg-cover bg-center" style={{ backgroundImage: `url(${ASSETS_API}${translate(language, JSON.parse(secondImg.value), listLangs)})` }} ref={(el: any) => el && divs.current.push(el)}>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="shadow-secondary h-[300px] mt-12 col-span-1 rounded w-10/12 bg-cover bg-center" style={{ backgroundImage: `url(${ASSETS_API}${translate(language, JSON.parse(thirdImg.value), listLangs)})` }} ref={(el: any) => el && divs.current.push(el)}>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 text-left pl-0 lg:pl-10">
                    <div className="text-[#223cd1] bg-white w-fit rounded uppercase px-2.5 py-1.5 mb-4 text-xs" ref={(el: any) => el && divs.current.push(el)}>
                        {translate(language, JSON.parse(tag.value), listLangs)}
                    </div>
                    <span className="text-white font-medium text-3xl uppercase" ref={(el: any) => el && divs.current.push(el)}>{translate(language, JSON.parse(tag.value), listLangs)}</span>
                    <p className="text-[12px] text-white mt-4 mb-4" ref={(el: any) => el && divs.current.push(el)}>{translate(language, JSON.parse(desc.value), listLangs)}</p>
                    <div className="flex flex-col gap-8" ref={(el: any) => el && divs.current.push(el)}>
                        <ProcessBar title={translate(language, JSON.parse(firstTitle.value), listLangs)} percent={translate(language, JSON.parse(firstValue.value), listLangs)} />
                        <ProcessBar title={translate(language, JSON.parse(secondTitle.value), listLangs)} percent={translate(language, JSON.parse(secondValue.value), listLangs)} />
                        <ProcessBar title={translate(language, JSON.parse(thirdTitle.value), listLangs)} percent={translate(language, JSON.parse(thirdValue.value), listLangs)} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProfessionalKnowledge;