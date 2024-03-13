import { useRef, useState } from "react";
import HeaderBreadscrumb from "../../components/HeaderBreadcrumb";
import CustomHook from "../../utils/CustomHook";
import { Region } from "../../props";
import vietnam from '../../assets/vietnam.jpg';
import japan from '../../assets/japan.jpg';
import hongkong from '../../assets/hongkong.jpg';
import RequestBanner from "../../components/RequestBanner";

const RegionPage = () => {
    const divs = useRef<any[]>([]);
    CustomHook(divs);
    const [active, setActive] = useState<Region>({
        id: 1,
        image: vietnam,
        location: 'viet nam',
        descr: 'Partner development and understanding of the local business environment. Vietnam, as an emerging market in Southeast Asia, has attracted mani foreign investors. They may need marker analysis'
    });
    const [regions] = useState<Region[]>([
        { id: 1, image: vietnam, location: 'viet nam', descr: 'Partner development and understanding of the local business environment. Vietnam, as an emerging market in Southeast Asia, has attracted mani foreign investors. They may need marker analysis' },
        { id: 2, image: japan, location: 'japan', descr: 'Many foreign businesses wish to enter the Japanese market, and they may need market analysis, business opportunity evaluation, and understanding of local business culture' },
        { id: 3, image: hongkong, location: 'hongkong', descr: "As Asia's international financial center, Hong Kong has attracted many companies to set up business. They may need partner development, business negotiation support and Hong Kong market entry strategies" }
    ]);
    return (
        <div>
            <HeaderBreadscrumb page="region" />
            <div className="w-full">
                <div className="w-8/12 m-auto py-12">
                    <div className="bg-[#223cd1] text-white w-fit rounded capitalize px-2.5 py-1.5 mb-4 text-xs" ref={(el: any) => el && divs.current.push(el)}>
                        asia pacific business consulting and immigration services co., ltd.
                    </div>
                    <div className="grid grid-cols-2 gap-4 py-8">
                        <div className="col-span-1">
                            <p className="text-[#ae73db] text-3xl font-semibold mb-4 capitalize" ref={(el: any) => el && divs.current.push(el)}>Business network</p>
                        </div>
                        <div className="col-span-1">
                            <div className="text-xs text-left" ref={(el: any) => el && divs.current.push(el)}>
                                We have established an extensive business network in Asia and maintain close cooperation with local government agencies, chambers of commerce, law firms and other business service organizations. Our partnerships help us provide our clients with comprehensive business and immigration services and ensure we have access to the latest market information and legal andregulatory developments.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-8">
                        <div className="w-9/12 grid grid-cols-2 gap-8">
                            <div className="col-span-1" ref={(el: any) => el && divs.current.push(el)}>
                                <div className="w-full h-[350px] bg-center bg-cover rounded-lg shadow-primary transition-all" style={{ backgroundImage: `url(${active.image})` }}>
                                </div>
                            </div>
                            <div className="col-span-1 flex items-center justify-center transition-all" ref={(el: any) => el && divs.current.push(el)}>
                                <div className="flex flex-col gap-4">
                                    <h4 className="text-[#cf2757] uppercase text-3xl font-semibold">{active.location}</h4>
                                    <p className="text-xs">{active.descr}</p>
                                    <span className="text-xs text-[#ae73db]"><i className="fa-solid fa-arrow-right"></i>&nbsp;Learn Detail</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-3/12 flex">
                            {regions.filter(f => f.id !== active.id).map(r => (
                                <div className="h-full border-l px-4 flex flex-col justify-between" key={r.id} ref={(el: any) => el && divs.current.push(el)}>
                                    <button className="text-white bg-[#ae73db] flex justify-center items-center p-2.5 rounded shadow-lg" onClick={() => setActive(r)}>
                                        <i className="fa-solid fa-arrow-left"></i>
                                    </button>
                                    <span className="uppercase text-lg text-[#cf2757] orientation-mixed writing-mode-vertical transition-all">{r.location}</span>
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