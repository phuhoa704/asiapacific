import { useEffect, useRef, useState } from "react";
import HeaderBreadscrumb from "../../components/HeaderBreadcrumb";
import CustomHook from "../../utils/CustomHook";
import { TaxService } from "../../props";
import TaxServiceCard from "../../components/TaxServiceCard";
import RequestBanner from "../../components/RequestBanner";

const TaxServices = () => {
    const divs = useRef<any[]>([]);
    CustomHook(divs);
    const [sample] = useState<TaxService[]>([
        {id: '01', title: 'Consulting Services + Bookkeeping', desc: '1. Consulting services: Preparation of data and supporting service for business required, such as financial flow analysis, various sales reports, tax...'},
        {id: '02', title: 'Consulting Services + Accounting Data Audit', desc: '1. Consulting services: Preparation of data and supporting service for business required, such as financial flow analysis, various sales reports, tax...'},
        {id: '03', title: 'Settlement Services', desc: 'It includes the preparation of statement of account, declaration of corporate tax, local tax returns, accounting statement, general statement, fixed asset depreciation statement,...'},
        {id: '04', title: 'Declaration of consumption tax', desc: 'Applying for the tax refund of simplified tax system, principle tax, consumption tax'},
        {id: '05', title: 'Declaration of tax a pro forma basis', desc: 'Perform tax declaration on a Pro Forma Basis.'},
        {id: '06', title: 'Year-End Tax Adjustment', desc: 'Calculation of withholding tax and issuing the withholding tax form'},
        {id: '07', title: 'Payroll service', desc: 'Year-end salary adjustment Submitting and withholding tax form to goverment department.'},
        {id: '08', title: 'Statutory service', desc: 'Preparation of payment bill. Prepares and declares the statutory records to the tax office'},
        {id: '09', title: 'Depreciated property tax', desc: 'Declaration of the depreciated property tax to the government department'},
    ])
    const [individualSample] = useState<TaxService[]>([
        {id: '01', title: 'Declaration of real estate income', desc: 'The settlement and the declaration of the rented real estate'},
        {id: '02', title: 'Declaration of income from share transfer', desc: 'Declaration when there is selling of real estate or selling or transferring the shares'},
        {id: '03', title: 'Others', desc: 'Application of tax refund of medical expenses that qualified for tax deductions or the housing loan deductions, etc.'},
    ])
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div>
            <HeaderBreadscrumb page="services" tab="tax consltancy services" />
            <div className="w-full">
                <div className="w-8/12 m-auto py-12">
                    <div className="bg-[#223cd1] text-white w-fit rounded uppercase px-2.5 py-1.5 mb-4 text-xs" ref={(el: any) => el && divs.current.push(el)}>
                        tax consltancy services
                    </div>
                    <div className="text-[#ae73db] font-medium text-3xl" ref={(el: any) => el && divs.current.push(el)}>Japan Accounting And Tax Services</div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        Japan is divided into national taxes and local taxes. Among them, national tax includes corporate tax, special local coporate tax, consumption tax, etc, while local tax includes enterprise tax, coporate inhabitant tax, local consumption tax, fixed asset tax, depreciated property tax, etc.
                    </p>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        According to the Japan tax law, various settlements and deciarations are required to process at the end of the year. Accounting and tax deciarations are combersome and complicated tasks for individuals that considering establishing a company or for the operation of established companies. In order to allow customers to devote all their energy to the company's operations. Asia Pacific could provide client the services of tax consultants, accounting and bookkeeping and various tax deciaration services.
                    </p>
                    <div className="w-9/12 m-auto py-10 grid grid-cols-3 gap-8">
                        {sample.map(s => (
                            <div className="col-span-1" ref={(el: any) => el && divs.current.push(el)}>
                                <TaxServiceCard item={s}/>
                            </div>
                        ))}
                    </div>
                    <div className="text-[#ae73db] font-medium text-3xl my-6" ref={(el: any) => el && divs.current.push(el)}>Individual Side</div>
                    <div className="w-9/12 m-auto py-10 grid grid-cols-3 gap-8">
                        {individualSample.map(s => (
                            <div className="col-span-1" ref={(el: any) => el && divs.current.push(el)}>
                                <TaxServiceCard item={s}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mb-4">
                    <RequestBanner />
                </div>
            </div>
        </div>
    );
}

export default TaxServices;