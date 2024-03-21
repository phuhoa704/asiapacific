import { TaxService } from "../../props";

interface Props {
    item: TaxService
}

const TaxServiceCard: React.FC<Props> = ({ item }) => {
    return (
        <div className="rounded-md bg-[#f0f5f1] shadow-md p-4 h-64 transition-transform hover:scale-110 flex flex-col justify-between">
            <div>
                <div className="flex justify-end">
                    <div className="bg-white rounded-full text-xs p-1.5 text-[#ae73db]">{item.id}</div>
                </div>
                <div className="text-[#ae73db] font-medium text-xs mt-2 capitalized">{item.title}</div>
                <div className="text-xs mt-2">{item.desc}</div>
            </div>
            <div className="text-[#ae73db] text-xs cursor-pointer mt-2">
                <i className="fa-solid fa-arrow-right"></i>
                &nbsp;Read More
            </div>
        </div>
    );
}

export default TaxServiceCard;