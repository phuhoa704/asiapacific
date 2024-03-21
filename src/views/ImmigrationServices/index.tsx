import { useEffect, useRef } from "react";
import HeaderBreadscrumb from "../../components/HeaderBreadcrumb";
import CustomHook from "../../utils/CustomHook";
import RequestBanner from "../../components/RequestBanner";

const ImmigrationServices = () => {
    const divs = useRef<any[]>([]);
    CustomHook(divs);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <HeaderBreadscrumb page="services" tab="immigartion consltancy services" />
            <div className="w-full">
                <div className="w-8/12 m-auto py-12">
                    <div className="bg-[#223cd1] text-white w-fit rounded uppercase px-2.5 py-1.5 mb-4 text-xs" ref={(el: any) => el && divs.current.push(el)}>
                        immigartion consltancy services
                    </div>
                    <div className="text-[#ae73db] font-medium text-3xl" ref={(el: any) => el && divs.current.push(el)}>Japan Visa Services</div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        Asia Pacific could provide the services of application for the following Visas.
                    </p>
                    <div className="grid grid-cols-4 gap-4 mt-6">
                        <div className="group text-[#223cd1] col-span-1" ref={(el: any) => el && divs.current.push(el)}>
                            <div className="service-icon text-2xl w-10 h-10 group-hover:text-[#cf2757]">
                                <i className="fa-solid fa-list-check"></i>
                            </div>
                            <div className="text-sm font-medium group-hover:text-[#cf2757] cursor-default">Business Management Visa</div>
                            <p className="text-[10px] text-[#1d1e1f] opacity-0 transition-all group-hover:opacity-100 cursor-default">The business management visa (former known as Investment Management Visa before change of name) is a type of work visa specially designed for outstanding people who set up a company in Japan and would like to operate or manage the Japan Company</p>
                        </div>
                        <div className="group text-[#223cd1] col-span-1" ref={(el: any) => el && divs.current.push(el)}>
                            <div className="service-icon text-2xl w-10 h-10 group-hover:text-[#cf2757]">
                                <i className="fa-solid fa-list-check"></i>
                            </div>
                            <div className="text-sm font-medium group-hover:text-[#cf2757] cursor-default">Business Management Visa</div>
                            <p className="text-[10px] text-[#1d1e1f] opacity-0 transition-all group-hover:opacity-100 cursor-default">The business management visa (former known as Investment Management Visa before change of name) is a type of work visa specially designed for outstanding people who set up a company in Japan and would like to operate or manage the Japan Company</p>
                        </div>
                        <div className="group text-[#223cd1] col-span-1" ref={(el: any) => el && divs.current.push(el)}>
                            <div className="service-icon text-2xl w-10 h-10 group-hover:text-[#cf2757]">
                                <i className="fa-solid fa-list-check"></i>
                            </div>
                            <div className="text-sm font-medium group-hover:text-[#cf2757] cursor-default">Business Management Visa</div>
                            <p className="text-[10px] text-[#1d1e1f] opacity-0 transition-all group-hover:opacity-100 cursor-default">The business management visa (former known as Investment Management Visa before change of name) is a type of work visa specially designed for outstanding people who set up a company in Japan and would like to operate or manage the Japan Company</p>
                        </div>
                        <div className="group text-[#223cd1] col-span-1" ref={(el: any) => el && divs.current.push(el)}>
                            <div className="service-icon text-2xl w-10 h-10 group-hover:text-[#cf2757]">
                                <i className="fa-solid fa-list-check"></i>
                            </div>
                            <div className="text-sm font-medium group-hover:text-[#cf2757] cursor-default">Business Management Visa</div>
                            <p className="text-[10px] text-[#1d1e1f] opacity-0 transition-all group-hover:opacity-100 cursor-default">The business management visa (former known as Investment Management Visa before change of name) is a type of work visa specially designed for outstanding people who set up a company in Japan and would like to operate or manage the Japan Company</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="text-[#ae73db] font-medium text-3xl" ref={(el: any) => el && divs.current.push(el)}>Intra-Company Stransferee Visa Application Procedures And Fee</div>
                        <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                            Unless otherwise indicated, the Japan Intra-Company Transferee (“企業内転勤” in Japanese) visa stated in this quotation is for applicants who are currently working for a public or private organization's foreign office and will be transferred to its head office, branch office, or other office in Japan on a time-limited basis. The activities can be engaged in are limited to be equivalent to the status of residence as "Engineer/ Specialist in Humanities/ International Services".
                        </p>
                    </div>
                    <div className="mt-6">
                        <div className="text-[#ae73db] font-medium text-3xl" ref={(el: any) => el && divs.current.push(el)}>Procedures and Fees of 6-month Business Management Visa Application with Program to Increase Foreign Entrepreneurs in Tokyo</div>
                        <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                            Regarding to the Program to Increase Foreign Entrepreneurs in Tokyo, a special 6-month Business Management Visa (“Start-up Business Visa”) is launched for foreigners who are planning to start a business in Tokyo. Applicants shall submit the business activities plan to Tokyo Metropolitan Government before submitting the visa application to the Immigration Bureau. After obtaining the approval from Tokyo Metropolitan Government, applicants can apply business management visa with 6 months validity to enter Japan for incorporating the company and starting to launch that business.
                        </p>
                        <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                            According to current regulation, foreigners who wish to start business in Japan need to hold a business management visa. To be approved to receive this status of residence, applicants need to incorporate a company in Japan first, and must employ at least two full-time staff, or invest at least 5 million yen. To fulfill above requirement, foreign entrepreneurs always need to find a business partner in Japan, to assist in those processes such as renting an office as business address, etc. It is complicated for one-man company to start business. Therefore, Tokyo Metropolitan Government would like to help foreign entrepreneurs to solve these problems and increase foreign entrepreneurs by introducing this new program. Currently, applying this Start-up Business visa would be the fastest way for foreign entrepreneurs to go to Japan and start a new business.
                        </p>
                    </div>
                    <div className="mt-6">
                        <div className="text-[#ae73db] font-medium text-3xl" ref={(el: any) => el && divs.current.push(el)}>Procedures and Fees for Japan Highly-Skilled Professional Visa Application</div>
                        <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                            Highly-skilled Professional Visa (高度専門職ビザ in Japanese) is a residence status designed for highly-skilled foreign professionals who are expected to contribute to Japan’s economic growth. In order to attract highly-skilled foreign professionals, Japanese government introduced a points-based system. For foreigners who score at least 70 points, preferential treatment for immigration control will be granted.
                        </p>
                        <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                            Highly-skilled professionals generally refer to the professionals are complementary to Japan’s development and cannot be replaced. They can bring innovations to different industries, while promoting the development of professional technology and expertise, and improving the labour market efficiency.
                        </p>
                        <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                            The activities of highly-skilled foreign professional are classified into 3 categories: academic research activities, specialized/technical activities and business management activities. Points will be assigned by “Academic background”, “Professional experience” and “Annual salary” according to the nature of that category.
                        </p>
                        <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                            There are 2 types of residence status. " Highly Skilled Professional (i)" will be provided first. For Highly Skilled Professional (i) holder who has lived in Japan for more than three years, Highly Skilled Professional (ii) and further preferential treatment are provided.
                        </p>
                    </div>
                    <div className="mt-6">
                        <div className="text-[#ae73db] font-medium text-3xl" ref={(el: any) => el && divs.current.push(el)}>Japan - Engineer/ Specialist in Humanities/ International Services Visa Application Procedures and Fees</div>
                        <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                            The activities that Engineer/ Specialist in Humanities/ International Services ("技術・人文知識・国際業務" in Japanese) visa holder can be performed in Japan mean contracted positions with public or private organizations which utilize technology or specialized knowledge in fields related to physics, engineering, natural science, law, economy, and humanities; or those which require an understanding of or sensitivity to foreign cultures. (This excludes the activities listed in other visa categories). Engineer/ Specialist in Humanities/ International Services visa is applicable to a wide range of industries, such as mechanical engineers, interpreters, designers, language teachers in private companies.
                        </p>
                    </div>
                    <div className="mt-6">
                        <div className="text-[#ae73db] font-medium text-3xl" ref={(el: any) => el && divs.current.push(el)}>Japan - Dependent (Family Stay) Visa Application Procedures and Fees</div>
                        <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                            Dependent (Family Stay) Visa ("家族滞在ビザ" in Japanese) can be applied by an individual who is the spouse or child of (and financially dependent on) a foreign national residing in Japan under one of the following classifications: "Professor", "Artist", "Religious Activities", "Journalist", "Highly Skilled Professional", "Business Manager", "Legal / Accounting Services", "Medical Services", "Trainee", "Instructor", "Engineer / Specialist in Humanities / International Services", "Intra-Company Transferee", "Nursing Care", "Entertainer", "Skilled Labour", "Cultural Activities", or "Student".
                        </p>
                    </div>
                    <div className="mt-6">
                        <div className="text-[#ae73db] font-medium text-3xl" ref={(el: any) => el && divs.current.push(el)}>Japanese Social Insurance Service and Payroll Service</div>
                        <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                            The procedure of joining Japan social insurance and the calculation of the employees payroll is quite complex. Besides, the policy of Japan and the proportion to calculate the insurance are changing every year. Therefore, the client will require more time to handle the enrolment and resignation of the employees, the joining, changing and computing of the insurance.
                        </p>
                        <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                            In order to assist clients to operate Japanese companies more efficiently, Asia Pacific could provide the Japan Social Insurance Service and Payroll Service. To avoid the complex procedures of Social Insurance enrolment and employee salary calculation in Japan, our service’s quotation aims to
                        </p>
                    </div>
                    <div className="mt-6">
                        <div className="text-[#ae73db] font-medium text-3xl" ref={(el: any) => el && divs.current.push(el)}>Japan Business Management Visa Application Procedures and Fees</div>
                        <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                            Unless otherwise indicated, the Business Management visa stated refers to a working visa specially for foreigners who either incorporate a company or manage the business of that company (excluding the operation or management of the business which requires legal / accounting qualifications) in Japan. It is a kind of visa necessary for the company's operators (such as legal representatives or directors, etc.) and the company's management (such as managers, etc.) to work in Japan.
                        </p>
                    </div>
                </div>
                <div className="mb-6">
                    <RequestBanner />
                </div>
            </div>
        </div>
    );
}

export default ImmigrationServices;