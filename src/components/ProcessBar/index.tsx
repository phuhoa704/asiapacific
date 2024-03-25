import './style.scss';

interface Props {
    percent: number
    title: string
}

const ProcessBar: React.FC<Props> = ({ title, percent }) => {
    return (
        <div className="flex flex-col gap-4">
            <span className='text-white'>{title}</span>
            <div className="h-1.5 w-full bg-neutral-200 dark:bg-neutral-600 rounded relative">
                <div className="h-1.5 bg-[#f56942] rounded" style={{ width: `${percent}%`}}></div>
                <span style={{ left: `${percent - 5}%` }} className={`flex items-center justify-center w-8 h-8 absolute rounded-full -top-4 bg-[#1f1e1d] text-xs font-medium text-white`}>{percent}%</span>
            </div>
        </div>
    );
}

export default ProcessBar;