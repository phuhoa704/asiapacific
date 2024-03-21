import { useNavigate } from "react-router-dom";
import { Service } from "../../props";

interface Props {
    item: Service
}

const ServiceCard: React.FC<Props> = ({ item }) => {
    const navigate = useNavigate();
    return (
        <div className="rounded shadow-lg rounded-lg">
            <div className="h-[220px] bg-center bg-cover bg-no-repeat rounded-t-lg" style={{ backgroundImage: `url(${item.image})` }}></div>
            <div className="px-10 pt-5 pb-2.5">
                <div className="service-label text-[#ae73db] h-10 font-medium text-md">{item.title}</div>
            </div>
            <div className="border-t border-[#d9d9d9] text-[#ae73db] text-xs text-center p-4 cursor-pointer" onClick={() => navigate(item.href)}>
                <i className="fa-solid fa-arrow-right"></i>
                &nbsp;Read More
            </div>
        </div>
    );
}

export default ServiceCard;