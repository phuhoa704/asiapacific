import { useRef } from 'react';
import banner from '../../assets/banner.jpg';
import message from '../../assets/message.png';
import CustomHook from '../../utils/CustomHook';

const RequestBanner = () => {
    const divs = useRef<any[]>([]);
    CustomHook(divs);
    return (
        <div className="w-8/12 m-auto h-[100px] flex justify-between mt-8 shadow-primary rounded-xl p-8" style={{ backgroundImage: `url(${banner})` }}  ref={(el: any) => el && divs.current.push(el)}>
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
    );
}

export default RequestBanner;