const ImmigrationServices = () => {
    return (
        <section className="w-full h-[550px] py-20">
            <div className="w-9/12 m-auto grid grid-cols-2 gap-6">
                <div className="col-span-1">
                    <div className="grid grid-cols-3 h-full">
                        <div className="col-span-2 pt-[50px]">
                            <div className="shadow-secondary h-[300px] bg-passport bg-cover bg-center rounded-tl-[48px] rounded-br-[48px] border border-4 border-white w-9/12 m-auto">
                            </div>
                        </div>
                        <div className="col-span-1 grid grid-rows-2 gap-2">
                            <div className="shadow-secondary col-span-1 bg-house bg-cover bg-center rounded-tl-[48px] rounded-br-[48px] border border-4 border-white mb-4">
                            </div>
                            <div className="shadow-secondary col-span-1 bg-city bg-cover bg-center rounded-tr-[48px] rounded-bl-[48px] border border-4 border-white relative">
                                <div className="absolute bottom-0 right-0 bg-[#2b81d6] w-8/12 text-white text-center p-2 rounded-bl-[32px] rounded-tr-[32px]">
                                    <p className="text-2xl">20</p>
                                    <p className="capitalized">years of experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 pl-[10%]">
                    <div className="bg-[#223cd1] text-white w-fit rounded capitalize px-2.5 py-1.5 mb-4 text-xs">
                        asia pacific business consulting and immigration services co., ltd.
                    </div>
                    <span className="text-[#ae73db] font-medium text-3xl">Focus on providing high-quality investment and immigration consulting services to international customers</span>
                    <p className="text-[10px] text-[#1d1e1f] mt-4 mb-4">Asia Pacific business consultant Co., Ltd. is a company focused on providing high-quality investment  and migration consulting services to international customers.
                        Our mission is to help customers realize their drams of investing and immigrating to Japan. Through our tich experience and professional knowledge, we provide
                        customers with a full range of immigration consulting services.</p>
                    <button className='bg-[#fdcd2e] text-[#cf2757] rounded p-2.5 w-32'>Learn more</button>
                </div>
            </div>
        </section>
    );
}

export default ImmigrationServices;