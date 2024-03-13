import { useRef } from "react";
import { Step } from "../../props";
import CustomHook from "../../utils/CustomHook";

interface Props {
    steps: Step[]
}

const VerticalSteps: React.FC<Props> = ({ steps }) => {
    const divs = useRef<any[]>([]);
    CustomHook(divs);
    return (
        <ul className="steps relative pl-[80px]">
            {steps.map(s => (
                <li key={s.id} className="mb-6" ref={(el: any) => el && divs.current.push(el)}>
                    <div className="step relative">
                        <div className="h-9 w-9 absolute bg-[#ae73db] left-[-57px] top-[12%] rounded-full flex items-center justify-center text-xs text-white hover:bg-[#c73459] hover:border-[#f584a0] hover:border-2">{s.id}</div>
                        <p className="text-[#223cd1] font-semibold">{s.title}</p>
                        <span className="text-xs">{s.descr}</span>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default VerticalSteps;