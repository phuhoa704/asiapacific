import { useEffect, useState } from "react";
import { News } from "../../props";
import image from '../../assets/contact1.png';
import HeaderBreadscrumb from "../../components/HeaderBreadcrumb";
import moment from "moment";

const NewsDetail = () => {
    const [state] = useState<News>({
        id: 1,
        image: image,
        date: '11/04/2024',
        title: 'The most afforable villa project in Niseko, Hokkaido',
        descr: "Three major guarantees to ensure the best niseko investment choice on the market"
    })
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    return (
        <div>
            <HeaderBreadscrumb page="news" tab={state.title} />
            <div className="w-full">
                <div className="w-8/12 m-auto py-12">
                    <p className="text-[#ae73db] text-3xl font-semibold mb-4">{state.title}</p>
                    <p className="text-[#807d7d] text-xs mt-2 mb-2">{state.descr}</p>
                    <div className="bg-[#223cd1] text-white w-fit rounded px-2.5 py-1.5 mb-4 text-xs">
                        <i className="fa-regular fa-clock"></i>
                        &nbsp;{moment(state.date).format('DD-MM-YYYY')}
                    </div>
                    <div className="">
                        <img src={state.image} alt="" />
                    </div>
                    <div>
                        <p className="mt-4 text-[#807d7d]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        <p className="mt-4 text-[#807d7d]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsDetail;