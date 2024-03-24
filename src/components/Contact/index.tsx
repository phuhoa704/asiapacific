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
    const [firstName, setFirstName] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [firstAddress, setFirstAddress] = useState<Home>({
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
    const [thirdName, setThirdName] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [thirdAddress, setThirdAddress] = useState<Home>({
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
    const [fifthName, setFifthName] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    const [fifthAddress, setFifthAddress] = useState<Home>({
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
        mapRef.current.on('load', function () {
            new mapboxgl.Marker()
                .setLngLat([105.749317, 10.033287])
                .addTo(mapRef.current)
        })
        mapRef.current.on('load', function () {
            new mapboxgl.Marker()
                .setLngLat([105.749564, 10.031723])
                .addTo(mapRef.current)
        })
        mapRef.current.on('load', function () {
            new mapboxgl.Marker()
                .setLngLat([105.752031, 10.032938])
                .addTo(mapRef.current)
        })
    }, [])
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
            //first name
            const findFirstName = home.find(h => h.key === HOME_CONSTANTS.CONTACT_US_FIRST_NAME);
            setFirstName(findFirstName ? findFirstName : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //first address
            const findFirstAddress = home.find(h => h.key === HOME_CONSTANTS.CONTACT_US_FIRST_ADDRESS);
            setFirstAddress(findFirstAddress ? findFirstAddress : {
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
            //third name
            const findThirdName = home.find(h => h.key === HOME_CONSTANTS.CONTACT_US_THIRD_NAME);
            setThirdName(findThirdName ? findThirdName : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //third address
            const findThirdAddress = home.find(h => h.key === HOME_CONSTANTS.CONTACT_US_THIRD_ADDRESS);
            setThirdAddress(findThirdAddress ? findThirdAddress : {
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
            //fifth name
            const findFifthName = home.find(h => h.key === HOME_CONSTANTS.CONTACT_US_FIFTH_NAME);
            setFifthName(findFifthName ? findFifthName : {
                id: 0,
                created_at: '',
                image_desc: '',
                key: '',
                type: 1,
                updated_at: '',
                value: '{}'
            })
            //fifth address
            const findFifthAddress = home.find(h => h.key === HOME_CONSTANTS.CONTACT_US_FIFTH_ADDRESS);
            setFifthAddress(findFifthAddress ? findFifthAddress : {
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
            <div className="w-9/12 m-auto">
                <div className="flex flex-col items-start">
                    <div className="bg-[#223cd1] text-white w-fit rounded uppercase px-2.5 py-1.5 mb-4 text-xs" ref={(el: any) => el && divs.current.push(el)}>
                        {translate(language, JSON.parse(tag.value), listLangs)}
                    </div>
                    <div className="text-[#ae73db] font-medium text-3xl capitalize" ref={(el: any) => el && divs.current.push(el)}>{translate(language, JSON.parse(tag.value), listLangs)}</div>
                </div>
                <div className="flex justify-evenly my-6" ref={(el: any) => el && divs.current.push(el)}>
                    <ContactCard title={translate(language, JSON.parse(secondName.value), listLangs)} address={translate(language, JSON.parse(secondAddress.value), listLangs)} />
                    <ContactCard title={translate(language, JSON.parse(fourthName.value), listLangs)} address={translate(language, JSON.parse(fourthAddress.value), listLangs)} />
                </div>
                <div className="flex justify-between mb-6" ref={(el: any) => el && divs.current.push(el)}>
                    {regions.map(r => (
                        <ContactCard title={r.abstract_name} address={r.address} />
                    ))}
                </div>
            </div>
            <div className="w-8/12 m-auto h-[400px]" id="map" ref={(el: any) => el && divs.current.push(el)}></div>
        </section>
    );
}

export default ContactUs;