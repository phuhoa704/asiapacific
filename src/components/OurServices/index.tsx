import { useEffect, useRef, useState } from "react";
import CustomHook from "../../utils/CustomHook";
import { useAppSelector } from "../../redux/hook";
import { Home } from "../../props";
import { HOME_CONSTANTS } from "../../configs/constants.config";
import { translate } from "../../helpers/translator";

const OurServices = () => {
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
    const [firstDesc, setFirstDesc] = useState<Home>({
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
    const [secondDesc, setSecondDesc] = useState<Home>({
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
    const [thirdDesc, setThirdDesc] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [fourthTitle, setFourthTitle] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [fourthDesc, setFourthDesc] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [fifthTitle, setFifthTitle] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [fifthDesc, setFifthDesc] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [sixthTitle, setSixthTitle] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [sixthDesc, setSixthDesc] = useState<Home>({
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
            //first title
            const findFirstTitle = home.find(h => h.key === HOME_CONSTANTS.OUR_SERVICES_FIRST_TITLE);
            setFirstTitle(findFirstTitle ? findFirstTitle : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //first description
            const findFirstDesc = home.find(h => h.key === HOME_CONSTANTS.OUR_SERVICES_FIRST_DESC);
            setFirstDesc(findFirstDesc ? findFirstDesc : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //second description
            const findSecondTitle = home.find(h => h.key === HOME_CONSTANTS.OUR_SERVICES_SECOND_TITLE);
            setSecondTitle(findSecondTitle ? findSecondTitle : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //second description
            const findSecondDesc = home.find(h => h.key === HOME_CONSTANTS.OUR_SERVICES_SECOND_DESC);
            setSecondDesc(findSecondDesc ? findSecondDesc : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //third description
            const findThirdTitle = home.find(h => h.key === HOME_CONSTANTS.OUR_SERVICES_THIRD_TITLE);
            setThirdTitle(findThirdTitle ? findThirdTitle : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //third description
            const findThirdDesc = home.find(h => h.key === HOME_CONSTANTS.OUR_SERVICES_THIRD_DESC);
            setThirdDesc(findThirdDesc ? findThirdDesc : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //fourth description
            const findFourthTitle = home.find(h => h.key === HOME_CONSTANTS.OUR_SERVICES_FOURTH_TITLE);
            setFourthTitle(findFourthTitle ? findFourthTitle : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //fourth description
            const findFourthDesc = home.find(h => h.key === HOME_CONSTANTS.OUR_SERVICES_FOURTH_DESC);
            setFourthDesc(findFourthDesc ? findFourthDesc : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //fifth description
            const findFifthTitle = home.find(h => h.key === HOME_CONSTANTS.OUR_SERVICES_FIFTH_TITLE);
            setFifthTitle(findFifthTitle ? findFifthTitle : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //fifth description
            const findFifthDesc = home.find(h => h.key === HOME_CONSTANTS.OUR_SERVICES_FIFTH_DESC);
            setFifthDesc(findFifthDesc ? findFifthDesc : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //sixth description
            const findSixthTitle = home.find(h => h.key === HOME_CONSTANTS.OUR_SERVICES_SIXTH_TITLE);
            setSixthTitle(findSixthTitle ? findSixthTitle : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //sixth description
            const findSixthDesc = home.find(h => h.key === HOME_CONSTANTS.OUR_SERVICES_SIXTH_DESC);
            setSixthDesc(findSixthDesc ? findSixthDesc : {
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
                    <div className="text-[#ae73db] font-medium text-3xl" ref={(el: any) => el && divs.current.push(el)}>{translate(language, JSON.parse(tag.value), listLangs)}</div>
                    <p className="text-[11px] text-[#1d1e1f] mt-4 mb-4 text-center" ref={(el: any) => el && divs.current.push(el)}>{translate(language, JSON.parse(desc.value), listLangs)}</p>
                </div>
                <div className="grid grid-cols-6 gap-4">
                    <div className="group text-[#223cd1]" ref={(el: any) => el && divs.current.push(el)}>
                        <div className="service-icon text-2xl w-10 h-10 group-hover:text-[#cf2757]">
                            <i className="fa-solid fa-list-check"></i>
                        </div>
                        <div className="text-sm font-medium group-hover:text-[#cf2757] cursor-default">{translate(language, JSON.parse(firstTitle.value), listLangs)}</div>
                        <p className="text-[10px] text-[#1d1e1f] opacity-0 transition-all group-hover:opacity-100 cursor-default">{translate(language, JSON.parse(firstDesc.value), listLangs)}</p>
                    </div>
                    <div className="group text-[#223cd1]" ref={(el: any) => el && divs.current.push(el)}>
                        <div className="service-icon text-2xl w-10 h-10 group-hover:text-[#cf2757]">
                            <i className="fa-solid fa-list-check"></i>
                        </div>
                        <div className="text-sm font-medium group-hover:text-[#cf2757] cursor-default">{translate(language, JSON.parse(secondTitle.value), listLangs)}</div>
                        <p className="text-[10px] text-[#1d1e1f] opacity-0 transition-all group-hover:opacity-100 cursor-default">{translate(language, JSON.parse(secondDesc.value), listLangs)}</p>
                    </div>
                    <div className="group text-[#223cd1]" ref={(el: any) => el && divs.current.push(el)}>
                        <div className="service-icon text-2xl w-10 h-10 group-hover:text-[#cf2757]">
                            <i className="fa-solid fa-list-check"></i>
                        </div>
                        <div className="text-sm font-medium group-hover:text-[#cf2757] cursor-default">{translate(language, JSON.parse(thirdTitle.value), listLangs)}</div>
                        <p className="text-[10px] text-[#1d1e1f] opacity-0 transition-all group-hover:opacity-100 cursor-default">{translate(language, JSON.parse(thirdDesc.value), listLangs)}</p>
                    </div>
                    <div className="group text-[#223cd1]" ref={(el: any) => el && divs.current.push(el)}>
                        <div className="service-icon text-2xl w-10 h-10 group-hover:text-[#cf2757]">
                            <i className="fa-solid fa-list-check"></i>
                        </div>
                        <div className="text-sm font-medium group-hover:text-[#cf2757] cursor-default">{translate(language, JSON.parse(fourthTitle.value), listLangs)}</div>
                        <p className="text-[10px] text-[#1d1e1f] opacity-0 transition-all group-hover:opacity-100 cursor-default">{translate(language, JSON.parse(fourthDesc.value), listLangs)}</p>
                    </div>
                    <div className="group text-[#223cd1]" ref={(el: any) => el && divs.current.push(el)}>
                        <div className="service-icon text-2xl w-10 h-10 group-hover:text-[#cf2757]">
                            <i className="fa-solid fa-list-check"></i>
                        </div>
                        <div className="text-sm font-medium group-hover:text-[#cf2757] cursor-default">{translate(language, JSON.parse(fifthTitle.value), listLangs)}</div>
                        <p className="text-[10px] text-[#1d1e1f] opacity-0 transition-all group-hover:opacity-100 cursor-default">{translate(language, JSON.parse(fifthDesc.value), listLangs)}</p>
                    </div>
                    <div className="group text-[#223cd1]" ref={(el: any) => el && divs.current.push(el)}>
                        <div className="service-icon text-2xl w-10 h-10 group-hover:text-[#cf2757]">
                            <i className="fa-solid fa-list-check"></i>
                        </div>
                        <div className="text-sm font-medium group-hover:text-[#cf2757] cursor-default">{translate(language, JSON.parse(sixthTitle.value), listLangs)}</div>
                        <p className="text-[10px] text-[#1d1e1f] opacity-0 transition-all group-hover:opacity-100 cursor-default">{translate(language, JSON.parse(sixthDesc.value), listLangs)}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurServices;