import { useRef, useState } from "react";
import { Office } from "../../props";
import hongkong from '../../assets/hongkong.png';
import japan from '../../assets/japan.png';
import vietnam from '../../assets/vietnam.png';
import RequestBanner from "../../components/RequestBanner";
import contact1 from '../../assets/contact1.png';
import contact2 from '../../assets/contact2.png';
import contact3 from '../../assets/contact3.png';
import contact4 from '../../assets/contact4.png';
import HeaderBreadscrumb from "../../components/HeaderBreadcrumb";
import CustomHook from "../../utils/CustomHook";

const ContactPage = () => {
    const divs = useRef<any[]>([]);
    const [offices] = useState<Office[]>([
        { id: 1, icon: hongkong, location: 'Hongkong', address: 'Flat/RM 1C, Block A1, 15/F Hang Wai Industry Center, 06 Kin Tai Street, Tuen Mun, NT, Hong Kong' },
        { id: 2, icon: vietnam, location: 'Viet Nam', address: 'P4-SH06, Park 04, Dien Bien Phu Street, Vinhomes Tan Cang, Binh Thanh District, Ho Chi Minh City, Vietnam' },
        { id: 3, icon: japan, location: 'Japan', address: '169-0072 1-1, Okubo, Shinjuku-ku, Tokyo Room 205' },
    ]);
    const [imgs] = useState([
        { id: 1, url: contact1 },
        { id: 2, url: contact2 },
        { id: 3, url: contact3 },
        { id: 4, url: contact4 },
    ])
    CustomHook(divs);
    return (
        <div>
            <HeaderBreadscrumb page="contact"/>
            <div className="w-full">
                <div className="w-8/12 m-auto py-12">
                    <div className="bg-[#223cd1] text-white w-fit rounded capitalize px-2.5 py-1.5 mb-4 text-xs" ref={(el: any) => el && divs.current.push(el)}>
                        asia pacific business consulting and immigration services co., ltd.
                    </div>
                    <p className="text-[#ae73db] text-3xl font-semibold mb-4" ref={(el: any) => el && divs.current.push(el)}>Contact Our Team</p>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-1">
                            <div className="text-xs text-left mb-4" ref={(el: any) => el && divs.current.push(el)}>
                                Leverage agile frameworks to provide a robust sysnosis for strategy foster collaborative thinking to further the overall value.
                            </div>
                            <div className="flex flex-col gap-4">
                                {offices.map(o => (
                                    <div key={o.id} className="grid grid-cols-4 gap-2" ref={(el: any) => el && divs.current.push(el)}>
                                        <div className="col-span-1 flex items-center justify-center">
                                            <div className="w-[50px] h-[50px] bg-[#ae73db] rounded-full p-3">
                                                <img src={o.icon} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-span-3 text-left">
                                            <p className="text-[#ae73db] text-xs font-semibold">{o.location}</p>
                                            <p className="text-xs">{o.address}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-span-2">
                            <form>
                                <div className="grid grid-cols-2 gap-4" ref={(el: any) => el && divs.current.push(el)}>
                                    <div className="col-span-1">
                                        <input className="p-4 text-xs border-[#ae73db] border text-[#ae73db] bg-white w-full rounded" type="text" placeholder="Name*" />
                                    </div>
                                    <div className="col-span-1">
                                        <input className="p-4 text-xs border-[#ae73db] border text-[#ae73db] bg-white w-full rounded" type="text" placeholder="Surname" />
                                    </div>
                                    <div className="col-span-1">
                                        <input className="p-4 text-xs border-[#ae73db] border text-[#ae73db] bg-white w-full rounded" type="text" placeholder="Phone Number*" />
                                    </div>
                                    <div className="col-span-1">
                                        <input className="p-4 text-xs border-[#ae73db] border text-[#ae73db] bg-white w-full rounded" type="text" placeholder="Email Address" />
                                    </div>
                                    <div className="col-span-2">
                                        <textarea className="p-4 text-xs border-[#ae73db] border text-[#ae73db] bg-white w-full rounded" rows={3} placeholder="Consultation Content" />
                                    </div>
                                    <button className='bg-[#fdcd2e] text-[#cf2757] text-xs rounded p-2.5 w-fit'>Submit message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mb-4">
                <div className="w-8/12 m-auto grid grid-cols-4 h-[150px] border-[#ae73db] border" ref={(el: any) => el && divs.current.push(el)}>
                    {imgs.map(i => (
                        <div key={i.id} className="col-span-1 bg-center bg-cover border-[#ae73db] border relative" style={{ backgroundImage: `url(${i.url})`}}>
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