import React from 'react';
import difc_img from './images/difc.jpeg';
import ScrollAnimation from 'react-animate-on-scroll';
import CustomisedSolutions from './images/customized solution icon.png';
import ExperiencedConsultants from './images/Experienced Consultation icon.png';
import HassleFreeProcedure from './images/hustle free icon.png';
import MultiplePaymentOptions from './images/Multiple Payment icon.png';

export default function DIFC() {


    const posts = [
        {
            title: "Mainland Company Setup",
            desc: "Explore limitless possibilities with Speed Type expert guidance in Mainland company formation in Dubai.",
        },
        {
            title: "Offshore Company Setup",
            desc: "Offshore companies can be created and owned by individuals or institutions, and shares can be easily and freely transferred by a written instrument.",
        },
        {
            title: "Free Zone Company Setup",
            desc: "Explore boundless opportunities with A&A Associate LLC’s Freezone company formation in Dubai, UAE !",
        },
    ]


    return (
        <>

            <div className='bg-white'>
                <section className="py-14 " style={{ background: "rgb(242, 249, 255)" }}>
                    <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
                        <div className="max-w-xxl space-y-3 md:mx-auto">
                            <ScrollAnimation animateIn="fadeIn">
                                <h3 className="text-gray-800 text-3xl font-bold sm:text-4xl">
                                    Dubai International Financial Centre <span style={{ color: "#eab308" }}>(DIFC) </span>
                                </h3>
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className="max-w-screen-xl mx-auto px-4  md:px-8 mt-5">
                        <div className="max-w-xxl space-y-3 md:mx-auto">
                            <ScrollAnimation animateIn="fadeIn">
                                <p className="text-gray-600 pb-5">
                                    The Dubai International Financial Centre (DIFC) is a leading financial hub located in the
                                    heart of Dubai, United Arab Emirates (UAE). Established in 2004, DIFC has quickly
                                    become a key player in the global financial landscape, attracting financial institutions,
                                    multinational corporations, professional services firms, and entrepreneurs from around
                                    the world. Here's a description and the benefits of Dubai International Financial Centre:
                                </p>
                                <p className="text-gray-600 pb-5 mt-5">
                                    Spanning over 110 acres, the Dubai International Financial Centre is
                                    strategically situated in downtown Dubai, adjacent to iconic landmarks such as the Burj
                                    Khalifa and Dubai Mall. It operates as an independent jurisdiction with its own legal and
                                    regulatory framework based on English common law, providing a secure and stable
                                    environment for businesses to operate. DIFC offers a comprehensive range of financial
                                    and professional services, including banking, asset management, capital markets,
                                    insurance, legal, accounting, consulting, and fintech, among others. It is home to over
                                    2,500 companies, including more than 200 of the world's top financial institutions.
                                </p>
                            </ScrollAnimation>
                            <div className="flex justify-center">
                                <ScrollAnimation animateIn="fadeIn">
                                    <img src={difc_img} className="md:max-w-3xl sm:max-w-xxl sm:rounded-lg" alt="" />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            <section className="py-2 mt-5 mb-5" style={{ marginTop: 50 }}>
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className='row' style={{ marginTop: 70 }}>
                        <div className='col '>
                            <div>
                                <ScrollAnimation animateIn="fadeIn">
                                    <h3 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-5" style={{ fontSize: 35, marginLeft: 0, lineHeight: 1.2 }}>
                                        Dubai International Financial Centre <span style={{ color: "#eab308" }}>(DIFC) </span>
                                        Benefits:
                                    </h3>
                                    {/* <p className="text-gray-600 pb-5">
                                        The Dubai Multi Commodities Centre (DMCC) offers several benefits <br></br>to businesses operating
                                        within its jurisdiction:
                                    </p> */}
                                </ScrollAnimation>
                            </div>
                        </div>
                        <div className='col '>
                            <ScrollAnimation animateIn="fadeIn">
                                <div className='flex flex-row'>
                                    <h1 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-5" style={{ fontSize: 40, marginLeft: 0 }}>
                                        <span style={{ color: "#eab308" }}>1</span>
                                    </h1>
                                    <h3 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-5 " style={{ fontSize: 25, marginLeft: 30 }}>
                                        Global Financial <span style={{ color: "#eab308" }}>Hub</span>
                                        <br></br>
                                        <p className="text-gray-600 pb-5" style={{ fontSize: 16, fontWeight: 'normal', }}>
                                            DIFC serves as a gateway to the Middle East, Africa, and
                                            South Asia (MEASA) region, offering unparalleled access to emerging markets
                                            and facilitating cross-border trade and investment flows.
                                        </p>
                                    </h3>
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="fadeIn">
                                <div className='flex flex-row'>
                                    <h1 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-5" style={{ fontSize: 40, marginLeft: 0 }}>
                                        <span style={{ color: "#eab308" }}>2</span>
                                    </h1>
                                    <h3 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-5 " style={{ fontSize: 25, marginLeft: 30 }}>
                                        Business-Friendly <span style={{ color: "#eab308" }}>Environment:</span>
                                        <br></br>
                                        <p className="text-gray-600 pb-5" style={{ fontSize: 16, fontWeight: 'normal' }}>
                                            DIFC provides a business-friendly environment
                                            with a robust legal and regulatory framework, efficient dispute resolution
                                            mechanisms, and investor-friendly policies, ensuring transparency, certainty, and
                                            ease of doing business.
                                        </p>
                                    </h3>
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="fadeIn">
                                <div className='flex flex-row'>
                                    <h1 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-5" style={{ fontSize: 40, marginLeft: 0 }}>
                                        <span style={{ color: "#eab308" }}>3</span>
                                    </h1>
                                    <h3 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-5 " style={{ fontSize: 25, marginLeft: 30 }}>
                                        Independent <span style={{ color: "#eab308" }}>Jurisdiction</span>
                                        <br></br>
                                        <p className="text-gray-600 pb-5" style={{ fontSize: 16, fontWeight: 'normal' }}>
                                            DIFC operates as an independent jurisdiction with its
                                            own legal and regulatory system, based on English common law principles,
                                            providing legal certainty and protection for businesses and investors.
                                        </p>
                                    </h3>
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="fadeIn">
                                <div className='flex flex-row'>
                                    <h1 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-5" style={{ fontSize: 40, marginLeft: 0 }}>
                                        <span style={{ color: "#eab308" }}>4</span>
                                    </h1>
                                    <h3 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-5 " style={{ fontSize: 25, marginLeft: 30 }}>
                                        Tax <span style={{ color: "#eab308" }}>Efficiency</span>
                                        <br></br>
                                        <p className="text-gray-600 pb-5" style={{ fontSize: 16, fontWeight: 'normal' }}>
                                            DIFC offers a tax-efficient environment with zero corporate and
                                            personal income taxes, no withholding taxes on dividends and capital gains, and
                                            no restrictions on the repatriation of profits and capital.
                                        </p>
                                    </h3>
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="fadeIn">
                                <div className='flex flex-row'>
                                    <h1 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-5" style={{ fontSize: 40, marginLeft: 0 }}>
                                        <span style={{ color: "#eab308" }}>5</span>
                                    </h1>
                                    <h3 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-5 " style={{ fontSize: 25, marginLeft: 30 }}>
                                        World-Class <span style={{ color: "#eab308" }}>Infrastructure</span>
                                        <br></br>
                                        <p className="text-gray-600 pb-5" style={{ fontSize: 16, fontWeight: 'normal' }}>
                                            DIFC features state-of-the-art infrastructure,
                                            including Grade A office spaces, commercial towers, conference facilities,
                                            business centers, retail outlets, hotels, and residential apartments, designed to
                                            meet the needs of businesses and professionals.

                                        </p>
                                    </h3>
                                </div>
                            </ScrollAnimation>


                            <ScrollAnimation animateIn="fadeIn">
                                <div className='flex flex-row'>
                                    <h1 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-5" style={{ fontSize: 40, marginLeft: 0 }}>
                                        <span style={{ color: "#eab308" }}>6</span>
                                    </h1>
                                    <h3 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-5 " style={{ fontSize: 25, marginLeft: 30 }}>
                                        Financial Services <span style={{ color: "#eab308" }}>Ecosystem</span>
                                        <br></br>
                                        <p className="text-gray-600 pb-5" style={{ fontSize: 16, fontWeight: 'normal' }}>
                                            DIFC hosts a vibrant financial services ecosystem,
                                            comprising banks, asset managers, insurance companies, investment firms,
                                            fintech startups, legal and accounting firms, and other professional service
                                            providers, fostering collaboration, innovation, and growth
                                        </p>
                                    </h3>
                                </div>
                            </ScrollAnimation>


                            <ScrollAnimation animateIn="fadeIn">
                                <div className='flex flex-row'>
                                    <h1 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-5" style={{ fontSize: 40, marginLeft: 0 }}>
                                        <span style={{ color: "#eab308" }}>7</span>
                                    </h1>
                                    <h3 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-5 " style={{ fontSize: 25, marginLeft: 30 }}>
                                        Access to <span style={{ color: "#eab308" }}>Talent</span>
                                        <br></br>
                                        <p className="text-gray-600 pb-5" style={{ fontSize: 16, fontWeight: 'normal' }}>
                                            DIFC provides access to a skilled and diverse talent pool, with
                                            professionals from around the world attracted to Dubai's cosmopolitan lifestyle,
                                            career opportunities, and competitive salaries.
                                        </p>
                                    </h3>
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="fadeIn">
                                <div className='flex flex-row'>
                                    <h1 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-5" style={{ fontSize: 40, marginLeft: 0 }}>
                                        <span style={{ color: "#eab308" }}>8</span>
                                    </h1>
                                    <h3 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-5 " style={{ fontSize: 25, marginLeft: 30 }}>
                                        Networking <span style={{ color: "#eab308" }}>Opportunities</span>
                                        <br></br>
                                        <p className="text-gray-600 pb-5" style={{ fontSize: 16, fontWeight: 'normal' }}>
                                            DIFC organizes events, seminars, conferences, and
                                            networking sessions to facilitate industry networking, knowledge sharing, and
                                            business collaborations among its community members.
                                        </p>
                                    </h3>
                                </div>
                            </ScrollAnimation>


                            <ScrollAnimation animateIn="fadeIn">
                                <div className='flex flex-row'>
                                    <h1 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-5" style={{ fontSize: 40, marginLeft: 0 }}>
                                        <span style={{ color: "#eab308" }}>9</span>
                                    </h1>
                                    <h3 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-5 " style={{ fontSize: 25, marginLeft: 30 }}>
                                        Quality of <span style={{ color: "#eab308" }}>Life</span>
                                        <br></br>
                                        <p className="text-gray-600 pb-5" style={{ fontSize: 16, fontWeight: 'normal' }}>
                                            DIFC offers a high quality of life with world-class amenities,
                                            including restaurants, cafes, retail outlets, fitness centers, green spaces, and
                                            cultural attractions, creating a vibrant and dynamic environment for residents and
                                            professionals.
                                        </p>
                                    </h3>
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="fadeIn">
                                <div className='flex flex-row'>
                                    <h1 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-5" style={{ fontSize: 40, marginLeft: 0 }}>
                                        <span style={{ color: "#eab308" }}>10</span>
                                    </h1>
                                    <h3 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-5 " style={{ fontSize: 25, marginLeft: 30 }}>
                                        Sustainability <span style={{ color: "#eab308" }}>Initiatives</span>
                                        <br></br>
                                        <p className="text-gray-600 pb-5" style={{ fontSize: 16, fontWeight: 'normal' }}>
                                            DIFC is committed to sustainability and environmental
                                            stewardship, implementing green building standards, energy-efficient practices,
                                            waste management programs, and environmental awareness campaigns to
                                            minimize its ecological footprint and promote sustainable development.
                                        </p>
                                    </h3>
                                </div>
                            </ScrollAnimation>


                        </div>
                    </div>
                </div>
            </section >




            <div className='bg-white' style={{ paddingTop: 40 }}>
                <section className="py-2 mt-5 mb-5" >
                    <div className="max-w-screen-xl mx-auto px-4">
                        <ScrollAnimation animateIn="fadeIn">
                            <h3 className="text-gray-600 text-2xl font-bold sm:text-3xl pb-1 text-center">
                                Why <span style={{ color: "#eab308" }}>Us?</span>
                            </h3>
                        </ScrollAnimation>
                    </div>
                </section>

                <section className="py-2 mt-5 mb-5 " style={{ marginTop: 30, paddingBottom: 50, display: "flex" }}>
                    <div className="max-w-screen-xl mx-auto px-4">
                        <div className='row whyus-md'> {/* Changed from d-flex justify-content-center to text-center */}
                            <div className='col-md-4 mb-5' style={{ marginRight: '8rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img
                                        width="55"
                                        height="55"
                                        alt=""
                                        className="attachment-full size-full wp-image-7327 lazyloaded"
                                        decoding="async"
                                        nitro-lazy-empty=""
                                        id="ODUxODoyNzY=-1"
                                        src={CustomisedSolutions} />

                                    <h3 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-1" style={{ fontSize: 24, marginLeft: 15, lineHeight: 1 }}>
                                        Customised <br></br><span style={{ color: "#eab308" }}>Solutions</span>
                                    </h3>
                                </div>
                            </div>
                            <div className='col-md-4 mb-5' style={{ marginRight: '8rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img
                                        width="55"
                                        height="55"
                                        alt=""
                                        className="attachment-full size-full wp-image-7329 lazyloaded"
                                        decoding="async"
                                        nitro-lazy-empty=""
                                        id="ODUyNjoyNzY=-1"
                                        src={ExperiencedConsultants}
                                    />
                                    <h3 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-1" style={{ fontSize: 24, marginLeft: 15, lineHeight: 1 }}>
                                        Experienced <br></br><span style={{ color: "#eab308" }}>Consultants</span>
                                    </h3>
                                </div>
                            </div>
                            <div className='col-md-4 mb-5' style={{ marginRight: '8rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img width="55" height="55" alt="" class="attachment-full wp-image-7326 lazyloaded" decoding="async" nitro-lazy-empty="" id="ODg3MzoyNzY=-1" src={HassleFreeProcedure} />
                                    <h3 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-1" style={{ fontSize: 24, marginLeft: 15, lineHeight: 1 }}>
                                        Hassle-Free <br></br><span style={{ color: "#eab308" }}>Procedure</span>
                                    </h3>
                                </div>
                            </div>
                            <div className='col-md-4 mb-5' >
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img width="55" height="55" alt="" class="attachment-full wp-image-7328 lazyloaded" decoding="async" id="ODg4MToyNzY=-1" src={MultiplePaymentOptions} />
                                    <h3 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-1" style={{ fontSize: 24, marginLeft: 15, lineHeight: 1 }}>
                                        Multiple Payment <br></br><span style={{ color: "#eab308" }}>Options</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            <div className="max-w-screen-xxl mx-auto" style={{ paddingBottom: 40, paddingTop: 40, background: "rgb(242, 249, 255)" }}>
                <section className="py-2 mt-5 ">
                    <div className="max-w-screen-xl mx-auto px-4">
                        <ScrollAnimation animateIn="fadeIn">
                            <h3 className="text-gray-600 text-2xl font-bold sm:text-3xl pb-1 text-center">
                                Our Other <span style={{ color: "#eab308" }}>Services</span>
                            </h3>
                            <p className="text-gray-600 mt-2 text-center font-semibold" style={{ fontSize: 18 }}>
                                Also you can find our Other Services here.
                            </p>
                        </ScrollAnimation>
                    </div>
                </section>

                <div className="max-w-screen-xl mx-auto">
                    <div className=" grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            posts.map((items, key) => (
                                <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm bg-white our-other-service" key={key}>
                                    <div className='p-5' >
                                        <a href={items.href}>
                                            <div className="pt-3 ml-4 mr-2 mb-3">
                                                <h3 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-1 " style={{ color: "#eab308" }}>
                                                    {items.title}
                                                </h3>
                                                <p className="text-gray-400 text-sm mt-1 " style={{ fontSize: 14 }}>{items.desc}</p>
                                            </div>
                                        </a>
                                    </div>
                                </article>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='mb-5'>
                <section className="py-14">
                    <div className="max-w-screen-xl mx-auto md:px-8">
                        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                            <div className="flex-1 sm:hidden lg:block" style={{ marginBottom: 200 }}>
                                <div className="fb-iframe-container">
                                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fdubaisetupinfo.co&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                                        width="1240" height="500" className='fb-frame' style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                                </div>
                            </div>
                            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                                <div className="fb-container-text">
                                    <h3 className="text-gray-600 text-3xl font-bold sm:text-4xl mb-5">
                                        Speed Type  <span className="text-yellow-500">Facebook Page</span>
                                    </h3>
                                    <p className="text-gray-900 text-1xl font-normal sm:text-1xl ">
                                        This company's Facebook page is a testament to their dedication to excellence, fostering a vibrant community, and showcasing their creativity. With captivating content and interactive engagement, they go beyond mere promotion, building genuine connections with their audience. Each post tells a story, evoking emotions and leaving a lasting impression on followers. Their commitment to innovation shines through in every aspect of their page, setting them apart from the competition. Moreover, they prioritize customer satisfaction, ensuring transparency and authenticity in all interactions. Their page serves as a window into their values and aspirations, inspiring trust and loyalty among their followers. Overall, this company's Facebook presence embodies their passion for making a difference and leaves a lasting impact on all who engage with it.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


        </>
    )
}
