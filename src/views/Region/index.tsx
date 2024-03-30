import { useEffect, useRef, useState } from "react";
import HeaderBreadscrumb from "../../components/HeaderBreadcrumb";
import CustomHook from "../../utils/CustomHook";
import { Home, Region } from "../../props";
import vietnam from '../../assets/vietnam.jpg';
import RequestBanner from "../../components/RequestBanner";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { ASSETS_API } from "../../configs/apis.config";
import { translate, translateDescr } from "../../helpers/translator";
import { getRegionContent } from "../../redux/actions/Region";
import { REGION_CONSTANTS } from "../../configs/constants.config";

const RegionPage = () => {
    const dispatch = useAppDispatch();
    const { regions, region } = useAppSelector(state => state.region);
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
    const [descr, setDescr] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    CustomHook(divs);
    const [active, setActive] = useState<Region>({
        id: 1,
        image: vietnam,
        abstract_name: '',
        address: '',
        content: '',
        created_at: '',
        description: '',
        icon: '',
        lat: '',
        lng: '',
        meta_desc: '',
        meta_keyword: '',
        meta_title: '',
        name: '',
        phone: '',
        slug: '',
        updated_at: ''
    });
    useEffect(() => {
        if (regions.length > 0) {
            setActive(regions[0])
        }
    }, [regions])
    useEffect(() => {
        dispatch(getRegionContent([]))
    }, [])
    useEffect(() => {
        if (region.length > 0) {
            //breadscrum
            const findBread = region.find(h => h.key === REGION_CONSTANTS.BREADSCRUM);
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
            const findTag = region.find(h => h.key === REGION_CONSTANTS.TAG);
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
            const findTitle = region.find(h => h.key === REGION_CONSTANTS.TITLE);
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
            const findDescr = region.find(h => h.key === REGION_CONSTANTS.DESCRIPTION);
            setDescr(findDescr ? findDescr : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
        }
    }, [region])
    return (
        <div>
            <HeaderBreadscrumb page={translate(language, JSON.parse(breadscrum.value), listLangs)} tab={translate(language, JSON.parse(breadscrum.value), listLangs)} />
            <div className="w-full">
                <div className="w-11/12 lg:w-8/12 m-auto py-12">
                    <div className="bg-[#223cd1] text-white w-fit rounded capitalize px-2.5 py-1.5 mb-4 text-xs">
                        {translate(language, JSON.parse(tag.value), listLangs)}
                    </div>
                    <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-2">
                        <div className="col-span-1">
                            <p className="text-[#ae73db] text-3xl font-semibold mb-4 capitalize">{translate(language, JSON.parse(title.value), listLangs)}</p>
                        </div>
                        <div className="col-span-1">
                            <div className="text-xs text-left">
                                {translate(language, JSON.parse(descr.value), listLangs)}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="w-full lg:w-9/12 grid grid-cols-2 gap-8">
                            <div className="col-span-1" ref={(el: any) => el && divs.current.push(el)}>
                                <div className="w-full h-[350px] bg-center bg-cover rounded-lg shadow-primary transition-all" style={{ backgroundImage: `url(${ASSETS_API}${active.image})` }}>
                                </div>
                            </div>
                            <div className="col-span-1 flex items-center justify-center transition-all" ref={(el: any) => el && divs.current.push(el)}>
                                <div className="flex flex-col gap-4">
                                    <h4 className="text-[#cf2757] uppercase text-3xl font-semibold">{active.name}</h4>
                                    <p className="text-xs">{active.description ? translateDescr(language, JSON.parse(active.description), listLangs) : ''}</p>
                                    <span className="text-xs text-[#ae73db]"><i className="fa-solid fa-arrow-right"></i>&nbsp;Learn Detail</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-3/12 flex flex-col lg:flex-row">
                            {regions.filter(f => f.id !== active.id).map(r => (
                                <div className="h-full border-b lg:border-l lg:border-b-0 px-4 flex mb-2 lg:mb-0 flex-row lg:flex-col justify-between" key={r.id} ref={(el: any) => el && divs.current.push(el)}>
                                    <button className="text-white bg-[#ae73db] flex justify-center items-center p-2.5 rounded shadow-lg" onClick={() => setActive(r)}>
                                        <i className="fa-solid fa-arrow-up md:fa-arrow-left"></i>
                                    </button>
                                    <span className="uppercase text-lg text-[#cf2757] writing-mode-horizontal lg:orientation-mixed lg:writing-mode-vertical transition-all">{r.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <RequestBanner />
                </div>
            </div>
        </div>
    );
}

export default RegionPage;