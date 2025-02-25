import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { ASSETS_API } from '../../configs/apis.config';
import { changeLang } from '../../redux/actions/Langs';
import { translate } from '../../helpers/translator';
import { Home } from '../../props';
import { ABOUT_CONSTANTS, CONTACT_CONSTANTS, HEADER_CONSTANTS, HOME_CONSTANTS, NEWS_CONSTANTS, REGION_CONSTANTS, SERVICE_CONSTANTS } from '../../configs/constants.config';
import { ROUTES } from '../../configs/routes.config';
import MegaMenu from '../MegaMenu';
import { getMenu } from '../../redux/actions/Home';

const Header = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { listLangs, currentLang, language } = useAppSelector(state => state.lang);
    const { menu } = useAppSelector(state => state.home);
    const { header, logo } = useAppSelector(state => state.home);
    const { socialMedia } = useAppSelector(state => state.social);
    const [home, setHome] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [service, setService] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [about, setAbout] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [region, setRegion] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [news, setNews] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [contact, setContact] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [navLinks] = useState([
        {
            id: 1, name: 'Home', href: '/', children: []
        },
        {
            id: 2, name: 'About Us', href: '/about', children: []
        },
        {
            id: 3, name: 'Services', href: '/services', children: [
                { name: 'Test', href: '/' }
            ]
        },
        {
            id: 4, name: 'Region', href: '/region', children: []
        },
        {
            id: 5, name: 'News', href: '/news', children: []
        },
        {
            id: 6, name: 'Contact', href: '/contact', children: []
        },
    ])
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [email, setEmail] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [address, setAddress] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [time, setTime] = useState<Home>({
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
    const [fb, setFb] = useState<any>({
        created_at: '',
        id: 0,
        key: '',
        name: '',
        updated_at: '',
        value: ''
    })
    const [ins, setIns] = useState<any>({
        created_at: '',
        id: 0,
        key: '',
        name: '',
        updated_at: '',
        value: ''
    })
    const [tw, setTw] = useState<any>({
        created_at: '',
        id: 0,
        key: '',
        name: '',
        updated_at: '',
        value: ''
    })
    const [linkedIn, setLinkedIn] = useState<any>({
        created_at: '',
        id: 0,
        key: '',
        name: '',
        updated_at: '',
        value: ''
    })
    const [showNavbar, setShowNavbar] = useState<boolean>(false);
    const [languageTab, setLanguageTab] = useState<boolean>(false);
    useEffect(() => {
        if (header.length > 0) {
            //email
            const findEmail = header.find(h => h.key === HEADER_CONSTANTS.EMAIL);
            setEmail(findEmail ? findEmail : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //address
            const findAddress = header.find(h => h.key === HEADER_CONSTANTS.ADDRESS);
            setAddress(findAddress ? findAddress : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //address
            const findTime = header.find(h => h.key === HEADER_CONSTANTS.TIME);
            setTime(findTime ? findTime : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //address
            const findButton = header.find(h => h.key === HEADER_CONSTANTS.BUTTON);
            setButton(findButton ? findButton : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
        }
    }, [header])
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
            //linkedin
            const linked = socialMedia.find(s => s.key === 'LinkedIn');
            if (linked) {
                setLinkedIn(linked)
            }
        }
    }, [socialMedia])
    useEffect(() => {
        dispatch(getMenu([ABOUT_CONSTANTS.BREADSCRUM, NEWS_CONSTANTS.BREADSCRUM, REGION_CONSTANTS.BREADSCRUM, CONTACT_CONSTANTS.BREADCRUM, HOME_CONSTANTS.BREADSCRUM, SERVICE_CONSTANTS.BREADSCRUM]))
    }, [])
    useEffect(() => {
        if (menu.length > 0) {
            //about
            const findAbout = menu.find(h => h.key === ABOUT_CONSTANTS.BREADSCRUM);
            setAbout(findAbout ? findAbout : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //region
            const findRegion = menu.find(h => h.key === REGION_CONSTANTS.BREADSCRUM);
            setRegion(findRegion ? findRegion : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //about
            const findNews = menu.find(h => h.key === NEWS_CONSTANTS.BREADSCRUM);
            setNews(findNews ? findNews : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //contact
            const findContact = menu.find(h => h.key === CONTACT_CONSTANTS.BREADCRUM);
            setContact(findContact ? findContact : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //home
            const findHome = menu.find(h => h.key === HOME_CONSTANTS.BREADSCRUM);
            setHome(findHome ? findHome : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //service
            const findService = menu.find(h => h.key === SERVICE_CONSTANTS.BREADSCRUM);
            setService(findService ? findService : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
        }
    }, [menu])
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = () => {
        const header = document.querySelector('.header');
        const scrollTop = window.scrollY;
        if (header) {
            scrollTop >= 150 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
        }
    };
    return (
        <div className="header w-11/12 m-auto max-sm:w-full lg:w-11/12 xl:w-10/12 relative">
            <div className="top-header flex justify-between bg-[#223cd1] text-sm px-6 py-2 rounded-b-[30px] w-11/12 m-auto max-sm:w-full max-sm:text-xs sm:w-11/12 sm:text-xs lg:w-11/12 gap-2.5">
                <div className="flex max-sm:flex-col max-sm:items-start sm:flex-col sm:items-start lg:flex-row">
                    <div className="flex items-center">
                        <i className="fa-solid fa-envelope text-[#f1c853]"></i>
                        <span className="text-white ml-2">{translate(language, JSON.parse(email.value), listLangs)}</span>
                    </div>
                    <div className="flex items-center ml-2 max-sm:ml-0 sm:ml-0 lg:ml-2">
                        <i className="fa-solid fa-location-dot text-[#f1c853]"></i>
                        <span className="text-white ml-2">{translate(language, JSON.parse(address.value), listLangs)}</span>
                    </div>
                </div>
                <div className="flex flex-col items-end text-white sm:flex-col sm:items-end lg:flex-row lg:items-center">
                    <span className="mr-0 lg:mr-2 max-sm:text-right max-sm:break-all max-sm:whitespace-pre">{translate(language, JSON.parse(time.value), listLangs)}</span>
                    <div>
                        <a href={fb.value} target='_blank'>
                            <i className="fa-brands fa-facebook-f mr-2.5 cursor-pointer"></i>
                        </a>
                        <a href={ins.value} target='_blank'>
                            <i className="fa-brands fa-instagram mr-2.5 cursor-pointer"></i>
                        </a>
                        <a href={tw.value} target='_blank'>
                            <i className="fa-brands fa-twitter mr-2.5 cursor-pointer"></i>
                        </a>
                        <a href={linkedIn.value} target='_blank'>
                            <i className="fa-brands fa-linkedin-in mr-2.5 cursor-pointer"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-between py-2 px-1.5">
                <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
                    <div className='w-full'>
                        <img src={`${ASSETS_API}${logo.value}`} alt="" className='w-full' />
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="items-center mr-4 text-sm hidden lg:flex">
                        <NavLink to={ROUTES.HOME} className={(pathname === ROUTES.HOME) ? 'text-[#cf2757] mr-3 font-medium lg:text-xs xl:text-sm capitalize' : 'text-[#2328ba] mr-3 font-medium lg:text-xs xl:text-sm capitalize'}>
                            {translate(language, JSON.parse(home.value), listLangs)}
                        </NavLink>
                        <NavLink to={ROUTES.ABOUT} className={(pathname === ROUTES.ABOUT) ? 'text-[#cf2757] mr-3 font-medium lg:text-xs xl:text-sm capitalize' : 'text-[#2328ba] mr-3 font-medium lg:text-xs xl:text-sm capitalize'}>
                            {translate(language, JSON.parse(about.value), listLangs)}
                        </NavLink>
                        <NavLink to={ROUTES.SERVICES} className={(pathname === ROUTES.SERVICES) ? 'text-[#cf2757] mr-3 font-medium lg:text-xs xl:text-sm capitalize' : 'text-[#2328ba] mr-3 font-medium lg:text-xs xl:text-sm capitalize'} onMouseEnter={() => setShowMenu(true)}>
                            {translate(language, JSON.parse(service.value), listLangs)}
                            <i className="fa-solid fa-chevron-down text-xs ml-1"></i>
                        </NavLink>
                        <NavLink to={ROUTES.REGION} className={(pathname === ROUTES.REGION) ? 'text-[#cf2757] mr-3 font-medium lg:text-xs xl:text-sm capitalize' : 'text-[#2328ba] mr-3 font-medium lg:text-xs xl:text-sm capitalize'}>
                            {translate(language, JSON.parse(region.value), listLangs)}
                        </NavLink>
                        <NavLink to={ROUTES.NEWS} className={(pathname === ROUTES.NEWS) ? 'text-[#cf2757] mr-3 font-medium lg:text-xs xl:text-sm capitalize' : 'text-[#2328ba] mr-3 font-medium lg:text-xs xl:text-sm capitalize'}>
                            {translate(language, JSON.parse(news.value), listLangs)}
                        </NavLink>
                        <NavLink to={ROUTES.CONTACT} className={(pathname === ROUTES.CONTACT) ? 'text-[#cf2757] mr-3 font-medium lg:text-xs xl:text-sm capitalize' : 'text-[#2328ba] mr-3 font-medium lg:text-xs xl:text-sm capitalize'}>
                            {translate(language, JSON.parse(contact.value), listLangs)}
                        </NavLink>
                    </div>
                    <div className="flex items-center mr-4 hidden lg:block">
                        <button className='bg-[#fdcd2e] text-[#cf2757] rounded p-2.5 xl:text-sm lg:text-xs' onClick={() => navigate(ROUTES.SERVICES)}>{translate(language, JSON.parse(button.value), listLangs)}</button>
                    </div>
                    <div className="flex items-end relative lg:items-center cursor-pointer" onClick={() => setLanguageTab(!languageTab)}>
                        <button className="text-[#fdcd2e] bg-[#f5e2d7] flex items-center px-2.5 py-2 rounded mr-2 sm:mr-0">
                            <i className="fa-solid fa-globe"></i>
                            <img src={`${ASSETS_API}${currentLang.image}`} alt="" className='w-[25px] lg:w-[20px] xl:w-[25px] ml-2' />
                        </button>
                        <ul className={`absolute top-11 right-0 z-10 text-gray-700 pt-1 w-40 ${languageTab ? 'block' : 'hidden'}`}>
                            {listLangs.map(l => (
                                <li className="" key={l.key}>
                                    <div className="cursor-pointer bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap flex items-center" onClick={() => {
                                        dispatch(changeLang(l))
                                    }}><img src={`${ASSETS_API}${l.image}`} alt="" className='w-[25px] mr-2' />{l.name}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="ml-2 lg:hidden">
                        <button className='bg-[#fdcd2e] text-[#cf2757] rounded py-2.5 px-3' onClick={() => setShowNavbar(!showNavbar)}><i className="fa-solid fa-align-justify"></i></button>
                    </div>
                </div>
            </div>
            <div className={`absolute z-10 left-0 flex-col gap-4 ${showNavbar ? 'flex' : 'hidden'} bg-white w-full py-2 px-4 shadow-lg`}>
                <NavLink to={ROUTES.SERVICES} onClick={() => setShowNavbar(false)} className='text-[#2328ba] font-medium'>{translate(language, JSON.parse(button.value), listLangs)}</NavLink>
                {navLinks.map(n => (
                    <NavLink key={n.id} to={n.href} onClick={() => setShowNavbar(false)} className={(pathname === n.href) ? 'text-[#cf2757] mr-3 font-medium' : 'text-[#2328ba] mr-3 font-medium'}>
                        {n.name}
                        {(n.children.length > 0) && <i className="fa-solid fa-chevron-down text-xs ml-1"></i>}
                    </NavLink>
                ))}
            </div>
            <MegaMenu show={showMenu} mouseLeave={() => setShowMenu(false)} />
        </div>
    );
}

export default Header;