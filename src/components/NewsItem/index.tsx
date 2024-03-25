import { useRef } from 'react';
import calendar from '../../assets/calendar.png';
import moment from "moment";
import CustomHook from '../../utils/CustomHook';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../configs/routes.config';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { ASSETS_API } from '../../configs/apis.config';
import { translateDescr, translateName } from '../../helpers/translator';
import { getNewsDetail } from '../../redux/actions/News';


const NewsItem = () => {
    const dispatch = useAppDispatch();
    const { newsList } = useAppSelector(state => state.news);
    const { language, listLangs } = useAppSelector(state => state.lang);
    const navigate = useNavigate();
    const divs = useRef<any[]>([]);
    CustomHook(divs);
    return (
        <div className="flex flex-col gap-4">
            {newsList.map(n => (
                <div className="p-2" ref={(el: any) => el && divs.current.push(el)}>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="col-span-1 news-image">
                            <div className="w-full h-full">
                                <img src={`${ASSETS_API}${n.image}`} alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 flex gap-4 news-content">
                            <div className="flex flex-col gap-2 items-center">
                                <img className="w-[50px]" src={calendar} alt="" />
                                <div className="text-center">
                                    <p className="text-[#ae73db] text-lg font-semibold">{moment(new Date(n.created_at), 'DD/MM/YYYY').format('DD')}</p>
                                    <p className="text-xs">{moment(new Date(n.created_at), 'DD/MM/YYYY').format('MMMM')}</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-[#ae73db] text-base capitalize cursor-pointer hover:text-[#cf2757] font-semibold" onClick={async() => {
                                    let rs: any = await dispatch(getNewsDetail(n.id));
                                    if(rs.payload.action) {
                                        navigate(`${ROUTES.NEWS}/${n.slug}`)
                                    }
                                }}>{translateName(language, JSON.parse(n.name), listLangs)}</p>
                                <p className="text-xs capitalize">{translateDescr(language, JSON.parse(n.description), listLangs)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NewsItem;