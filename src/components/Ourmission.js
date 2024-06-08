import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


export default function Ourmission() {
    return (
        <>
            <div className='bg-white'>

                <section className="py-14">
                    <div className="max-w-screen-xl mx-auto md:px-8">
                        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                                <ScrollAnimation animateIn="fadeIn">
                                    <p className="text-gray-600 text-3xl font-bold sm:text-4xl">
                                        Our <span className="text-yellow-500">Misson</span>
                                    </p>
                                    <p className="text-gray-500 leading-relaxed mt-3">
                                        "Speed Type, our unwavering commitment propels us toward a singular goal: to emerge as the preeminent leader within the dynamic landscape of the MENA region. We are not merely a provider of services; we are architects of transformation, architects of innovation. With an exhaustive array of value-added services meticulously crafted to meet the diverse needs of businesses, we catalyze growth and inspire progress.
                                    </p>
                                    <p className="text-gray-500 leading-relaxed mt-3">
                                        Our vision extends far beyond the horizon of conventional success. We are pioneers of possibility, catalysts of change, and champions of sustainability. Rooted in a culture of innovation, we endeavor to redefine the very essence of business models, elevating profitability while safeguarding the planet for future generations."
                                    </p>
                                </ScrollAnimation>
                            </div>
                            <div className="flex-1 sm:hidden lg:block">
                                <ScrollAnimation animateIn="fadeInRight">
                                    <img src="https://miro.medium.com/v2/resize:fit:1120/0*1qiHeLp1k0KiZfFn.jpg" className="md:max-w-lg sm:rounded-lg" alt="" />
                                </ScrollAnimation>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}


