import { useRef, useState } from 'react';
import calendar from '../../assets/calendar.png';
import moment from "moment";
import { News } from '../../props';
import CustomHook from '../../utils/CustomHook';
import image from '../../assets/contact1.png';


const NewsItem = () => {
    const divs = useRef<any[]>([]);
    const [news] = useState<News[]>([
        { id: 1, image: image, date: '11/04/2024', title: 'The most afforable villa project in Niseko, Hokkaido', descr: 'Three major guarantees to ensure the best niseko investment choice on the market' },
        { id: 2, image: image, date: '12/04/2024', title: 'Japan shared office royal office franchise program', descr: '"Greate demand for rent collection project" japan shared office royal office franchise program' },
        { id: 3, image: image, date: '15/04/2024', title: 'Top reasons for Australian working Visa rejection', descr: 'there are not many of passages of lorem ipsum available [...]' },
        { id: 4, image: image, date: '16/04/2024', title: 'Canada federal skilled worker program', descr: 'Three major guarantees to ensure the best niseko investment choice on the market' },
        { id: 5, image: image, date: '18/04/2024', title: 'Some mullet flatters pregnant women', descr: 'Three major guarantees to ensure the best niseko investment choice on the market' },
    ])
    CustomHook(divs);
    return (
        <div className="flex flex-col gap-4">
            {news.map(n => (
                <div className="p-2" ref={(el: any) => el && divs.current.push(el)}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1 news-image">
                            <div className="w-full h-full">
                                <img src={n.image} alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 flex gap-4 news-content">
                            <div className="flex flex-col gap-2 items-center">
                                <img className="w-[50px]" src={calendar} alt="" />
                                <div className="text-center">
                                    <p className="text-[#ae73db] text-lg font-semibold">{moment(n.date, 'DD/MM/YYYY').format('DD')}</p>
                                    <p className="text-xs">{moment(n.date, 'DD/MM/YYYY').format('MMMM')}</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-[#ae73db] text-base capitalize cursor-pointer hover:text-[#cf2757] font-semibold">{n.title}</p>
                                <p className="text-xs capitalize">{n.descr}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NewsItem;