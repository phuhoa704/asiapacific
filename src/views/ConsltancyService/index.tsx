import { useEffect, useRef, useState } from "react";
import HeaderBreadscrumb from "../../components/HeaderBreadcrumb";
import CustomHook from "../../utils/CustomHook";
import RequestBanner from "../../components/RequestBanner";

const ConsltancyService = () => {
    const divs = useRef<any[]>([]);
    const [list] = useState<string[]>([
        'Registration of the Japan Kabushiki Kaisha (Company Limited by Shares)',
        'Registration of the Japan Goudou Kaisha (Limited Liability Company)',
        'Registration of Japan Shitenn (Branch)',
        'Establishment of the Japan Representative Office',
        'Establishment of an Association',
        'Establishment of the Non-Profit Organization (NPO)'
    ])
    CustomHook(divs);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <HeaderBreadscrumb page="services" tab="legal consltancy services" />
            <div className="w-full">
                <div className="w-8/12 m-auto py-12">
                    <div className="bg-[#223cd1] text-white w-fit rounded uppercase px-2.5 py-1.5 mb-4 text-xs" ref={(el: any) => el && divs.current.push(el)}>
                        legal consltancy services
                    </div>
                    <div className="text-[#ae73db] font-medium text-3xl" ref={(el: any) => el && divs.current.push(el)}>Japan Company Formation Services</div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        With the changes of Japan economic environment, changes of the high cost system, comprehensive reform of the regulatory system, there are getting more foreign companies investing in Japan, registration of companies in Japan, and carrying out business activities in Japan.
                    </p>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        When the foreign companies decided to carry out business activities in Japan, the will consider the following 3 types of companies: (1) Setting up a Japan Subsidiary Company (Company Limited by Shares or Limited Liability Company) (2) Registration of a Japan Branch (3) Registration of Japan Representative Office.
                    </p>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        Regardless of the form of company to be established in Japan, it is necessary to go through a series of procedures, such as rent a physical office, handling the registration procedures, opening a bank account, etc. In order to solve the problem of client for registration of Japan Company, we could provide one-stop services to clients, from the leasing of office to opening a bank account.
                    </p>
                    <ul className="mt-6" ref={(el: any) => el && divs.current.push(el)}>
                        {list.map((l, idx) => (
                            <li key={idx} className="flex items-center mb-2 text-[#807d7d]">
                                <div className="rounded-full p-1 font-xs bg-[#ae73db] text-white flex items-center justify-center mr-2">
                                    <i className="fa-solid fa-check"></i>
                                </div>
                                <span>{l}</span>
                            </li>
                        ))}
                    </ul>
                    {/*  */}
                    <div className="text-[#ae73db] font-medium text-3xl mt-6" ref={(el: any) => el && divs.current.push(el)}>Japan Kabushiki Kaisha Removal Of Director Procedures And Fees</div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        We provide the removal of representative director / director of a Kabushiki Kaisha registered in Japan services including the preparation of all necessary documents and statutory filling fee.
                    </p>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        To proceed with the removal of representative director / director of Kabushiki Kaisha, the client shall provide the corporate documents of the Kabushiki Kaisha and identity proof of the director.
                    </p>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        In general, the processing time for removal of director is approximately 2 to 3 weeks, starting from the receipt of all the required documentation from the client.
                    </p>
                    {/*  */}
                    <div className="text-[#ae73db] font-medium text-3xl mt-6" ref={(el: any) => el && divs.current.push(el)}>Japan Kabushiki Kaisha Representative Director Or Director Change Procedures And Fees</div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        We provide the change of representative director / director of a Kabushiki Kaisha registed service, including the preparation of all necessary documents and statutory filling fee.
                    </p>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        To proceed with the change of representative director / director of Kabushika Kaisha, the client shall provide corporate documents of the Kabushika Kaisha, an identity proof, an address proof and declaration of personal signature of new director.
                    </p>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        In general, the processing time for a change of director is approximately 3 to 5 weeks, starting from the receipt of all the required documentation from the client.
                    </p>
                    {/*  */}
                    <div className="text-[#ae73db] font-medium text-3xl mt-6" ref={(el: any) => el && divs.current.push(el)}>Japan Kabushiki Kaisha Share Transfer Procedures and Fees</div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        In principle, the transfer of shares may be executed in accordance with the agreement between the transferor and the transferee. However, the process of share transfer must in any case comply with the Companies Act or else it will be considered invalid. The procedure of share transfer in kabushiki kaisha is complex and involves an abundant amount of documentation. Following the transfer, the Register of Members must be updated.
                        We provide one (1) transfer of share(s) (share transfer from 1 transferor to 1 transferee) of a kabushiki kaisha registered in Japan services, including the preparation of all necessary documents and the handling of the required procedures.
                    </p>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        The process for a transfer of share takes approximately 1.5 months, starting from the receipt of all the required documentation from the client. No expedited service can be provided.
                    </p>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        All documents in foreign language provided by the client shall be accompanied by an English or Japanese translation. Asia Pacific offers Japanese translation services, and the applicable fee will be quoted upon request.
                    </p>
                    {/*  */}
                    <div className="text-[#ae73db] font-medium text-3xl mt-6" ref={(el: any) => el && divs.current.push(el)}>Japan Representative Office Registration Procedures and Fees</div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        Since Japan Representative Office does not consider a legal person, so the establishment of the representative office does not require to register at Legal Affairs Bureau Japan. Therefore, Asia Pacific could only provide the consultation service for the registration of the Japan Representative Office.
                    </p>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        The representative of the Japan Representative Office could be the foreigner, it is not required to have Japan residential address. However, according to the Japan Immigration Law, if foreigners would like to work for Japan Representative Office, they shall obtain legal residency.
                    </p>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        The Japan Representative Office does not consider as a legal person, so it is not possible to open a bank account with the name of the Japan Representative Office. The procedure for bank account opening and the procedure to sign for the lease agreement could only by the name of the representative.
                    </p>
                    {/*  */}
                    <div className="text-[#ae73db] font-medium text-3xl mt-6" ref={(el: any) => el && divs.current.push(el)}>Japan Shitenn (Branch) Registration Procedures and Fees</div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        Asia Pacific provide such as preparation of the affidavit and other related documentation.
                    </p>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        According to the Japan Companies Act, the representative of the Japan Shitenn must have a residential address in Japan. Therefore, during the incorporation of the Japan Shitenn, the foreign company shall select at least a representative with a residential address in Japan (The representative can be a Japanese or a foreigner who legally reside in Japan). In addition, the Japan Shitenn shall have a registered address in Japan. Our registration fee does not include the registered address services.
                    </p>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        For the incorporation of the Japan Shitenn, the investor needs to provide the Articles of Associations, registration documents (such as business license, etc.) of the parent company, the parent company documents shall be notarized at the investor’s location and it may require to translate into Japanese language based on the actual situation. Furthermore, the Japanese representative is required to provide their stamp certificate.
                    </p>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        The registration of the Japan Shitenn takes around 4 to 5 weeks (Excluding bank account opening time).
                    </p>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        The fees quoted are applicable to the Shitenn which does not require an additional license or permit. If the business to be carried out by the Japan Shitenn requires an extra license or permits, Asia Pacific could provide the service to apply for such license or permit and the fees will be quoted upon request. Please note that this quotation is limited to the registration of Shitenn in Tokyo, Japan. For the Shitenn registered in another city of Japan, the fees will be adjusted appropriately.
                    </p>
                    {/*  */}
                    <div className="text-[#ae73db] font-medium text-3xl mt-6" ref={(el: any) => el && divs.current.push(el)}>Japan Business License</div>
                    <div className="flex items-center mt-6" ref={(el: any) => el && divs.current.push(el)}>
                        <div className="py-1 px-2 bg-[#ae73db] text-white rounded-full mr-2">01</div>
                        <span className="uppercase font-semibold">Registration of the Japan Kabushiki Kaisha (Company Limited by Shares)</span>
                    </div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        If involves the sale of tobacco in Japan, it is necessary to apply for a tobacco retail sales license. For example, open a tobacco store, sales of tobacco to hotels, or set up a tobacco counter in the convenience stores, and set up vending machines for cigarettes on the roadside.
                    </p>
                    <div className="flex items-center mt-6" ref={(el: any) => el && divs.current.push(el)}>
                        <div className="py-1 px-2 bg-[#ae73db] text-white rounded-full mr-2">02</div>
                        <span className="uppercase font-semibold">Electronic Payment Agency Industry</span>
                    </div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        Operates the application that required to log in to the client’s bank account to operate procedures such as remittances, payment guidelines, etc. will need to apply for an electronic payment agency license.
                    </p>
                    <p className="text-xs text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        For example, know the balance of the bank account from the home apps will need to apply for this license. This app shall require the permission of the client, logging in the client’s bank account and showing a balance on the app.
                    </p>
                    <div className="flex items-center mt-6" ref={(el: any) => el && divs.current.push(el)}>
                        <div className="py-1 px-2 bg-[#ae73db] text-white rounded-full mr-2">03</div>
                        <span className="uppercase font-semibold">Registration of Travel</span>
                    </div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        The client needs to apply for this license if they decide to open a travel agency in Japan, planning travel plans for clients and assisting the client to book for the accommodations.
                    </p>
                    <div className="flex items-center mt-6" ref={(el: any) => el && divs.current.push(el)}>
                        <div className="py-1 px-2 bg-[#ae73db] text-white rounded-full mr-2">04</div>
                        <span className="uppercase font-semibold">Hotel Industry License</span>
                    </div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        The client will need to apply for this license if they decide to operate a hotel in Japan. There are no restrictions on the business hours for the hotels. (Hotel can be operated for 365 days)
                    </p>
                    <div className="flex items-center mt-6" ref={(el: any) => el && divs.current.push(el)}>
                        <div className="py-1 px-2 bg-[#ae73db] text-white rounded-full mr-2">05</div>
                        <span className="uppercase font-semibold">Homestay</span>
                    </div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        Operates a home as an accommodation, the homestay can only operate 180 days per year.
                        The homestay license is easier to obtain than hotel industry license, however, it still depends on the region, some region is severely restricted and requires attention.
                    </p>
                    <div className="flex items-center mt-6" ref={(el: any) => el && divs.current.push(el)}>
                        <div className="py-1 px-2 bg-[#ae73db] text-white rounded-full mr-2">06</div>
                        <span className="uppercase font-semibold">Restaurant License</span>
                    </div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        The client needs to apply for this license before opening a restaurant in Japan.
                    </p>
                    <div className="flex items-center mt-6" ref={(el: any) => el && divs.current.push(el)}>
                        <div className="py-1 px-2 bg-[#ae73db] text-white rounded-full mr-2">07</div>
                        <span className="uppercase font-semibold">Sales of Liquor License</span>
                    </div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        If involves the sale of alcohol in Japan, it is necessary to apply for a sales of liquor license. For example, open a liquor store, sales of wine in hotel, or set up liquor counters in convenience stores, and set up vending machines for wine in hotels.
                    </p>
                    <div className="flex items-center mt-6" ref={(el: any) => el && divs.current.push(el)}>
                        <div className="py-1 px-2 bg-[#ae73db] text-white rounded-full mr-2">08</div>
                        <span className="uppercase font-semibold">Cosmetics License</span>
                    </div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        If the client wants to import cosmetics products into Japan, the client shall go through customs clearance, for the storage of cosmetics products, must have the manufacturing license. (In Japan, storage also needs the manufacturing license) The products imported shall register by the name of the manufacturer company (importer).
                    </p>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        Overseas cosmetics companies should also register in Japan. If cosmetics products need to register in Japan, it must be a company that is having a manufacturing license.
                    </p>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        Therefore, there are two options:
                    </p>
                    <ol ref={(el: any) => el && divs.current.push(el)}>
                        <li><p className="text-xs text-[#807d7d]">1. Setting up a company in Japan and apply for such a license</p></li>
                        <li><p className="text-xs text-[#807d7d]">2. Finding a company with such a license and corporate with them to import cosmetics products.</p></li>
                    </ol>
                    <div className="flex items-center mt-6" ref={(el: any) => el && divs.current.push(el)}>
                        <div className="py-1 px-2 bg-[#ae73db] text-white rounded-full mr-2">09</div>
                        <span className="uppercase font-semibold">Real Estate License</span>
                    </div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        Client needs to apply for this license if they are involving in trading of real estate (land, real estate), broker, agent, etc.
                    </p>
                    <div className="flex items-center mt-6" ref={(el: any) => el && divs.current.push(el)}>
                        <div className="py-1 px-2 bg-[#ae73db] text-white rounded-full mr-2">10</div>
                        <span className="uppercase font-semibold">Real Estate Specific Business</span>
                    </div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        It is required to apply for license, if the business is raising capital from capitalists, invest in real estate (land, buildings), and distribute the income (rents, etc.) generated by real estate to investors.
                    </p>
                    <div className="flex items-center mt-6" ref={(el: any) => el && divs.current.push(el)}>
                        <div className="py-1 px-2 bg-[#ae73db] text-white rounded-full mr-2">11</div>
                        <span className="uppercase font-semibold">Registration of Real Estate Investment Consulting Industry</span>
                    </div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        Real Estate Investment consulting business refers to the investors who want to invest in real estate, provide services during the real estate investment, or investment consulting services.
                        Registration of the Real Estate Investment consulting industry refers that license is required to apply if client is involving in real estate investment consulting business.
                    </p>
                    <div className="flex items-center mt-6" ref={(el: any) => el && divs.current.push(el)}>
                        <div className="py-1 px-2 bg-[#ae73db] text-white rounded-full mr-2">12</div>
                        <span className="uppercase font-semibold">Registration of Property Management</span>
                    </div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        If the business is involving in on-site management service of property, it is required to apply for the license.
                    </p>
                    <div className="flex items-center mt-6" ref={(el: any) => el && divs.current.push(el)}>
                        <div className="py-1 px-2 bg-[#ae73db] text-white rounded-full mr-2">13</div>
                        <span className="uppercase font-semibold">Registration of the Real Estate Evaluation Business</span>
                    </div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        If the business involved in performance appraisal and evaluation of real estate, it would require applying for a license.
                    </p>
                    <div className="flex items-center mt-6" ref={(el: any) => el && divs.current.push(el)}>
                        <div className="py-1 px-2 bg-[#ae73db] text-white rounded-full mr-2">14</div>
                        <span className="uppercase font-semibold">Registration of the Rent Guarantee Business</span>
                    </div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        The Rent Guarantee Business refers to the business of entrusting by the tenant, guaranteeing the tenant's rent payment and other related debts.
                        Registration of the Rent Guarantee Business refers that license is required to apply if client is involving in the rent guarantee business.
                    </p>
                    <div className="flex items-center mt-6" ref={(el: any) => el && divs.current.push(el)}>
                        <div className="py-1 px-2 bg-[#ae73db] text-white rounded-full mr-2">15</div>
                        <span className="uppercase font-semibold">Registration of the Type II Financial Instruments Business</span>
                    </div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        If the business involved in raising investment funds from the investors, it would require apply for a license.
                    </p>
                    <div className="flex items-center mt-6" ref={(el: any) => el && divs.current.push(el)}>
                        <div className="py-1 px-2 bg-[#ae73db] text-white rounded-full mr-2">16</div>
                        <span className="uppercase font-semibold">Registration of the Type II Financial Instruments Business</span>
                    </div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        If the business involved in raising investment funds from the investors, it would require apply for a license.
                    </p>
                    <div className="flex items-center mt-6" ref={(el: any) => el && divs.current.push(el)}>
                        <div className="py-1 px-2 bg-[#ae73db] text-white rounded-full mr-2">17</div>
                        <span className="uppercase font-semibold">Construction Industry</span>
                    </div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        If the client is contracting and carrying out the construction with a certain amount, they are required to apply for the construction license.
                    </p>
                    <div className="flex items-center mt-6" ref={(el: any) => el && divs.current.push(el)}>
                        <div className="py-1 px-2 bg-[#ae73db] text-white rounded-full mr-2">18</div>
                        <span className="uppercase font-semibold">Investment Consulting Service</span>
                    </div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        Client needs to apply for the license as they are providing the investment advisory services related to the investment in marketable securities (stock, etc.)
                    </p>
                    <div className="flex items-center mt-6" ref={(el: any) => el && divs.current.push(el)}>
                        <div className="py-1 px-2 bg-[#ae73db] text-white rounded-full mr-2">19</div>
                        <span className="uppercase font-semibold">Loan Industry</span>
                    </div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        If the business conducting is about providing loan service to other parties and obtaining interest income from the loan, the client will need to apply for the license.
                    </p>
                    <div className="flex items-center mt-6" ref={(el: any) => el && divs.current.push(el)}>
                        <div className="py-1 px-2 bg-[#ae73db] text-white rounded-full mr-2">20</div>
                        <span className="uppercase font-semibold">Trading of Second-hand goods</span>
                    </div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        The client needs to apply for the license if they are trading the second-hand goods in Japan.
                    </p>
                    <div className="flex items-center mt-6" ref={(el: any) => el && divs.current.push(el)}>
                        <div className="py-1 px-2 bg-[#ae73db] text-white rounded-full mr-2">21</div>
                        <span className="uppercase font-semibold">Trading of Second-hand goods</span>
                    </div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        In order to enter the China Medical Equipment industry in Japan, the procedures are as below:
                    </p>
                    <ul ref={(el: any) => el && divs.current.push(el)}>
                        <li className="text-xs text-[#807d7d]">&#x2022; Medical Equipment Manufacturing Sales License</li>
                        <li className="text-xs text-[#807d7d]">&#x2022; Manufacture Registration of Medical Equipment</li>
                        <li className="text-xs text-[#807d7d]">&#x2022; Sales Registration for the Medical Equipment</li>
                        <li className="text-xs text-[#807d7d]">&#x2022; Registration of the Foreign Manufacturer</li>
                        <li className="text-xs text-[#807d7d]">&#x2022; Application of the Products Certification, Etc.</li>
                    </ul>
                    {/*  */}
                    <div className="text-[#ae73db] font-medium text-3xl mt-6" ref={(el: any) => el && divs.current.push(el)}>Japan Goudou Kaisha Registration Procedures and Fees</div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        Asia Pacific provides such as preparation of the Articles of Associations of the Goudou Kaisha and other related documentation.
                    </p>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        Foreign investors who decided to register a Japan Goudou Kaisha are required to notarize the identification document at the notary office of the investor's location. In addition, according to the regulations, the Japan Goudou Kaisha shall have a registered (business) address in Japan.
                    </p>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        For the incorporation of the Japan Goudou Kaisha, the investors needs to provide the identification documents and address proof of the investors and members of the Japan Goudou Kaisha, the registered capital, the registered office address (if provided by the clients), the principal business activities and the business models.
                    </p>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        The Japan Goudou Kaisha shall appoint a representative member, the representative member could be the individual investor, assisting in collect and pay for the initial capital remittance, so the representative member shall have a Japan local bank account. If the representative member does not have a local personal bank account, they may entrust a third party, such as a Japanese employee, or Asia Pacific could provide a temporary representative member to complete the procedure of company registration.
                    </p>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        The registration of the Japan Goudou Kaisha takes around 4 to 5 weeks (Excluding the bank account opening time).
                    </p>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        The fees quoted are applicable to the business which does not require an additional license or permit. If the business to be carried out by the Japan Goudou Kaisha requires an extra license or permits, Asia Pacific could assist to apply for such license or permit and the fees will be quoted upon request. Kindly note that this quotation is limited to the registration of Japan Goudou Kaisha in Tokyo, Japan. For the Japan Goudou Kaisha registered in another city in Japan, the fees will be adjusted appropriately.
                    </p>
                    {/*  */}
                    <div className="text-[#ae73db] font-medium text-3xl mt-6" ref={(el: any) => el && divs.current.push(el)}>Japan Kabushiki Kaisha Registration Procedures and Fees</div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        Asia Pacific provides such as preparation of the Articles of Incorporation, the legalization of Articles of Incorporation in Japan, production of 3 company seals and the filing of tax-related documents after incorporation.
                    </p>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        For the purpose of setting up a company in Japan, the investor needs to provide the identity proof and residential address proof issued within 3 months of each shareholder and each director of the Japan Kabushiki Kaisha, the registered capital, the registered office address (if provided by the clients), the principal business activities and the business models.
                    </p>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        In general, the registration of the Japan Kabushiki Kaisha takes around 4 to 5 weeks (Excluding the bank account opening time).
                    </p>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        The fees quoted are applicable to the business which does not require an additional license or permit. If the business to be carried out by the Japan Kabushiki Kaisha requires extra license or permit, Asia Pacific could assist to apply for such license or permit and the fees will be quoted upon request.
                    </p>
                    {/*  */}
                    <div className="text-[#ae73db] font-medium text-3xl mt-6" ref={(el: any) => el && divs.current.push(el)}>Japan Trademark Registration Costs and Registration Procedures</div>
                    <p className="text-xs mt-4 text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        The legal basis of Japan trademark is Trademark Act of 1959. Japan is a member of the Paris Convention and the Madrid Protocol. Japan adopts first-to-file basis for trademark protection. A trademark registration is valid for 10 years from the date of registration and could be renewed for 10 years before the expiry date.
                    </p>
                    <p className="text-xs text-[#807d7d]" ref={(el: any) => el && divs.current.push(el)}>
                        Asia Pacific provides 03 steps service include: Pre-filing search, Trademark registration request and Final registration/certificate
                    </p>
                </div>
                <div className="mb-4">
                    <RequestBanner />
                </div>
            </div>
        </div>
    );
}

export default ConsltancyService;