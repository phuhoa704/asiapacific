import { useState } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    const [sales] = useState([
        { id: 1, name: 'About Us', href: '' },
        { id: 2, name: 'Services', href: '' },
        { id: 3, name: 'Pages', href: '' },
        { id: 4, name: 'Blogs', href: '' },
        { id: 5, name: 'Contact', href: '' },
    ]);
    const [services] = useState([
        { id: 1, name: 'Immigration Consultancy Services', href: '' },
        { id: 2, name: 'Tax Consultancy Services', href: '' },
        { id: 3, name: 'Property Consultancy Services', href: '' },
        { id: 4, name: 'Financial and investment Consultancy', href: '' },
        { id: 5, name: 'Legal Consultancy', href: '' },
        { id: 6, name: 'Customer support Services', href: '' },
    ])
    return (
        <>
            <div className="w-full bg-banner">
                <div className="w-10/12 py-[5%] m-auto">
                    <div className="grid grid-cols-5 gap-6">
                        <div className="col-span-2">
                            <p className="text-[11px] text-white text-left mt-4 mb-4">
                                Professional and high-quality service is the only way for us to win the trust of the market and customers. For this reason, we solemnly promise that as long as customers take the first step to cooperate with us, we will spare no effort to help customers succeed and achieve and win-win situation.
                            </p>
                            <div className="flex rounded-full bg-[rgba(255,255,255,0.2)] h-10 w-9/12">
                                <input type="text" className="footer-input border-none bg-transparent w-9/12 h-full text-white pl-2 focus:outline-none focus:border-none" placeholder="Email...." />
                                <button className="h-full rounded-full w-3/12 bg-[#fdcd2e] text-[#cf2757]">Subcribe</button>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="text-white font-medium">Contact APB</div>
                            <div className="h-0.5 w-3/12 bg-[#fdcd2e] rounded my-2.5"></div>
                            <div className="flex flex-col gap-5">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center justify-center p-1.5 text-[#fdcd2e] border rounded-full text-xs">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div>
                                        <p className="text-xs capitalize text-[#b3b2af] mb-1.5">looking for consultation</p>
                                        <p className="text-xs text-white">(+85) 22341 1444</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center justify-center p-1.5 text-[#fdcd2e] border rounded-full text-xs">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div>
                                        <p className="text-xs capitalize text-[#b3b2af] mb-1.5">send us email</p>
                                        <p className="text-xs text-white">info@AsiaPacificcpa.com</p>
                                        <p className="text-xs text-white">enquiries@AsiaPcificcpa.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center justify-center p-1.5 text-[#fdcd2e] border rounded-full text-xs">
                                        <i className="fa-solid fa-location-dot w-[14px] pl-[2px]"></i>
                                    </div>
                                    <div>
                                        <p className="text-xs capitalize text-[#b3b2af] mb-1.5">visit our location</p>
                                        <p className="text-xs text-white">1-2-1205 Okubo, Shinjuku-ku, Tokyo 169-0072</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="text-white font-medium">Sales Info</div>
                            <div className="h-0.5 w-3/12 bg-[#fdcd2e] rounded my-2.5"></div>
                            <div className="flex flex-col gap-5">
                                {sales.map(s => (
                                    <NavLink key={s.id} to={s.href} className={'text-white text-xs'}>{s.name}</NavLink>
                                ))}
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="text-white font-medium">Our Services</div>
                            <div className="h-0.5 w-3/12 bg-[#fdcd2e] rounded my-2.5"></div>
                            <div className="flex flex-col gap-5">
                                {services.map(s => (
                                    <NavLink key={s.id} to={s.href} className={'text-white text-xs'}>{s.name}</NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#161b7f]">
                <div className="w-10/12 py-5 m-auto flex justify-between">
                    <div className="text-white">
                        Copyright &#169; 2023 <span className="text-[#fdcd2e]">APB</span> | All Right Reversed
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="rounded-full bg-[rgba(255,255,255,0.2)] p-2 text-white w-9 h-9 flex items-center justify-center cursor-pointer">
                            <i className="fa-brands fa-facebook-f"></i>
                        </div>
                        <div className="rounded-full bg-[rgba(255,255,255,0.2)] p-2 text-white w-9 h-9 flex items-center justify-center cursor-pointer">
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                        <div className="rounded-full bg-[rgba(255,255,255,0.2)] p-2 text-white w-9 h-9 flex items-center justify-center cursor-pointer">
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                        <div className="rounded-full bg-[rgba(255,255,255,0.2)] p-2 text-white w-9 h-9 flex items-center justify-center">
                            <i className="fa-brands fa-pinterest-p"></i>
                        </div>
                        <div className="rounded-full bg-[rgba(255,255,255,0.2)] p-2 text-white w-9 h-9 flex items-center justify-center cursor-pointer">
                            <i className="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;