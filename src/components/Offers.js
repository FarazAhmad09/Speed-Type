import React from 'react';
import { Link } from 'react-router-dom';
import General_trading_license from '../components/images/General Trading License (1).jpg';
import Dubai_Mainland_License from '../components/images/Mainland.jpg';
import Professional_License from '../components/images/PROFEIONAL LICENSE.jpg';
import Services_License from '../components/images/SERVICES.jpg';
import ScrollAnimation from 'react-animate-on-scroll';




export default function Offers() {

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
            <div className='offer-bg-img' id='offers'>
                <section className="py-28">
                    <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
                        <div className="max-w-xl space-y-3 md:mx-auto">
                            <ScrollAnimation animateIn="fadeIn">
                                <h3 className="text-white text-3xl font-bold sm:text-4xl mb-5">
                                    Company Setup <span style={{ color: "#eab308" }}>Offers</span>
                                </h3>
                            </ScrollAnimation>
                        </div>
                        <div className="max-w-xxl space-y-3 md:mx-auto">
                            <ScrollAnimation animateIn="fadeIn">
                                <p className="text-white">
                                    Company Setup Offers provides comprehensive assistance for your business journey, from start to success. Our team saves you time and money by guiding you through initial processes, while our advisors support your growth every step of the way.
                                </p>
                            </ScrollAnimation>
                        </div>
                        {/* <div className="mt-4">
                            <a href="javascript:void(0)" className="inline-block py-2 px-4 text-white font-medium bg-yellow-600 duration-150 hover:bg-yellow-400 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none">
                                Get started
                            </a>
                        </div> */}
                    </div>
                </section>
            </div>

            <section className='py-14'>
                <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                    <div className='relative max-w-xl mx-auto sm:text-center'>
                        <ScrollAnimation animateIn="fadeIn">
                            <h3 className='text-gray-600 text-3xl font-bold sm:text-4xl'>
                                Speed Type <span style={{ color: "#eab308" }}>Offers</span>
                            </h3>
                            <div className='mt-3 max-w-xl'>
                                <p>
                                    Speed Type Offers simplifies business setup, guiding entrepreneurs to success with personalized services and expert support.
                                </p>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>



            <section className="py-8">
                <div className="max-w-screen-xl mx-auto md:px-8">
                    <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                        {/* <ScrollAnimation animateIn="fadeIn">
                            <h3 className="text-gray-800 text-3xl font-bold sm:text-4xl">
                                Jebel Ali Free Zone <span style={{ color: "#eab308" }}>(JAFZA) </span>
                            </h3>
                        </ScrollAnimation> */}
                        <div class="offer-image-container" style={{ backgroundColor: "white", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", borderRadius: 10 }}> {/* Use align-items-start to align items to the start */}
                            <div className="card">
                                <img src={General_trading_license} alt="Card Image" className="card-img-top rounded-lg" />
                                <div className="card-body" style={{ padding: 20 }}>
                                    <h3 className='text-gray-600 text-3xl font-bold sm:text-2xl mb-4'>
                                        General Trading <span style={{ color: "#eab308" }}>License</span>
                                    </h3>
                                    <p className="text-gray-600 mt-2 font-medium mb-4" style={{ fontSize: 14, marginBottom: 20 }} >
                                        A General Trading License allows individuals or businesses to buy, sell, and distribute goods across various sectors within a specific jurisdiction.
                                    </p>
                                    <Link to={"/Offersgtl"}>
                                        <div className="mt-4" style={{ marginBottom: 15 }}>
                                            <a href="javascript:void(0)" className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none">
                                                Get started
                                            </a>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div class="offer-image-container" style={{ backgroundColor: "white", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", borderRadius: 10 }}>
                            <div className="card">
                                <img src={Dubai_Mainland_License} alt="Card Image" className="card-img-top rounded-lg" />
                                <div className="card-body" style={{ padding: 20 }}>
                                    <h3 className='text-gray-600 text-3xl font-bold sm:text-2xl mb-4'>
                                        Dubai Mainland <span style={{ color: "#eab308" }}>License</span>
                                    </h3>
                                    <p className="text-gray-600 mt-2 font-medium mb-4" style={{ fontSize: 14, marginBottom: 20 }} >
                                        A Dubai Mainland License allows businesses unrestricted operation across Dubai, subject to regulations overseen by the Department of Economic Development.
                                    </p>
                                    <Link to={"/Offermainland"}>
                                        <div className="mt-4" style={{ marginBottom: 15 }}>
                                            <a href="javascript:void(0)" className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none">
                                                Get started
                                            </a>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="">
                <div className="max-w-screen-xl mx-auto md:px-8">
                    <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                        <div class="offer-image-container" style={{ backgroundColor: "white", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", borderRadius: 10 }}>
                            <div className="card">
                                <img src={Professional_License} alt="Card Image" className="card-img-top rounded-lg" />
                                <div className="card-body" style={{ padding: 20 }}>
                                    <h3 className='text-gray-600 text-3xl font-bold sm:text-2xl mb-4'>
                                        Professional <span style={{ color: "#eab308" }}>License</span>
                                    </h3>
                                    <p className="text-gray-600 mt-2 font-medium mb-4" style={{ fontSize: 14, marginBottom: 20 }} >
                                        A Professional License allows individuals to practice specific professions within a jurisdiction, requiring relevant qualifications and compliance with standards.
                                    </p>
                                    <Link to={"/Offerprolicence"}>
                                        <div className="mt-4" style={{ marginBottom: 15 }}>
                                            <a href="javascript:void(0)" className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none">
                                                Get started
                                            </a>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>


                        <div class="offer-image-container" style={{ backgroundColor: "white", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", borderRadius: 10 }}>
                            <div className="card">
                                <img src={Services_License} alt="Card Image" className="card-img-top rounded-lg" />
                                <div className="card-body" style={{ padding: 20 }}>
                                    <h3 className='text-gray-600 text-3xl font-bold sm:text-2xl mb-4'>
                                        Services <span style={{ color: "#eab308" }}>License</span>
                                    </h3>
                                    <p className="text-gray-600 mt-2 font-medium mb-4" style={{ fontSize: 14, marginBottom: 20 }} >
                                        A Services License authorizes individuals or businesses to provide specific services within regulated parameters, ensuring quality assurance and consumer protection.
                                    </p>
                                    <Link to={"/Offerservicelicence"}>
                                        <div className="mt-4" style={{ marginBottom: 15 }}>
                                            <a href="javascript:void(0)" className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none">
                                                Get started
                                            </a>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <div className="max-w-screen-xxl mx-auto" style={{ marginTop: 50, paddingBottom: 40, paddingTop: 40, background: "rgb(242, 249, 255)" }}>
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
