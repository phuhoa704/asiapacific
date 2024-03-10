import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import usa from '../../assets/usa.png';

const Header = () => {
    const { pathname } = useLocation();
    const [navLinks] = useState([
        {
            id: 1, name: 'Home', href: '/', children: [
                { name: 'Test', href: '/' }
            ]
        },
        {
            id: 2, name: 'About Us', href: '/about', children: [
                { name: 'Test', href: '/' }
            ]
        },
        {
            id: 3, name: 'Services', href: '/services', children: [
                { name: 'Test', href: '/' }
            ]
        },
        {
            id: 4, name: 'Region', href: '/region', children: [
                { name: 'Test', href: '/' }
            ]
        },
        {
            id: 5, name: 'News', href: '/news', children: []
        },
        {
            id: 6, name: 'Contact', href: '/contact', children: []
        },
    ])
    return (
        <div className="w-10/12 m-auto">
            <div className="flex justify-between bg-[#223cd1] text-sm px-6 py-2 rounded-b-[30px] w-10/12 m-auto">
                <div className="flex">
                    <div className="flex items-center">
                        <i className="fa-solid fa-envelope text-[#f1c853]"></i>
                        <span className="text-white ml-2">breezacare@gmail.com</span>
                    </div>
                    <div className="flex items-center ml-2">
                        <i className="fa-solid fa-location-dot text-[#f1c853]"></i>
                        <span className="text-white ml-2">231 madison Street, New York, USA</span>
                    </div>
                </div>
                <div className="flex items-center text-white">
                    <span className="mr-5">Mon-Fri: 10:00am - 09:00PM</span>
                    <i className="fa-brands fa-facebook-f mr-2.5 cursor-pointer"></i>
                    <i className="fa-brands fa-instagram mr-2.5 cursor-pointer"></i>
                    <i className="fa-brands fa-twitter mr-2.5 cursor-pointer"></i>
                    <i className="fa-brands fa-linkedin-in mr-2.5 cursor-pointer"></i>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex items-center">
                    <div className='w-[70px]'>
                        <img src={logo} alt="" className='w-full' />
                    </div>
                    <div className="flex flex-col items-center">
                        <span className='font-bold tracking-[7px]'>ASIA PACIFIC</span>
                        <span className='text-sm tracking-[4px]'>BUSINESS</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex items-center mr-4 text-sm">
                        {navLinks.map(n => (
                            <NavLink key={n.id} to={n.href} className={(pathname === n.href) ? 'text-[#cf2757] mr-3 font-medium' : 'text-[#2328ba] mr-3 font-medium'}>
                                {n.name}
                                {(n.children.length > 0) && <i className="fa-solid fa-chevron-down text-sm ml-1"></i>}
                            </NavLink>
                        ))}
                    </div>
                    <div className="flex items-center mr-4">
                        <button className='bg-[#fdcd2e] text-[#cf2757] rounded p-2.5'>Book a consultation now</button>
                    </div>
                    <div className="flex items-center">
                        <button className="text-[#fdcd2e] bg-[#f5e2d7] flex items-center px-2.5 py-2 rounded">
                            <i className="fa-solid fa-globe"></i>
                            <img src={usa} alt="" className='w-[25px] ml-2'/>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;