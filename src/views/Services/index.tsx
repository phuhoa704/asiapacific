import { useRef, useState } from "react";
import HeaderBreadscrumb from "../../components/HeaderBreadcrumb";
import CustomHook from "../../utils/CustomHook";
import passport from '../../assets/passport2.jpg';
import tax from '../../assets/tax.jpg';
import court from '../../assets/court.jpg';
import ServiceCard from "../../components/ServiceCard";
import ServiceForm from "../../components/ServiceForm";
import RequestBanner from "../../components/RequestBanner";
import { ROUTES } from "../../configs/routes.config";

const Services = () => {
    const [services] = useState([
        { id: 1, image: passport, icon: '', title: 'Immigration Consltancy Services', href: ROUTES.IMMIGRATION_SERVICES},
        { id: 2, image: tax, icon: '', title: 'Tax Consltancy Services', href: ROUTES.TAX_SERVICES },
        { id: 3, image: court, icon: '', title: 'Legal Consltancy Services', href: ROUTES.CONSLTANCY_SERVICES },
    ])
    const divs = useRef<any[]>([]);
    CustomHook(divs);
    return (
        <div>
            <HeaderBreadscrumb page="services" tab="services" />
            <div className="w-full">
                <div className="w-8/12 m-auto py-12">
                    <div className="flex flex-col items-center m-auto">
                        <div className="bg-[#223cd1] text-white w-fit rounded uppercase px-2.5 py-1.5 mb-4 text-xs" ref={(el: any) => el && divs.current.push(el)}>
                            asia pacific business consulting and immigration services co., ltd.
                        </div>
                        <div className="text-[#ae73db] font-medium text-3xl text-center" ref={(el: any) => el && divs.current.push(el)}>Asia Pacific Could Provide The Service</div>
                    </div>
                    <div className="grid grid-cols-3 gap-8 mt-4">
                        {services.map(s => (
                            <div className="col-span-1">
                                <ServiceCard item={s}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#fcf7f7]">
                <div className="w-7/12 m-auto py-12">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1" ref={(el: any) => el && divs.current.push(el)}>
                            <ServiceForm />
                        </div>
                        <div className="col-span-1 p-6">
                            <div className="bg-[#223cd1] text-white w-fit rounded uppercase px-2.5 py-1.5 mb-4 text-xs" ref={(el: any) => el && divs.current.push(el)}>
                                make appointment
                            </div>
                            <div className="text-[#ae73db] font-medium text-3xl capitalized" ref={(el: any) => el && divs.current.push(el)}>Get Appointment Meet For Consultation</div>
                            <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                                Asia Pacific offers full range of consultancy & training methods for data analysis, business analysis and strategic ways for business. It is an opportunity for new ventures.
                            </p>
                            <div className="text-xs mt-6 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                                Or You May <span className="text-[#ae73db]">Call Us</span> For Appointment
                            </div>
                            <div className="mt-4 flex gap-4 text-[#ae73db]" ref={(el: any) => el && divs.current.push(el)}>
                                <div className="h-5 w-5 flex items-center justify-center text-white rounded-full bg-[#ae73db] p-3 text-xs">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <span>(+85) 22341 1444</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mb-4">
                <RequestBanner />
            </div>
        </div>
    );
}

export default Services;