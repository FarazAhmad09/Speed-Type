import React from 'react'
import Footer_logo from './images/speed type logo.png';
import facebook_logo from './images/facebook-logo.png';
import instragram_logo from './images/instragram-logo.png';
import tiktok_logo from './images/tiktok-logo.png';
import linkdin_logo from './images//linkdin-logo.png';

export default function Footer() {

    const footerNavs = [
        {
            label: "Services",
            items: [
                {
                    href: '#mainland',
                    name: 'Mainland Compnay Setup'
                },
                {
                    href: '#offshore',
                    name: 'Offshore Company Setup'
                },
                {
                    href: '#freezone',
                    name: 'Free Zone Company Setup'
                },
                {
                    href: '#visaservice',
                    name: 'Visa Services'
                },
            ],
        },
        {
            label: "Resources",
            items: [
                {
                    href: '#contactus',
                    name: 'Contact'
                },
                {
                    href: '#contactus',
                    name: 'Support'
                },
                {
                    href: '#businessconsultation',
                    name: 'Docs'
                },
                {
                    href: '#offers',
                    name: 'Pricing'
                },
            ],
        },
        {
            label: "About",
            items: [
                {
                    href: '#aboutus',
                    name: 'About US'
                },
                {
                    href: '#aboutus',
                    name: 'Our Mission'
                },
                {
                    href: '#aboutus',
                    name: 'Our Team'
                },
                {
                    href: '#aboutus',
                    name: 'Company Profile'
                },
            ]
        },
    ]

    return (
        <>

            <footer className='bg-gray-800 mt-5' style={{ marginTop: 30 }}>
                <footer className="text-white  px-4 py-5 max-w-screen-xl mx-auto md:px-8">
                    <div className="gap-6 justify-between md:flex">
                        <div className="flex-1">
                            <div className="max-w-sm">
                                <img src={Footer_logo} className="w-40 mb-3" />
                                <p className="leading-relaxed mt-2 text-[15px]">
                                    Speed Type is a prominent service provider company to incorporate the companies within UAE to change the dream of happening business in UAE.
                                </p>
                            </div>

                        </div>
                        <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0" style={{ marginTop: 30 }}>
                            {
                                footerNavs.map((item, idx) => (
                                    <ul
                                        className="space-y-4"
                                        key={idx}
                                    >
                                        <h4 className="text-white font-medium">
                                            {item.label}
                                        </h4>
                                        {
                                            item.items.map(((el, idx) => (
                                                <li key={idx}>
                                                    <a
                                                        href={el.href}
                                                        className=" hover:text-yellow-400"

                                                    >
                                                        {el.name}
                                                    </a>
                                                </li>
                                            )))
                                        }
                                    </ul>
                                ))
                            }
                        </div>
                    </div>
                    <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
                        <div className="mt-4 sm:mt-0">
                            &copy; 2024 Copyright Speed Type.
                        </div>
                        <div className="mt-6 sm:mt-0">
                            <ul className="flex items-center space-x-4">
                                <li className="w-10 h-10  rounded-full flex items-center justify-center">
                                    <a href="https://www.facebook.com/dubaisetupinfo.co/">
                                        <img src={facebook_logo} alt="" width={35} className='' />
                                    </a>
                                </li>


                                <li className="w-10 h-10  rounded-lg flex items-center justify-center">
                                    <a href="https://www.instagram.com/abbas_janjua_786/?igsh=ejZoODVhbWxmaWp5">
                                        <img src={instragram_logo} alt="" width={35} className='' />
                                    </a>
                                </li>

                                <li className="w-10 h-10  rounded-lg flex items-center justify-center">
                                    <a href="wa.link/j6z2no">
                                        <img src={tiktok_logo} alt="" width={35} className='' />
                                    </a>
                                </li>

                                <li className="w-10 h-10  rounded-full flex items-center justify-center">
                                    <a href="https://www.linkedin.com/company/noorabha/">
                                        <img src={linkdin_logo} alt="" width={35} className='' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <style jsx>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
                </footer>
            </footer>

        </>
    )
}
