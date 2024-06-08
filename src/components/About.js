import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Popup from '../components/Popup'

export default function About() {

    const [isOpen, setisOpen] = useState(false);

    const handleCloseModel = () => {
        setisOpen(false);
    };

    return (
        <>
            {
                isOpen && (
                    <Popup closemodel={handleCloseModel} faraz="hello" />
                )
            }
            <div className='about-bg-img' style={{ zIndex: -999 }} id='aboutus'>
                <section className="py-28 relative " >
                    <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
                        <div className="max-w-xxl md:mx-auto">
                            <ScrollAnimation animateIn="fadeIn">
                                <p className="text-white text-3xl font-semibold sm:text-4xl">
                                    Welcome to <span style={{ color: "#eab308" }}>Speed Type </span>
                                </p>
                                <p className="text-blue-100 mt-3">
                                    At Speed Type we specialize in facilitating seamless business setups in Dubai, catering to the diverse needs of entrepreneurs and investors from around the globe. With our extensive experience, industry knowledge, and robust network of
                                    partners, we are committed to guiding you through every step of the process, from initial consultation to successful establishment and beyond.
                                </p>
                            </ScrollAnimation>
                        </div>
                    </div>
                </section>
            </div>

            <div className='bg-gray-100'>
                <section className="py-14">
                    <div className="max-w-screen-xl mx-auto md:px-8">
                        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                            <div className="flex-1 sm:hidden lg:block">
                                <ScrollAnimation animateIn="fadeInLeft">
                                    <img src="https://blackswanbss.com/wp-content/uploads/2023/03/Things-to-Know-About-Business-Licenses-in-Dubai.jpg" className="md:max-w-lg sm:rounded-lg" alt="" />
                                </ScrollAnimation>
                            </div>
                            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                                <ScrollAnimation animateIn="fadeIn">
                                    <p className="text-gray-600 text-3xl font-bold sm:text-3xl">
                                        About <span style={{ color: "#eab308" }}>Speed Type </span>
                                    </p>
                                    <p className="mt-3  text-gray-500 font-small">
                                        Welcome to Speed Type, One of the leading company formation consultants in Dubai. With over 15 years of experience, we are your trusted partners in starting and growing your business in the bustling city of Dubai.
                                        Our expert team at Speed Type understands the intricacies of company formation in Dubai and offers personalized solutions to meet your specific needs.
                                        From business licensing to visa and PRO services, we provide comprehensive assistance throughout the process. We pride ourselves on delivering simple, quick, and risk-free solutions that prioritize your company registration.
                                        Trust Speed Type for seamless and efficient company formation in Dubai.
                                    </p>
                                </ScrollAnimation>

                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}
