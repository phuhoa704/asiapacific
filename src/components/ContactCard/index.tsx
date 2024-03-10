import location from '../../assets/location.png';

interface Props {
    title: string
    address: string
}

const ContactCard:React.FC<Props> = ({ title, address }) => {
    return (
        <div className="group relative">
            <div className="absolute bg-[#86b4cf] group-hover:bg-[#b07ee6] flex items-center justify-center rounded-tl-[24px] rounded-br-[24px] p-4 w-[60px] h-[60px] top-[30px] left-[-30px]">
                <img className='w-full h-full' src={location} alt="" />
            </div>
            <div className="bg-[#c7e2f2] pl-10 py-2 pr-2 rounded-lg shadow-xl h-[112px] w-[216px] flex flex-col justify-center">
                <div className="text-base text-[#cf2757] capitalized group-hover:text-[#b07ee6]">{title}</div>
                <div className="text-[#223cd1] text-xs">{address}</div>
            </div>
        </div>
    );
}

export default ContactCard;