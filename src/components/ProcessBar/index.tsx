import './style.scss';

interface Props {
    percent: number
    title: string
}

const ProcessBar:React.FC<Props> = ({ title, percent }) => {
    return (
        <div className="flex flex-col gap-4">
            <span className='text-white'>{title}</span>
            <progress value="25" max="100"></progress>
        </div>
    );
}

export default ProcessBar;