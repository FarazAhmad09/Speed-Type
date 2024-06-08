import React from 'react';
import dsfz_img from './images/dsfz.jpeg';
import ScrollAnimation from 'react-animate-on-scroll';
import CustomisedSolutions from './images/customized solution icon.png';
import ExperiencedConsultants from './images/Experienced Consultation icon.png';
import HassleFreeProcedure from './images/hustle free icon.png';
import MultiplePaymentOptions from './images/Multiple Payment icon.png';

export default function DSFZ() {

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
                                    Dubai South Free Zone <span style={{ color: "#eab308" }}>(DSFZ) </span>
                                </h3>
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className="max-w-screen-xl mx-auto px-4  md:px-8 mt-5">
                        <div className="max-w-xxl space-y-3 md:mx-auto">
                            <ScrollAnimation animateIn="fadeIn">
                                <p className="text-gray-600 pb-5">
                                    Dubai South Free Zone, previously known as Dubai World Central (DWC) or Dubai
                                    South, is a master-planned development located near the Jebel Ali Port and Al Maktoum
                                    International Airport in Dubai, United Arab Emirates (UAE). It is designed to serve as a
                                    key component of Dubai's economic diversification strategy and a central hub for trade,
                                    logistics, aviation, and various other industries. Here's a description and the benefits of
                                    Dubai South Free Zone:
                                </p>
                                <p className="text-gray-600 pb-5 mt-5">
                                    Dubai South Free Zone covers an extensive area of approximately 145
                                    square kilometers and is strategically situated in close proximity to major transportation
                                    hubs, including Jebel Ali Port, Al Maktoum International Airport, and the Expo 2020 site.
                                    It comprises various specialized zones and districts, including logistics, aviation,
                                    commercial, residential, and leisure, catering to the diverse needs of businesses and
                                    residents. Dubai South aims to create a sustainable and integrated urban community
                                    with world-class infrastructure, modern facilities, and business-friendly regulations.
                                </p>
                            </ScrollAnimation>
                            <div className="flex justify-center">
                                <ScrollAnimation animateIn="fadeIn">
                                    <img src={dsfz_img} className="md:max-w-3xl sm:max-w-xxl sm:rounded-lg" alt="" />
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
                                        Dubai South Free Zone <span style={{ color: "#eab308" }}>(DSFZ) </span>
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
                                        Strategic <span style={{ color: "#eab308" }}>Location</span>
                                        <br></br>
                                        <p className="text-gray-600 pb-5" style={{ fontSize: 16, fontWeight: 'normal', }}>
                                            Dubai South Free Zone is strategically located near major
                                            transportation hubs, providing easy access to global markets and facilitating
                                            trade, logistics, and connectivity.
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
                                        Logistics and  <span style={{ color: "#eab308" }}> Trade Hub</span>
                                        <br></br>
                                        <p className="text-gray-600 pb-5" style={{ fontSize: 16, fontWeight: 'normal' }}>
                                            Dubai South serves as a major logistics and trade hub,
                                            offering integrated logistics solutions, warehousing facilities, distribution centers,
                                            and value-added services to facilitate supply chain management and trade
                                            activities.
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
                                        Aviation <span style={{ color: "#eab308" }}>Hub</span>
                                        <br></br>
                                        <p className="text-gray-600 pb-5" style={{ fontSize: 16, fontWeight: 'normal' }}>
                                            Dubai South is home to Al Maktoum International Airport, which
                                            is designed to become the world's largest airport upon completion. It serves as a
                                            hub for passenger and cargo flights, aviation-related services, and aerospace
                                            industries.
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
                                        Business-Friendly <span style={{ color: "#eab308" }}>Environment</span>
                                        <br></br>
                                        <p className="text-gray-600 pb-5" style={{ fontSize: 16, fontWeight: 'normal' }}>
                                            Dubai South Free Zone provides a businessfriendly environment with streamlined procedures, investor-friendly policies, and
                                            a supportive regulatory framework, ensuring ease of doing business and investor
                                            confidence.
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
                                        Specialized <span style={{ color: "#eab308" }}>Zones</span>
                                        <br></br>
                                        <p className="text-gray-600 pb-5" style={{ fontSize: 16, fontWeight: 'normal' }}>
                                            Dubai South offers specialized zones and districts tailored to
                                            different industries, including logistics, aviation, commercial, residential, and
                                            leisure, providing a conducive environment for businesses to thrive
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
                                        Customized <span style={{ color: "#eab308" }}>Solutions</span>
                                        <br></br>
                                        <p className="text-gray-600 pb-5" style={{ fontSize: 16, fontWeight: 'normal' }}>
                                            Dubai South Free Zone offers customized solutions and
                                            support services for businesses, including licensing, registration, visa processing,
                                            legal assistance, banking, insurance, and administrative support, to meet the
                                            specific needs of companies operating within its jurisdiction
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
                                        Infrastructure and <span style={{ color: "#eab308" }}>Facilities</span>
                                        <br></br>
                                        <p className="text-gray-600 pb-5" style={{ fontSize: 16, fontWeight: 'normal' }}>
                                            Dubai South features world-class infrastructure,
                                            including office spaces, warehouses, industrial parks, business centers, hotels,
                                            residential communities, recreational facilities, and green spaces, designed to
                                            meet the needs of businesses and residents.
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
                                        Access to <span style={{ color: "#eab308" }}>Markets</span>
                                        <br></br>
                                        <p className="text-gray-600 pb-5" style={{ fontSize: 16, fontWeight: 'normal' }}>
                                            Dubai South provides access to regional and international
                                            markets, including the Middle East, Africa, Asia, and beyond, offering
                                            opportunities for businesses to expand their reach and grow their market share.
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
                                        Networking <span style={{ color: "#eab308" }}>Opportunities</span>
                                        <br></br>
                                        <p className="text-gray-600 pb-5" style={{ fontSize: 16, fontWeight: 'normal' }}>
                                            Dubai South organizes events, seminars,
                                            conferences, trade fairs, and networking sessions to facilitate industry networking,
                                            knowledge sharing, and business collaborations among its community members.
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
                                            Dubai South is committed to sustainability and
                                            environmental stewardship, implementing green building standards, renewable
                                            energy solutions, waste management programs, and environmental awareness
                                            campaigns to minimize its ecological footprint and promote sustainable
                                            development.
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
