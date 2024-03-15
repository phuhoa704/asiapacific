import temple from '../../assets/temple.png';
import tokyotower from '../../assets/tokyotower.png';
import lantern from '../../assets/lantern.png';
import flag from '../../assets/flag.png';
import passport from '../../assets/passport.png';
import airplane from '../../assets/airplane.png';
import img1 from '../../assets/japan.jpg';
import img2 from '../../assets/city.jpg';

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
                    <div className="w-full h-full relative">
                        <div className="w-full m-auto flex justify-center">
                            <img src={temple} alt="" />
                        </div>
                        <div className="absolute bottom-0 z-[1] flex left-0 right-0 mx-auto justify-evenly">
                            <div className='w-[150px] h-[200px] bg-center bg-cover rotate-[-10deg] shadow-lg rounded-lg' style={{ backgroundImage: `url(${img1})`}}></div>
                            <div className='w-[150px] h-[200px] bg-center bg-cover rotate-[10deg] shadow-lg rounded-lg' style={{ backgroundImage: `url(${img2})`}}></div>
                        </div>
                        <div className="absolute bottom-0 w-[150px] z-[2] left-0 right-0 mx-auto">
                            <img src={tokyotower} alt="" />
                        </div>
                        <div className="absolute top-20 w-20 rotate-[-15deg]">
                            <img src={lantern} alt="" />
                        </div>
                        <div className="absolute w-32 top-24 right-0 rotate-[35deg]">
                            <img src={flag} alt="" />
                        </div>
                        <div className="absolute w-16 z-[2] bottom-0 left-12 rotate-[30deg]">
                            <img src={passport} alt="" />
                        </div>
                        <div className="absolute w-32 z-[2] bottom-12 right-0">
                            <img className='flip-img' src={airplane} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;