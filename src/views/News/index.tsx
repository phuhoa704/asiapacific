import HeaderBreadscrumb from "../../components/HeaderBreadcrumb";
import RequestBanner from "../../components/RequestBanner";
import NewsItem from "../../components/NewsItem";

const NewsPage = () => {
    return (
        <div>
            <HeaderBreadscrumb page="news" tab="news"/>
            <div className="w-full">
                <div className="w-11/12 lg:w-9/12 m-auto py-12 flex flex-col items-center">
                    <div className="bg-[#223cd1] text-white w-fit rounded capitalize px-2.5 py-1.5 mb-4 text-xs">
                        asia pacific business consulting and immigration services co., ltd.
                    </div>
                    <p className="text-[#ae73db] text-3xl font-semibold mb-4">Asia Pacific News</p>
                    <NewsItem />
                </div>
            </div>
            <div className="w-full mb-4">
                <RequestBanner />
            </div>
        </div>
    );
}

export default NewsPage;