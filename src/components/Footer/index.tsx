import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import { Home } from "../../props";
import { FOOTER_CONSTANTS } from "../../configs/constants.config";
import { translate, translateName } from "../../helpers/translator";
import { ROUTES } from "../../configs/routes.config";

const Footer = () => {
    const { listLangs, language } = useAppSelector(state => state.lang);
    const { service } = useAppSelector(state => state.service);
    const { footer } = useAppSelector(state => state.home);
    const { socialMedia } = useAppSelector(state => state.social);
    const [sales] = useState([
        { id: 1, name: 'About Us', href: ROUTES.ABOUT },
        { id: 2, name: 'Services', href: ROUTES.SERVICES },
        { id: 4, name: 'Blogs', href: ROUTES.NEWS },
        { id: 5, name: 'Contact', href: ROUTES.CONTACT },
    ]);
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
    const [phoneTitle, setPhoneTitle] = useState<Home>({
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
    const [emailTitle, setEmailTitle] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [email1, setEmail1] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [email2, setEmail2] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [locationTitle, setLocationTitle] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [location, setLocation] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [title2, setTitle2] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [title3, setTitle3] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [fb, setFb] = useState<any>({})
    const [tw, setTw] = useState<any>({})
    const [ins, setIns] = useState<any>({})
    const [prt, setPrt] = useState<any>({})
    const [ytb, setYtb] = useState<any>({})

    useEffect(() => {
        if (footer.length > 0) {
            //description
            const findDescr = footer.find(h => h.key === FOOTER_CONSTANTS.DESCRIPTION);
            setDescr(findDescr ? findDescr : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //title
            const findTitle = footer.find(h => h.key === FOOTER_CONSTANTS.TITLE);
            setTitle(findTitle ? findTitle : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //title
            const findPhoneTitle = footer.find(h => h.key === FOOTER_CONSTANTS.PHONE_TITLE);
            setPhoneTitle(findPhoneTitle ? findPhoneTitle : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //phone
            const findPhone = footer.find(h => h.key === FOOTER_CONSTANTS.PHONE);
            setPhone(findPhone ? findPhone : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //email
            const findEmailTitle = footer.find(h => h.key === FOOTER_CONSTANTS.EMAIL_TITLE);
            setEmailTitle(findEmailTitle ? findEmailTitle : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //email
            const findEmail1 = footer.find(h => h.key === FOOTER_CONSTANTS.EMAIL1);
            setEmail1(findEmail1 ? findEmail1 : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //email
            const findEmail2 = footer.find(h => h.key === FOOTER_CONSTANTS.EMAIL2);
            setEmail2(findEmail2 ? findEmail2 : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //location
            const findLocationTitle = footer.find(h => h.key === FOOTER_CONSTANTS.LOCATION_TITLE);
            setLocationTitle(findLocationTitle ? findLocationTitle : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //email
            const findLocation = footer.find(h => h.key === FOOTER_CONSTANTS.LOCATION);
            setLocation(findLocation ? findLocation : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //title2
            const findTitle2 = footer.find(h => h.key === FOOTER_CONSTANTS.TITLE2);
            setTitle2(findTitle2 ? findTitle2 : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //title3
            const findTitle3 = footer.find(h => h.key === FOOTER_CONSTANTS.TITLE3);
            setTitle3(findTitle3 ? findTitle3 : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
        }
    }, [footer])
    useEffect(() => {
        if (socialMedia.length > 0) {
            //fb
            const fb = socialMedia.find(s => s.key === 'Facebook');
            if (fb) {
                setFb(fb)
            }
            //ins
            const ins = socialMedia.find(s => s.key === 'Instagram');
            if (ins) {
                setIns(ins)
            }
            //tw
            const tw = socialMedia.find(s => s.key === 'Twitter');
            if (tw) {
                setTw(tw)
            }
            //Pinterest
            const pin = socialMedia.find(s => s.key === 'Pinterest');
            if (pin) {
                setPrt(pin)
            }
            //ytb
            const ytb = socialMedia.find(s => s.key === 'Youtube');
            if (ytb) {
                setYtb(ytb)
            }
        }
    }, [socialMedia])
    return (
        <>
            <div className="w-full bg-banner">
                <div className="w-10/12 py-[5%] m-auto">
                    <div className="grid grid-cols-4 gap-6 md:grid-cols-4 lg:grid-cols-5">
                        <div className="col-span-4 md:col-span-2 lg:col-span-2">
                            <p className="text-[11px] text-white text-left mt-4 mb-4">
                                {translate(language, JSON.parse(descr.value), listLangs)}
                            </p>
                            <div className="flex rounded-full bg-[rgba(255,255,255,0.2)] h-10 w-full md:11/12 lg:w-9/12">
                                <input type="text" className="footer-input border-none bg-transparent w-9/12 h-full text-white pl-2 focus:outline-none focus:border-none" placeholder="Email...." />
                                <button className="h-full rounded-full w-3/12 bg-[#fdcd2e] text-[#cf2757]">Subcribe</button>
                            </div>
                        </div>
                        <div className="col-span-4 md:col-span-2 lg:col-span-1">
                            <div className="text-white font-medium">{translate(language, JSON.parse(title.value), listLangs)}</div>
                            <div className="h-0.5 w-3/12 bg-[#fdcd2e] rounded my-2.5"></div>
                            <div className="flex flex-col gap-5">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center justify-center p-1.5 text-[#fdcd2e] border rounded-full text-xs">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div>
                                        <p className="text-xs capitalize text-[#b3b2af] mb-1.5">{translate(language, JSON.parse(phoneTitle.value), listLangs)}</p>
                                        <p className="text-xs text-white">{translate(language, JSON.parse(phone.value), listLangs)}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center justify-center p-1.5 text-[#fdcd2e] border rounded-full text-xs">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div>
                                        <p className="text-xs capitalize text-[#b3b2af] mb-1.5">{translate(language, JSON.parse(emailTitle.value), listLangs)}</p>
                                        <p className="text-xs text-white">{translate(language, JSON.parse(email1.value), listLangs)}</p>
                                        <p className="text-xs text-white">{translate(language, JSON.parse(email2.value), listLangs)}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center justify-center p-1.5 text-[#fdcd2e] border rounded-full text-xs">
                                        <i className="fa-solid fa-location-dot w-[14px] pl-[2px]"></i>
                                    </div>
                                    <div>
                                        <p className="text-xs capitalize text-[#b3b2af] mb-1.5">{translate(language, JSON.parse(locationTitle.value), listLangs)}</p>
                                        <p className="text-xs text-white">{translate(language, JSON.parse(location.value), listLangs)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 md:col-span-2 lg:col-span-1">
                            <div className="text-white font-medium">{translate(language, JSON.parse(title2.value), listLangs)}</div>
                            <div className="h-0.5 w-3/12 bg-[#fdcd2e] rounded my-2.5"></div>
                            <div className="flex flex-col gap-5">
                                {sales.map(s => (
                                    <NavLink key={s.id} to={s.href} className={'text-white text-xs'}>{s.name}</NavLink>
                                ))}
                            </div>
                        </div>
                        <div className="col-span-2 md:col-span-2 lg:col-span-1">
                            <div className="text-white font-medium">{translate(language, JSON.parse(title3.value), listLangs)}</div>
                            <div className="h-0.5 w-3/12 bg-[#fdcd2e] rounded my-2.5"></div>
                            <div className="flex flex-col gap-5">
                                {service.map(s => (
                                    <NavLink key={s.id} to={ROUTES.SERVICES} className={'text-white text-xs'}>{translateName(language, JSON.parse(s.name), listLangs)}</NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#161b7f]">
                <div className="w-11/12 md:w-9/12 py-5 m-auto flex justify-between flex-col md:flex-row gap-4 md:gap-0">
                    <div className="text-white">
                        Copyright &#169; 2023 <span className="text-[#fdcd2e]">APB</span> | All Right Reversed
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="rounded-full bg-[rgba(255,255,255,0.2)] p-2 text-white w-9 h-9 flex items-center justify-center cursor-pointer">
                            <a href={fb.value} target="_blank">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </div>
                        <div className="rounded-full bg-[rgba(255,255,255,0.2)] p-2 text-white w-9 h-9 flex items-center justify-center cursor-pointer">
                            <a href={tw.value} target="_blank">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </div>
                        <div className="rounded-full bg-[rgba(255,255,255,0.2)] p-2 text-white w-9 h-9 flex items-center justify-center cursor-pointer">
                            <a href={ins.value} target="_blank">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                        <div className="rounded-full bg-[rgba(255,255,255,0.2)] p-2 text-white w-9 h-9 flex items-center justify-center">
                            <a href={prt.value} target="_blank">
                                <i className="fa-brands fa-pinterest-p"></i>
                            </a>
                        </div>
                        <div className="rounded-full bg-[rgba(255,255,255,0.2)] p-2 text-white w-9 h-9 flex items-center justify-center cursor-pointer">
                            <a href={ytb.value} target="_blank">
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;