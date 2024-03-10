import { useState } from "react";
import ProcessBar from "../ProcessBar";
import financial1 from '../../assets/financial1.png';
import financial2 from '../../assets/financial2.jpg';
import financial3 from '../../assets/financial3.jpg';

function ProfessionalKnowledge() {
    const [process] = useState([
        {id: 1, title: 'Financial Reporting', percent: 92 },
        {id: 2, title: 'Management Evaluation', percent: 80 },
        {id: 3, title: 'Investment Financing', percent: 96 },
    ])
    return (
        <section className="relative w-full h-[550px] bg-banner py-[50px]">
            <div className="snow"></div>
            <div className="w-9/12 m-auto grid grid-cols-2 gap-4">
                <div className="col-span-1 grid grid-cols-2 gap-4">
                    <div className="col-span-1 grid grid-rows-2 gap-6">
                        <div className="shadow-secondary h-full col-span-1 rounded w-11/12 bg-cover bg-center" style={{ backgroundImage: `url(${financial1})`}}>
                        </div>
                        <div className="shadow-secondary h-full col-span-1 rounded w-11/12 bg-cover bg-center"  style={{ backgroundImage: `url(${financial3})`}}>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="shadow-secondary h-[300px] mt-12 col-span-1 rounded w-10/12 bg-cover bg-center" style={{ backgroundImage: `url(${financial2})`}}>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 text-left pl-10">
                    <div className="text-[#223cd1] bg-white w-fit rounded uppercase px-2.5 py-1.5 mb-4 text-xs">
                        professional knowledge
                    </div>
                    <span className="text-white font-medium text-3xl uppercase">professional knowledge</span>
                    <p className="text-[12px] text-white mt-4 mb-4">Our team has extensive investment and immigration consulting experience. We have an in-depth understanding of Japan's investment and immigration laws and procedures and can provide customers with accurate and practical advice and support.</p>
                    <div className="flex flex-col gap-8">
                        {process.map(p => (
                            <ProcessBar title={p.title} percent={p.percent} key={p.id}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProfessionalKnowledge;