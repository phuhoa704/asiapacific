import { useEffect, useRef, useState } from "react";
import ContactCard from "../ContactCard";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import CustomHook from "../../utils/CustomHook";
import { useAppSelector } from "../../redux/hook";
import { Home } from "../../props";
import { HOME_CONSTANTS } from "../../configs/constants.config";
import { translate } from "../../helpers/translator";
const accessToken =
    "pk.eyJ1IjoidGhvbmd0aW5sYW5kIiwiYSI6ImNsZHh5aDk2ZDBsaGQzcG52M240dTJtaDUifQ.bsuTcIH_fvF0T000bsG2tg";
mapboxgl.accessToken = accessToken;

function ContactUs() {
    const { home } = useAppSelector(state => state.home);
    const { language, listLangs } = useAppSelector(state => state.lang);
    const { regions } = useAppSelector(state => state.region);
    const [tag, setTag] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [secondName, setSecondName] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [secondAddress, setSecondAddress] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [fourthName, setFourthName] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [fourthAddress, setFourthAddress] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const divs = useRef<any[]>([]);
    const mapRef = useRef<any>(null);
    useEffect(() => {
        if (mapRef.current) return;
        mapRef.current = new mapboxgl.Map({
            container: "map", // container ID
            center: [105.750647, 10.033181],
            maxZoom: 24,
            style: 'mapbox://styles/mapbox/dark-v10',
            zoom: 15, // starting zoom.
            attributionControl: false,
        });
    }, [])
    useEffect(() => {
        if (mapRef.current) {
            if (regions.length > 0) {
                regions.forEach(r => {
                    if (r.lng && r.lat) {
                        new mapboxgl.Marker()
                            .setLngLat([parseFloat(r.lng), parseFloat(r.lat)])
                            .addTo(mapRef.current)
                    }
                })
            }
        }
    }, [regions, mapRef.current])
    CustomHook(divs);
    useEffect(() => {
        if (home.length > 0) {
            //tag
            const findTag = home.find(h => h.key === HOME_CONSTANTS.CONTACT_US_TAG);
            setTag(findTag ? findTag : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //second name
            const findSecondName = home.find(h => h.key === HOME_CONSTANTS.CONTACT_US_SECOND_NAME);
            setSecondName(findSecondName ? findSecondName : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //second address
            const findSecondAddress = home.find(h => h.key === HOME_CONSTANTS.CONTACT_US_SECOND_ADDRESS);
            setSecondAddress(findSecondAddress ? findSecondAddress : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //fourth name
            const findFourthName = home.find(h => h.key === HOME_CONSTANTS.CONTACT_US_FOURTH_NAME);
            setFourthName(findFourthName ? findFourthName : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //fourth address
            const findFourthAddress = home.find(h => h.key === HOME_CONSTANTS.CONTACT_US_FOURTH_ADDRESS);
            setFourthAddress(findFourthAddress ? findFourthAddress : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
        }
    }, [home])
    return (
        <section className="w-full py-10">
            <div className="w-11/12 m-auto md:w-10/12">
                <div className="flex flex-col items-start">
                    <div className="bg-[#223cd1] text-white w-fit rounded uppercase px-2.5 py-1.5 mb-4 text-xs" ref={(el: any) => el && divs.current.push(el)}>
                        {translate(language, JSON.parse(tag.value), listLangs)}
                    </div>
                    <div className="text-[#ae73db] font-medium text-3xl capitalize" ref={(el: any) => el && divs.current.push(el)}>{translate(language, JSON.parse(tag.value), listLangs)}</div>
                </div>
                <div className="flex flex-col items-center md:flex-row justify-center md:justify-evenly my-6 gap-4 md:gap-2 lg:gap-0" ref={(el: any) => el && divs.current.push(el)}>
                    <ContactCard title={translate(language, JSON.parse(secondName.value), listLangs)} address={translate(language, JSON.parse(secondAddress.value), listLangs)} />
                    <ContactCard title={translate(language, JSON.parse(fourthName.value), listLangs)} address={translate(language, JSON.parse(fourthAddress.value), listLangs)} />
                </div>
                <div className="flex flex-col items-center md:flex-row justify-center md:justify-between mb-6 gap-4 md:gap-2 lg:gap-0" ref={(el: any) => el && divs.current.push(el)}>
                    {regions.map(r => (
                        <ContactCard title={r.abstract_name} address={r.address} />
                    ))}
                </div>
            </div>
            <div className="w-11/12 m-auto h-[400px] md:w-8/12" id="map" ref={(el: any) => el && divs.current.push(el)}></div>
        </section>
    );
}

export default ContactUs;