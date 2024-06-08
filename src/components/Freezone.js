import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import CustomisedSolutions from './images/customized solution icon.png';
import ExperiencedConsultants from './images/Experienced Consultation icon.png';
import HassleFreeProcedure from './images/hustle free icon.png';
import MultiplePaymentOptions from './images/Multiple Payment icon.png';


export default function Freezone() {

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

            <div className='container-fluid bg-img-freezone main-Offshore ' id="freezone">
                <section className="mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
                    <div className="space-y-4 flex-1 sm:text-center lg:text-left" >
                        <ScrollAnimation animateIn="fadeIn">
                            <h1 className="text-white font-bold text-4xl">
                                Freezone Business<br></br> <span style={{ color: "#eab308" }}>Setup in UAE</span>
                            </h1>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn">
                            <p className="text-white max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                                Explore boundless opportunities with A&A Associate LLC’s Freezone company formation in Dubai, UAE !
                            </p>
                        </ScrollAnimation>
                    </div>
                    {/* <div className="flex-1 text-center  lg:mt-0 lg:ml-3" style={{ marginTop: -100 }}>
                        <img src={side_img} className=" mx-auto sm:w-9/12 " />
                    </div> */}
                </section>
            </div>

            <section className="py-14">
                <div className="max-w-screen-xl mx-auto md:px-8">
                    <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                        <div className="flex-1 sm:hidden lg:block">
                            <ScrollAnimation animateIn="fadeInLeft">
                                <img src="https://globallink.ae/wp-content/uploads/2021/12/Business-setup-in-dubai-UAE-1.jpg" className="md:max-w-lg sm:rounded-lg" alt="" />

                            </ScrollAnimation>
                        </div>
                        <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                            <ScrollAnimation animateIn="fadeIn">
                                <p className="text-gray-600 text-3xl font-bold sm:text-3xl">
                                    Free Zone<br></br> <span style={{ color: "#eab308" }}>Business set up in Dubai</span>
                                </p>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeIn">
                                <p className="text-gray-600 text-2xl font-semibold sm:text-1xl" style={{ fontSize: 20 }}>
                                    Unique advantages of UAE free zone company formation
                                </p>
                                <p className="mt-3  text-gray-500 font-small">
                                    When individuals and institutions weigh the options for UAE free zone company formation, one aspect firmly tilts the balance in favor – free zones.
                                </p>
                                <p className="mt-5  text-gray-500 font-small">
                                    Freezone areas are those designated business zones where corporate and personal income taxes are scaled down to 0%. Choosing a free zone can depend on many factors: the nature and type of business, the size, flexibility and availability of office space, location, and pricing.
                                </p>
                                <p className="mt-5  text-gray-500 font-small">
                                    Obtaining a business license for Dubai freezone company setup is easier and faster than offshore and mainland, given you have the right set of guidance from experts. The decision to set up business in the UAE free zone totally depends on the type of business you’re looking to form.
                                </p>
                            </ScrollAnimation>

                        </div>
                    </div>
                </div>
            </section>



            <div className='' style={{ paddingTop: 10 }}>
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


            <div className="container-fluid main-freezone-contact-img main-freezone-contact">
                <section className="py-14">
                    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                        <div className="max-w-xl">
                            <h3 className="text-5xl font-bold text-white mb-5" style={{ letterSpacing: 1 }}>
                                Have a question?<br></br>
                                Get in touch today
                            </h3>
                            <p className="text-white mt-5 font-semibold" style={{ marginTop: 30 }}>
                                Our experts are always available to answer your queries.
                            </p>
                            <a href="https://wa.me/+971507668212" target='_blank'>
                                <button class="whatsapp-btn" style={{ marginTop: 30 }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="IconChangeColor" height="25" width="25"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" id="mainIconPathAttribute" fill="#ffffff"></path></svg>
                                    WhatsApp
                                </button>
                            </a>

                            <a href="tel:+971507668212" >
                                <button class="phone-number" style={{ marginTop: 30 }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="grey" class="bi bi-telephone" viewBox="0 0 16 16" id="IconChangeColor">
                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" id="mainIconPathAttribute"></path>
                                    </svg>
                                    +971 50 766 8212
                                </button>
                            </a>

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
                                <article className="max-w-md mx-auto mt-4 shadow-lg border  rounded-md duration-300 hover:shadow-sm bg-white" key={key} style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: 40 }}>
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


            <div className=''>
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
