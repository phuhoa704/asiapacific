const ServiceForm = () => {
    return (
        <div className="p-6 bg-[#ae73db] text-center rounded-md">
            <p className="text-lg font-medium text-white">Make Appointment</p>
            <p className="text-white text-xs mt-4">Asia Pacific offers full range of consultancy training methods for data analysis</p>
            <form className="mt-4">
                <div className="relative">
                    <input
                        type="search"
                        id="title"
                        className="block w-full h-10 px-4 py-3 pe-10 text-xs text-gray-900 border rounded-lg border-[#ddd] bg-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your Name"
                    />
                    <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none text-gray-900 text-xs">
                        <i className="fa-regular fa-user"></i>
                    </div>
                </div>
                <div className="relative mt-4">
                    <input
                        type="search"
                        id="title"
                        className="block w-full h-10 px-4 py-3 pe-10 text-xs text-gray-900 border rounded-lg border-[#ddd] bg-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Email"
                    />
                    <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none text-gray-900 text-xs">
                        <i className="fa-regular fa-envelope"></i>
                    </div>
                </div>
                <div className="relative mt-4">
                    <select
                        className="block w-full h-10 px-4 py-3 text-xs border rounded-lg border-[#ddd] bg-white focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option>Choose service</option>
                    </select>
                </div>
                <div className="relative flex items-center mt-4">
                    <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 bg-[#ae73db] text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                    <label htmlFor="checked-checkbox" className="ms-2 text-xs font-medium text-gray-900 dark:text-gray-300">I agree with the terms of services.</label>
                </div>
                <button className='bg-[#fdcd2e] mt-4 text-[#cf2757] rounded p-2.5 w-full'>Get Appointment</button>
            </form>
        </div>
    );
}

export default ServiceForm;