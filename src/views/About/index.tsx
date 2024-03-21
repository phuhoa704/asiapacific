import { useRef, useState } from "react";
import HeaderBreadscrumb from "../../components/HeaderBreadcrumb";
import RequestBanner from "../../components/RequestBanner";
import './styles.scss'
import { Step } from "../../props";
import VerticalSteps from "../../components/VerticalSteps";
import meeting from '../../assets/meeting.jpg';
import CustomHook from "../../utils/CustomHook";

const About = () => {
    const divs = useRef<any[]>([]);
    const [steps] = useState<Step[]>([
        { id: 1, title: 'Our mission', descr: 'We are committed to providing customers with the best investment and immigration solutions, helping customers achieve their life and career goals in Japan through our professional knowledge and personalized services.'},
        { id: 2, title: 'Professional team', descr: 'Our team is comprised of experts with extensive business and immigration law expertise, including market analysts, business consultants, immigration lawyers and cross-cultural experts. Our team has extensive experience in the Asian business and immigration fields and is able to provide customers with tailor-made services in a professional and dedicated manner.'},
        { id: 3, title: 'Expertise', descr: "Our team has extensive investment and immigration consulting experience. We have an in-depth understanding of Japan's investment and immigration laws and procedures and can provide customers with accurate and practical advice and support.."},
        { id: 4, title: 'Business network', descr: 'We have established an extensive business network in Asia and maintain close cooperation with local government agencies, chambers of commerce, law firms and other business service organizations. Our partnerships help us provide our clients with comprehensive business and immigration services and ensure we have access to the latest market information and legal and regulatory developments.'},
    ])
    CustomHook(divs);
    return (
        <div>
            <HeaderBreadscrumb page="about us" tab="about us" />
            <div className="w-full">
                <div className="w-8/12 m-auto py-12">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <div className="bg-[#223cd1] text-white w-fit rounded capitalize px-2.5 py-1.5 mb-4 text-xs" ref={(el: any) => el && divs.current.push(el)}>
                                asia pacific business consulting and immigration services co., ltd.
                            </div>
                            <span className="text-[#ae73db] font-medium text-3xl" ref={(el: any) => el && divs.current.push(el)}>Focus on providing high-quality investment and immigration consulting services to international customers</span>
                        </div>
                        <div className="col-span-1">
                            <div className="text-left text-xs text-[#393b3a] flex items-center" ref={(el: any) => el && divs.current.push(el)}>
                                Asia Pacific business consultant Company Ltd is a company focused on providing high-quality investment and immigration consulting services to international customers. Our mission is to help customers realize their dreams of investing and immigrating to Japan. Through our rich experience and professional knowledge, we provide customers with a full range of immigration consulting services..
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="col-span-1">
                            <div className="w-full rounded-tl-[56px] rounded-br-[56px] h-[500px] bg-center bg-cover" style={{ backgroundImage: `url(${meeting})` }} ref={(el: any) => el && divs.current.push(el)}>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <VerticalSteps steps={steps} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full pb-12">
                <RequestBanner />
            </div>
        </div>
    );
}

export default About;