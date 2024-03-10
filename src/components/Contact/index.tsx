import { useEffect, useRef, useState } from "react";
import ContactCard from "../ContactCard";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
const accessToken =
  "pk.eyJ1IjoidGhvbmd0aW5sYW5kIiwiYSI6ImNsZHh5aDk2ZDBsaGQzcG52M240dTJtaDUifQ.bsuTcIH_fvF0T000bsG2tg";
mapboxgl.accessToken = accessToken;

function ContactUs() {
    const mapRef = useRef<any>(null);
    const [contacts] = useState([
        { id: 1, title: 'Send Us Mail', address: 'info@AsiaPcificcpa.com' },
        { id: 2, title: 'Call us anytime', address: '(+85) 22341 1444' },
    ])
    const [offices] = useState([
        { id: 1, title: 'HongKong Office', address: 'Flat/RM 1C, Block A1, 15/F Hang Wai Industry Center, 06 Kin Tai Street, Tuen Mun, NT, Hong Kong' },
        { id: 2, title: 'Viet Nam Office', address: 'P4-SH06, Park 04, Dien Bien Phu Street, Vinhomes Tan Cang, Binh Thanh District, Ho Chi Minh City, Vietnam' },
        { id: 3, title: 'Japan Office', address: '1-2-1205 Okubo, Shinjuku-ku, Tokyo 169-0072' },
    ])
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
        mapRef.current.on('load', function() {
            new mapboxgl.Marker()
            .setLngLat([105.749317, 10.033287])
            .addTo(mapRef.current)
        })
        mapRef.current.on('load', function() {
            new mapboxgl.Marker()
            .setLngLat([105.749564, 10.031723])
            .addTo(mapRef.current)
        })
        mapRef.current.on('load', function() {
            new mapboxgl.Marker()
            .setLngLat([105.752031, 10.032938])
            .addTo(mapRef.current)
        })
    }, [])
    return (
        <section className="w-full py-10">
            <div className="w-9/12 m-auto">
                <div className="flex flex-col items-start">
                    <div className="bg-[#223cd1] text-white w-fit rounded uppercase px-2.5 py-1.5 mb-4 text-xs">
                        contact us
                    </div>
                    <div className="text-[#ae73db] font-medium text-3xl">Contact Us</div>
                </div>
                <div className="flex justify-evenly my-6">
                    {contacts.map(c => (
                        <ContactCard title={c.title} address={c.address} key={c.id} />
                    ))}
                </div>
                <div className="flex justify-between mb-6">
                    {offices.map(o => (
                        <ContactCard title={o.title} key={o.id} address={o.address} />
                    ))}
                </div>
            </div>
            <div className="w-8/12 m-auto h-[400px]" id="map"></div>
        </section>
    );
}

export default ContactUs;