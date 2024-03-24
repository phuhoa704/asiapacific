import { useNavigate } from "react-router-dom";
import { Services } from "../../props";
import { ASSETS_API } from "../../configs/apis.config";
import { translateName } from "../../helpers/translator";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { saveServiceById } from "../../redux/slices/Service";

interface Props {
    item: Services
}

const ServiceCard: React.FC<Props> = ({ item }) => {
    const dispatch = useAppDispatch();
    const { language, listLangs } = useAppSelector(state => state.lang);
    const navigate = useNavigate();
    return (
        <div className="rounded shadow-lg rounded-lg">
            <div className="h-[220px] bg-center bg-cover bg-no-repeat rounded-t-lg" style={{ backgroundImage: `url(${ASSETS_API}${item.image})` }}></div>
            <div className="px-10 pt-5 pb-2.5">
                <div className="service-label text-[#ae73db] h-10 font-medium text-md">{translateName(language, JSON.parse(item.name), listLangs)}</div>
            </div>
            <div
                className="border-t border-[#d9d9d9] text-[#ae73db] text-xs text-center p-4 cursor-pointer"
                onClick={() => {
                    dispatch(saveServiceById(item));
                    navigate(item.slug)
                }}>
                <i className="fa-solid fa-arrow-right"></i>
                &nbsp;Read More
            </div>
        </div>
    );
}

export default ServiceCard;