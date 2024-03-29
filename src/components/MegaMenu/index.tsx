import { useState } from "react";
import { translateName } from "../../helpers/translator";
import { useAppSelector } from "../../redux/hook";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../configs/routes.config";

interface Props {
    show: boolean
    mouseLeave: () => void
}

const MegaMenu: React.FC<Props> = ({ show, mouseLeave }) => {
    const navigate = useNavigate();
    const { services } = useAppSelector(state => state.service);
    const { language, listLangs } = useAppSelector(state => state.lang);
    const [hoverId, setHoverId] = useState<number>(-1);
    return (
        <div className={`fadeDown absolute bg-white rounded z-10 mt-1 shadow-lg w-full m-auto grid grid-cols-4 gap-4 divide-x py-2.5 px-4 ${show ? 'block' : 'hidden'}`} onMouseLeave={() => {
            mouseLeave();
            setHoverId(-1);
        }}>
            <div className="col-span-1">
                {services.filter(s => s.parent_id === 0).map(s => (
                    <p
                        onClick={() => navigate(`${ROUTES.SERVICES}/${s.slug}`)}
                        className="font-semibold text-[#2328ba] hover:text-[#cf2757] py-2 cursor-pointer border-b border-b-[#d9d9d9] hover:bg-[#d9d9d9] pl-1" onMouseEnter={() => setHoverId(s.id)}>
                        {translateName(language, JSON.parse(s.name), listLangs)}
                    </p>
                ))}
            </div>
            <div className="col-span-3 grid grid-cols-2 gap-4 pl-2">
                {services.filter(s => s.parent_id === hoverId).map(s => (
                    <div className="col-span-1">
                        <p
                            className="text-[#2328ba] hover:text-[#cf2757] cursor-pointer"
                            onClick={() => {
                                const parentS = services.find(s => s.id === hoverId);
                                if(parentS) {
                                    navigate(`${ROUTES.SERVICES}/${parentS.slug}/${s.slug}`)
                                }
                            }}
                        >
                            {translateName(language, JSON.parse(s.name), listLangs)}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MegaMenu;