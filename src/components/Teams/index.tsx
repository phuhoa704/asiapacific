import { useState } from 'react';
import workplace1 from '../../assets/workplace1.jpg';
import workplace2 from '../../assets/workplace2.jpg';
import workplace3 from '../../assets/workplace3.jpg';
import workplace4 from '../../assets/workplace4.png';
import banner from '../../assets/banner.jpg';
import message from '../../assets/message.png';

const Teams = () => {
    const [imgs] = useState([
        { id: 1, url: workplace1 },
        { id: 2, url: workplace2 },
        { id: 3, url: workplace3 },
        { id: 4, url: workplace4 },
    ])
    return (
        <section className="w-full p-6">
            <div className="w-11/12 m-auto">
                <div className="w-1/2 flex flex-col items-center m-auto">
                    <div className="bg-[#223cd1] text-white w-fit rounded uppercase px-2.5 py-1.5 mb-4 text-xs">
                        team members
                    </div>
                    <div className="text-[#ae73db] font-medium text-3xl">Team Members</div>
                    <p className="text-[11px] text-[#1d1e1f] mt-4 mb-4 text-center">
                        Our team consists of a group of professional, passionate and experienced relocation consultants, Our team members have in-depth knowledge in the field of Japanese immigration and are fimiliar with Japanese laws and procedures, allowing them to provide the most professional services to our clients
                    </p>
                </div>
            </div>
            <div className="w-9/12 grid grid-cols-4 gap-4 h-[250px] m-auto">
                {imgs.map(i => (
                    <div key={i.id} className="col-span-1 bg-[#23b830] bg-cover bg-center border border-[#ae73db] border-4 rounded-xl" style={{ backgroundImage: `url(${i.url})`}}></div>
                ))}
            </div>
            <div className="w-8/12 m-auto h-[100px] flex justify-between mt-8 shadow-primary rounded-xl p-8" style={{ backgroundImage: `url(${banner})`}}>
                <div className="flex items-center">
                    <img className='w-[50px] mr-4' src={message} alt="" />
                    <div className='text-white font-semibold'>
                        <p>Let's Request A Schedule For</p>
                        <p>Free Consultation</p>
                    </div>
                </div>
                <div className='text-right'>
                    <p className='text-white text-xs'>Free Consultation</p>
                    <p className='drop-shadow-lg text-[#ebba34] text-lg font-bold tracking-widest'>(+85) 223411444</p>
                </div>
            </div>
        </section>
    );
}

export default Teams;