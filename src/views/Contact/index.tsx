import { useEffect, useRef, useState } from "react";
import { Home } from "../../props";
import RequestBanner from "../../components/RequestBanner";
import HeaderBreadscrumb from "../../components/HeaderBreadcrumb";
import CustomHook from "../../utils/CustomHook";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { CONTACT_CONSTANTS } from "../../configs/constants.config";
import { translate } from "../../helpers/translator";
import { ASSETS_API } from "../../configs/apis.config";
import { SubmitContactDto } from "../../redux/dto";
import { submitContact } from "../../redux/actions/Contact";

const ContactPage = () => {
    const dispatch = useAppDispatch();
    const { contact } = useAppSelector(state => state.contact);
    const { regions } = useAppSelector(state => state.region);
    const { listLangs, language } = useAppSelector(state => state.lang);
    const divs = useRef<any[]>([]);
    const [imgKeys] = useState<string[]>([CONTACT_CONSTANTS.IMAGE1, CONTACT_CONSTANTS.IMAGE2, CONTACT_CONSTANTS.IMAGE3, CONTACT_CONSTANTS.IMAGE4])
    const [formVals, setFormVals] = useState<SubmitContactDto>({
        content: '',
        email: '',
        name: '',
        phone: '',
        surname: ''
    })
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
    const [descr, setDescr] = useState<Home>({
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
    const [firstTitle, setFirstTitle] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [firstDescr, setFirstDescr] = useState<Home>({
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
    const [secondDescr, setSecondDescr] = useState<Home>({
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
    const [thirdDescr, setThirdDescr] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [button, setButton] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [images, setImages] = useState<Home[]>([]);
    CustomHook(divs);
    useEffect(() => {
        if (contact.length > 0) {
            //bread scrum
            const findbs = contact.find(h => h.key === CONTACT_CONSTANTS.BREADCRUM);
            setBreadscrum(findbs ? findbs : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //bread scrum
            const findTitle = contact.find(h => h.key === CONTACT_CONSTANTS.TITLE);
            setTitle(findTitle ? findTitle : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //tag
            const findTag = contact.find(h => h.key === CONTACT_CONSTANTS.TAG);
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
            const findDescr = contact.find(h => h.key === CONTACT_CONSTANTS.DESCR);
            setDescr(findDescr ? findDescr : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //first title
            const findFirstTitle = contact.find(h => h.key === CONTACT_CONSTANTS.FIRST_TITLE);
            setFirstTitle(findFirstTitle ? findFirstTitle : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //first desc
            const findFirstDesc = contact.find(h => h.key === CONTACT_CONSTANTS.FIRST_DESCR);
            setFirstDescr(findFirstDesc ? findFirstDesc : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //first title
            const findSecondTitle = contact.find(h => h.key === CONTACT_CONSTANTS.SECOND_TITLE);
            setSecondTitle(findSecondTitle ? findSecondTitle : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //Second desc
            const findSecondDesc = contact.find(h => h.key === CONTACT_CONSTANTS.SECOND_DESCR);
            setSecondDescr(findSecondDesc ? findSecondDesc : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //first title
            const findThirdTitle = contact.find(h => h.key === CONTACT_CONSTANTS.THIRD_TITLE);
            setThirdTitle(findThirdTitle ? findThirdTitle : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //Third desc
            const findThirdDesc = contact.find(h => h.key === CONTACT_CONSTANTS.THIRD_DESCR);
            setThirdDescr(findThirdDesc ? findThirdDesc : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //Button
            const findButton = contact.find(h => h.key === CONTACT_CONSTANTS.BUTTON);
            setButton(findButton ? findButton : {
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
            imgKeys.forEach(i => {
                const findImg: any = contact.find(h => h.key === i);
                tempArr.push(findImg);
            })
            setImages(tempArr)
        }
    }, [contact])
    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormVals({
            ...formVals,
            [name]: value
        })
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(submitContact(formVals))
    }
    return (
        <div>
            <HeaderBreadscrumb page={translate(language, JSON.parse(breadscrum.value), listLangs)} tab={translate(language, JSON.parse(breadscrum.value), listLangs)} />
            <div className="w-full">
                <div className="w-11/12 lg:w-8/12 m-auto py-12">
                    <div className="bg-[#223cd1] text-white w-fit rounded capitalize px-2.5 py-1.5 mb-4 text-xs" ref={(el: any) => el && divs.current.push(el)}>
                        {translate(language, JSON.parse(tag.value), listLangs)}
                    </div>
                    <p className="text-[#ae73db] text-3xl font-semibold mb-4" ref={(el: any) => el && divs.current.push(el)}>{translate(language, JSON.parse(title.value), listLangs)}</p>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-3 md:col-span-1">
                            <div className="text-xs text-left mb-4" ref={(el: any) => el && divs.current.push(el)}>
                                {translate(language, JSON.parse(descr.value), listLangs)}
                            </div>
                            <div className="flex flex-col gap-4">
                                {(regions.length > 0) && regions.map(r => (
                                    <div className="grid grid-cols-4 gap-2" ref={(el: any) => el && divs.current.push(el)}>
                                        <div className="col-span-1 flex items-center justify-center">
                                            <div className="w-[50px] h-[50px] bg-[#ae73db] rounded-full p-3">
                                                <img src={`${ASSETS_API}${r.icon}`} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-span-3 text-left">
                                            <p className="text-[#ae73db] text-xs font-semibold">{r.name}</p>
                                            <p className="text-xs">{r.address}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-span-3 md:col-span-2">
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-4" ref={(el: any) => el && divs.current.push(el)}>
                                    <div className="col-span-1">
                                        <input className="p-4 text-xs border-[#ae73db] border text-[#ae73db] bg-white w-full rounded" type="text" placeholder="Name*" name="name" onChange={handleChange} value={formVals.name} />
                                    </div>
                                    <div className="col-span-1">
                                        <input className="p-4 text-xs border-[#ae73db] border text-[#ae73db] bg-white w-full rounded" type="text" placeholder="Surname" name="surname" onChange={handleChange} value={formVals.surname} />
                                    </div>
                                    <div className="col-span-1">
                                        <input className="p-4 text-xs border-[#ae73db] border text-[#ae73db] bg-white w-full rounded" type="text" placeholder="Phone Number*" name="phone" onChange={handleChange} value={formVals.phone} />
                                    </div>
                                    <div className="col-span-1">
                                        <input className="p-4 text-xs border-[#ae73db] border text-[#ae73db] bg-white w-full rounded" type="text" placeholder="Email Address" name="email" onChange={handleChange} value={formVals.email} />
                                    </div>
                                    <div className="col-span-2">
                                        <textarea className="p-4 text-xs border-[#ae73db] border text-[#ae73db] bg-white w-full rounded" rows={3} placeholder="Consultation Content" name="content" onChange={handleChange} value={formVals.content} />
                                    </div>
                                    <button type="submit" className='bg-[#fdcd2e] text-[#cf2757] text-xs rounded p-2.5 w-fit'>{translate(language, JSON.parse(button.value), listLangs)}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mb-4">
                <div className="w-11/12 md:w-8/12 m-auto grid grid-cols-4 h-[150px] border-[#ae73db] border" ref={(el: any) => el && divs.current.push(el)}>
                    {images.map(i => (
                        <div key={i.id} className="col-span-1 bg-center bg-cover border-[#ae73db] border relative" style={{ backgroundImage: `url(${ASSETS_API}${translate(language, JSON.parse(i.value), listLangs)})` }}>
                            <div className="w-full bg-bottom-gradient h-1/3 absolute bottom-0"></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full mb-4">
                <RequestBanner />
            </div>
        </div>
    );
}

export default ContactPage;