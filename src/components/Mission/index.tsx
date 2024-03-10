import { useState } from "react";

const Mission = () => {
    const [hover, setHover] = useState<number>(1);
    return (
        <section className="w-full p-6">
            <div className="w-11/12 m-auto">
                <div className="w-1/2 flex flex-col items-center m-auto">
                    <div className="bg-[#223cd1] text-white w-fit rounded uppercase px-2.5 py-1.5 mb-4 text-xs">
                        our mission
                    </div>
                    <div className="text-[#ae73db] font-medium text-3xl">Our Mission</div>
                    <p className="text-[11px] text-[#1d1e1f] mt-4 mb-4 text-center">
                        We are committed to providing customers with the best investment and immigration solutions, helping customers achieve their life and career goals in Japan through our professional knowledge and personalized services.
                    </p>
                </div>
                <div className="flex justify-evenly">
                    <div className={`group p-6 shadow-2xl rounded h-[300px] bg-cover bg-center ${hover === 1 ? 'bg-[#4287f5]' : 'bg-mission'} flex flex-col justify-between transition-all`} onMouseEnter={() => setHover(1)} onMouseLeave={() => setHover(0)}>
                        <div className='rounded-full bg-white w-[50px] h-[50px] p-4 flex items-center justify-center text-[#223cd1] text-lg opacity-0 group-hover:opacity-100'>
                            <i className="fa-solid fa-chart-column"></i>
                        </div>
                        <div>
                            <div className='text-xl text-white font-semibold mb-2'>Financial Report Projection</div>
                            <button className='bg-white text-[#cf2757] rounded p-2.5 w-32'>View Details</button>
                        </div>
                    </div>
                    <div className={`group p-6 shadow-2xl rounded h-[300px] bg-cover bg-center ${hover === 2 ? 'bg-[#4287f5]' : 'bg-mission'} flex flex-col justify-between transition-all`} onMouseEnter={() => setHover(2)} onMouseLeave={() => setHover(0)}>
                        <div className='rounded-full bg-white w-[50px] h-[50px] p-4 flex items-center justify-center text-[#223cd1] text-lg opacity-0 group-hover:opacity-100'>
                            <i className="fa-solid fa-chart-column"></i>
                        </div>
                        <div>
                            <div className='text-xl text-white font-semibold mb-2'>Financial Report Projection</div>
                            <button className='bg-white text-[#cf2757] rounded p-2.5 w-32'>View Details</button>
                        </div>
                    </div>
                    <div className={`group p-6 shadow-2xl rounded h-[300px] bg-cover bg-center ${hover === 3 ? 'bg-[#4287f5]' : 'bg-mission'} flex flex-col justify-between transition-all`} onMouseEnter={() => setHover(3)} onMouseLeave={() => setHover(0)}>
                        <div className='rounded-full bg-white w-[50px] h-[50px] p-4 flex items-center justify-center text-[#223cd1] text-lg opacity-0 group-hover:opacity-100'>
                            <i className="fa-solid fa-chart-column"></i>
                        </div>
                        <div>
                            <div className='text-xl text-white font-semibold mb-2'>Financial Report Projection</div>
                            <button className='bg-white text-[#cf2757] rounded p-2.5 w-32'>View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Mission;