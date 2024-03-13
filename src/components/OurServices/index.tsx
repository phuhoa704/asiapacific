import { useRef, useState } from "react";
import CustomHook from "../../utils/CustomHook";

const OurServices = () => {
    const divs = useRef<any[]>([]);
    const [services] = useState([
        { id: 1, name: 'Immigration Consltancy Services', description: 'The company offers comprehensive immigration consultancy services, covering immigration laws and policies in Japan, Vietnam, and Hong Kong. We assist clients in determining the most suitable immigration options bases on their backgrounds and needs, and help with relevant immigration documents and procedures.' },
        { id: 2, name: 'Tax Consltancy Services', description: 'The company offers comprehensive immigration consultancy services, covering immigration laws and policies in Japan, Vietnam, and Hong Kong. We assist clients in determining the most suitable immigration options bases on their backgrounds and needs, and help with relevant immigration documents and procedures.' },
        { id: 3, name: 'Property Consltancy Services', description: 'The company offers comprehensive immigration consultancy services, covering immigration laws and policies in Japan, Vietnam, and Hong Kong. We assist clients in determining the most suitable immigration options bases on their backgrounds and needs, and help with relevant immigration documents and procedures.' },
        { id: 4, name: 'Financial and Investment Consltancy', description: 'The company offers comprehensive immigration consultancy services, covering immigration laws and policies in Japan, Vietnam, and Hong Kong. We assist clients in determining the most suitable immigration options bases on their backgrounds and needs, and help with relevant immigration documents and procedures.' },
        { id: 5, name: 'Legal Consltancy', description: 'The company offers comprehensive immigration consultancy services, covering immigration laws and policies in Japan, Vietnam, and Hong Kong. We assist clients in determining the most suitable immigration options bases on their backgrounds and needs, and help with relevant immigration documents and procedures.' },
        { id: 6, name: 'Customer Support Services', description: 'The company offers comprehensive immigration consultancy services, covering immigration laws and policies in Japan, Vietnam, and Hong Kong. We assist clients in determining the most suitable immigration options bases on their backgrounds and needs, and help with relevant immigration documents and procedures.' },
    ])
    CustomHook(divs);
    return (
        <section className="w-full p-6">
            <div className="w-11/12 m-auto">
                <div className="w-1/2 flex flex-col items-center m-auto">
                    <div className="bg-[#223cd1] text-white w-fit rounded uppercase px-2.5 py-1.5 mb-4 text-xs" ref={(el: any) => el && divs.current.push(el)}>
                        our services
                    </div>
                    <div className="text-[#ae73db] font-medium text-3xl" ref={(el: any) => el && divs.current.push(el)}>Our Services</div>
                    <p className="text-[11px] text-[#1d1e1f] mt-4 mb-4 text-center" ref={(el: any) => el && divs.current.push(el)}>The company provides the following services in the areas of immigration, taxation, and property consultancy, focusing on Japan, Vietnam, and Hong Kong.</p>
                </div>
                <div className="grid grid-cols-6 gap-4">
                    {services.map(s => (
                        <div className="group text-[#223cd1]" key={s.id} ref={(el: any) => el && divs.current.push(el)}>
                            <div className="text-2xl w-10 h-10 group-hover:text-[#cf2757]">
                                <i className="fa-solid fa-list-check"></i>
                            </div>
                            <div className="text-base font-medium group-hover:text-[#cf2757]">{s.name}</div>
                            <p className="text-[10px] text-[#1d1e1f] opacity-0 transition-opacity group-hover:opacity-100">{s.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OurServices;