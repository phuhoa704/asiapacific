import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { SubmitAppointmentDto } from "../../redux/dto";
import { translateName } from "../../helpers/translator";
import { submitAppointment } from "../../redux/actions/Service";

const ServiceForm = () => {
    const dispatch = useAppDispatch();
    const { service } = useAppSelector(state => state.service);
    const { listLangs, language } = useAppSelector(state => state.lang) ;
    const [formVals, setFormVals] = useState<SubmitAppointmentDto>({
        email: '',
        name: '',
        service_id: 0
    });
    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormVals({
            ...formVals,
            [name]: value
        })
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(submitAppointment(formVals))
    }
    return (
        <div className="p-6 bg-[#ae73db] text-center rounded-md">
            <p className="text-lg font-medium text-white">Make Appointment</p>
            <p className="text-white text-xs mt-4">Asia Pacific offers full range of consultancy training methods for data analysis</p>
            <form className="mt-4" onSubmit={handleSubmit}>
                <div className="relative">
                    <input
                        type="text"
                        required
                        id="title"
                        name='name'
                        value={formVals.name}
                        onChange={handleChange}
                        className="block w-full h-10 px-4 py-3 pe-10 text-xs text-gray-900 border rounded-lg border-[#ddd] bg-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your Name"
                    />
                    <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none text-gray-900 text-xs">
                        <i className="fa-regular fa-user"></i>
                    </div>
                </div>
                <div className="relative mt-4">
                    <input
                        required
                        type="email"
                        id="title"
                        name='email'
                        value={formVals.email}
                        onChange={handleChange}
                        className="block w-full h-10 px-4 py-3 pe-10 text-xs text-gray-900 border rounded-lg border-[#ddd] bg-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Email"
                    />
                    <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none text-gray-900 text-xs">
                        <i className="fa-regular fa-envelope"></i>
                    </div>
                </div>
                <div className="relative mt-4">
                    <select
                        required
                        name='service_id'
                        value={formVals.service_id}
                        onChange={handleChange}
                        className="block w-full h-10 px-4 py-3 text-xs border rounded-lg border-[#ddd] bg-white focus:ring-blue-500 focus:border-blue-500"
                    >
                        {service.map(s => (
                            <option value={s.id}>{translateName(language, JSON.parse(s.name), listLangs)}</option>
                        ))}
                    </select>
                </div>
                <div className="relative flex items-center mt-4">
                    <input id="checked-checkbox" required type="checkbox" value="" className="w-4 h-4 bg-[#ae73db] text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                    <label htmlFor="checked-checkbox" className="ms-2 text-xs font-medium text-gray-900 dark:text-gray-300">I agree with the terms of services.</label>
                </div>
                <button type="submit" className='bg-[#fdcd2e] mt-4 text-[#cf2757] rounded p-2.5 w-full'>Get Appointment</button>
            </form>
        </div>
    );
}

export default ServiceForm;