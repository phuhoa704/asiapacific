const Banner = () => {
    return (
        <section className="w-full bg-banner h-[550px] px-[10%] pt-[8%]">
            <div className="grid grid-cols-2">
                <div className="flex flex-col col-span-1 gap-4">
                    <div className="rounded-lg border-white uppercase border text-white text-base px-2 py-x w-fit">
                        &#x2022; INVEST IN JAPAN &#x2022;
                    </div>
                    <span className="capitalize font-medium text-white text-5xl">get a japan business visa approved in as little as one month</span>
                    <button className='bg-[#fdcd2e] text-[#cf2757] rounded p-2.5 w-32'>Learn more</button>
                </div>
                <div className="relative col-span-1">
                    <div className="blossom"></div>
                    <div className="blossom2"></div>
                </div>
            </div>
        </section>
    );
}

export default Banner;