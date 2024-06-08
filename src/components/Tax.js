import React from 'react';
import tick_icon from './images/tick-icon.png';
import ScrollAnimation from 'react-animate-on-scroll';



export default function Tax() {
    return (
        <>

            <div className='container-fluid bg-img-tax main-mainland'>
                <section className="mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
                    <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                        <ScrollAnimation animateIn="fadeIn">
                            <h1 className="text-white font-bold text-4xl">
                                End-to-End Tax and Accounting <br></br> <span style={{ color: "#eab308" }}> Service and Support</span>
                            </h1>
                            <p className="text-white max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                                Accurate, efficient tax and accounting support your  <br></br>company can rely on
                            </p>
                        </ScrollAnimation>
                    </div>
                    {/* <div className="flex-1 text-center  lg:mt-0 lg:ml-3" style={{ marginTop: -100 }}>
                        <img src={side_img} className=" mx-auto sm:w-9/12 " />
                    </div> */}
                </section>
            </div>

            <div style={{ backgroundColor: "#E2EFFC", paddingTop: 40, paddingBottom: 40 }}>
                <section className="relative max-w-screen-xl mx-auto py-4 px-4 md:px-8">
                    <div className="absolute top-0 left-0 w-full h-full  opacity-40"></div>
                    <div className="relative z-10 gap-5 items-center lg:flex">
                        <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
                            <ScrollAnimation animateIn="fadeInLeft">
                                <img
                                    src="https://media.istockphoto.com/id/1096860416/photo/accountant-working-with-us-tax-forms.webp?b=1&s=170667a&w=0&k=20&c=eMdBF2iw867mR8dqeVsfJxOB8m-5RTBuoKRfhFasHx0="
                                    alt=""
                                    className="w-full" />
                            </ScrollAnimation>

                        </div>
                        <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                            <ScrollAnimation animateIn="fadeInRight">
                                <h3 className="text-3xl text-gray-800 font-bold md:text-4xl">
                                    Tax <span style={{ color: '#eab308' }}>& Accounting</span>
                                </h3>
                                <p className="text-gray-500 leading-relaxed mt-3">
                                    "Speed Type Tax & Accounting is an integral part of an extensive network of specialized business services focused on delivering professional end-to-end advice and support to business owners in the UAE. Our parent company, Speed Type, was established in 2010 and has emerged as Dubai’s largest and most trusted company formation specialist firm, with over 75,000 successful company registrations. With a vision to surpass the company formation process, Speed Type is committed to providing dedicated support and practical advice throughout the lifetime of our clients’ businesses. This commitment led to the launch of Speed Type Tax & Accounting."
                                </p>
                            </ScrollAnimation>
                        </div>
                    </div>
                </section>
            </div>

            <div style={{ paddingTop: 40, paddingBottom: 0 }} >
                <section className="relative max-w-screen-xl mx-auto  md:px-8">
                    <div className="absolute top-0 left-0 w-full h-full  opacity-40"></div>
                    <div className="relative z-10 gap-5 items-center lg:flex">
                        <div className="flex-1 max-w-lg py-1 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                            <ScrollAnimation animateIn="fadeIn">
                                <h3 className="text-3xl text-gray-500 font-bold md:text-4xl">
                                    Our <span className="" style={{ color: '#eab308' }}>Services</span>
                                </h3>
                            </ScrollAnimation>
                        </div>
                    </div>
                </section>
            </div>

            <div style={{ paddingTop: 0, paddingBottom: 40 }}>
                <section className="relative max-w-screen-xl mx-auto  md:px-8">
                    <div className="absolute top-0 left-0 w-full h-full  opacity-40"></div>
                    <div className="relative z-10 gap-5 items-center lg:flex">
                        <div className="flex-1 max-w-lg py-1 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                            <ScrollAnimation animateIn="fadeIn">
                                <p className="text-gray-500 leading-relaxed mt-3 text-center">
                                    Our broad range of tax and accounting services helps your business maintain sustainable growth and prepare for long-term financial stability. We help you streamline your accounting processes so you can easily send invoices, reconcile bank transactions, manage expenses, track inventory, and generate insightful reports effortlessly. Outsourcing a huge portion of your backend work helps you save money, as it will allow you to concentrate more on your business and scaling it up. Reach out to us for tailor-made solutions that fit your business needs.
                                </p>
                            </ScrollAnimation>
                        </div>
                    </div>
                </section>
            </div>


            <section className="py-2 mt-5 mb-5 " style={{ marginTop: 50, paddingBottom: 50, display: "flex" }}>
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className='row text-center'> {/* Changed from d-flex justify-content-center to text-center */}
                        <div className='col-md-4' style={{ marginRight: '8rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img
                                    width={28}
                                    height={28}
                                    alt="Benefit Icon"
                                    src={tick_icon}
                                    className="lazyloaded"
                                    style={{ marginTop: -9 }}
                                    decoding="async"
                                    id="ODU0NzoyOTU=-1"
                                />
                                <h3 className="text-gray-600 text-2xl font-semibold sm:text-2xl pb-1" style={{ fontSize: 18, marginLeft: 10 }}>
                                    VAT Registration
                                </h3>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                <img
                                    width={28}
                                    height={28}
                                    alt="Benefit Icon"
                                    src={tick_icon}
                                    className="lazyloaded"
                                    style={{ marginTop: -9 }}
                                    decoding="async"
                                    id="ODU0NzoyOTU=-1"
                                />
                                <h3 className="text-gray-600 text-2xl font-semibold sm:text-2xl pb-1" style={{ fontSize: 18, marginLeft: 10 }}>
                                    VAT Registration Amendment
                                </h3>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                <img
                                    width={28}
                                    height={28}
                                    alt="Benefit Icon"
                                    src={tick_icon}
                                    className="lazyloaded"
                                    style={{ marginTop: -9 }}
                                    decoding="async"
                                    id="ODU0NzoyOTU=-1"
                                />
                                <h3 className="text-gray-600 text-2xl font-semibold sm:text-2xl pb-1" style={{ fontSize: 18, marginLeft: 10 }}>
                                    Financial & Management Consulting
                                </h3>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                <img
                                    width={28}
                                    height={28}
                                    alt="Benefit Icon"
                                    src={tick_icon}
                                    className="lazyloaded"
                                    style={{ marginTop: -9 }}
                                    decoding="async"
                                    id="ODU0NzoyOTU=-1"
                                />
                                <h3 className="text-gray-600 text-2xl font-semibold sm:text-2xl pb-1" style={{ fontSize: 18, marginLeft: 10 }}>
                                    Bookkeeping
                                </h3>
                            </div>
                        </div>
                        <div className='col-md-4' style={{ marginRight: '8rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img
                                    width={28}
                                    height={28}
                                    alt="Benefit Icon"
                                    src={tick_icon}
                                    className="lazyloaded"
                                    style={{ marginTop: -9 }}
                                    decoding="async"
                                    id="ODU0NzoyOTU=-1"
                                />
                                <h3 className="text-gray-600 text-2xl font-semibold sm:text-2xl pb-1" style={{ fontSize: 18, marginLeft: 10 }}>
                                    VAT Return Filing
                                </h3>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                <img
                                    width={28}
                                    height={28}
                                    alt="Benefit Icon"
                                    src={tick_icon}
                                    className="lazyloaded"
                                    style={{ marginTop: -9 }}
                                    decoding="async"
                                    id="ODU0NzoyOTU=-1"
                                />
                                <h3 className="text-gray-600 text-2xl font-semibold sm:text-2xl pb-1" style={{ fontSize: 18, marginLeft: 10 }}>
                                    Auditing
                                </h3>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                <img
                                    width={28}
                                    height={28}
                                    alt="Benefit Icon"
                                    src={tick_icon}
                                    className="lazyloaded"
                                    style={{ marginTop: -9 }}
                                    decoding="async"
                                    id="ODU0NzoyOTU=-1"
                                />
                                <h3 className="text-gray-600 text-2xl font-semibold sm:text-2xl pb-1" style={{ fontSize: 18, marginLeft: 10 }}>
                                    Zoho Setup & Training
                                </h3>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                <img
                                    width={28}
                                    height={28}
                                    alt="Benefit Icon"
                                    src={tick_icon}
                                    className="lazyloaded"
                                    style={{ marginTop: -9 }}
                                    decoding="async"
                                    id="ODU0NzoyOTU=-1"
                                />
                                <h3 className="text-gray-600 text-2xl font-semibold sm:text-2xl pb-1" style={{ fontSize: 18, marginLeft: 10 }}>
                                    Accounting Review
                                </h3>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img
                                    width={28}
                                    height={28}
                                    alt="Benefit Icon"
                                    src={tick_icon}
                                    className="lazyloaded"
                                    style={{ marginTop: -9 }}
                                    decoding="async"
                                    id="ODU0NzoyOTU=-1"
                                />
                                <h3 className="text-gray-600 text-2xl font-semibold sm:text-2xl pb-1" style={{ fontSize: 18, marginLeft: 10 }}>
                                    Payroll
                                </h3>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                <img
                                    width={28}
                                    height={28}
                                    alt="Benefit Icon"
                                    src={tick_icon}
                                    className="lazyloaded"
                                    style={{ marginTop: -9 }}
                                    decoding="async"
                                    id="ODU0NzoyOTU=-1"
                                />
                                <h3 className="text-gray-600 text-2xl font-semibold sm:text-2xl pb-1" style={{ fontSize: 18, marginLeft: 10 }}>
                                    SVAT Consultancy
                                </h3>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                <img
                                    width={28}
                                    height={28}
                                    alt="Benefit Icon"
                                    src={tick_icon}
                                    className="lazyloaded"
                                    style={{ marginTop: -9 }}
                                    decoding="async"
                                    id="ODU0NzoyOTU=-1"
                                />
                                <h3 className="text-gray-600 text-2xl font-semibold sm:text-2xl pb-1" style={{ fontSize: 18, marginLeft: 10 }}>
                                    FTA Reconsideration Form
                                </h3>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                <img
                                    width={28}
                                    height={28}
                                    alt="Benefit Icon"
                                    src={tick_icon}
                                    className="lazyloaded"
                                    style={{ marginTop: -9 }}
                                    decoding="async"
                                    id="ODU0NzoyOTU=-1"
                                />
                                <h3 className="text-gray-600 text-2xl font-semibold sm:text-2xl pb-1" style={{ fontSize: 18, marginLeft: 10 }}>
                                    Corporate Tax
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      

            <div class="image-row container-fluid " >
                <div class="image-container" style={{ boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
                    <img src="https://i.pinimg.com/474x/52/2c/e6/522ce62f6adb77c3aa7b1e65eb259d47.jpg" alt="Image 1" class="image" />
                    <h3 class="text-3xl text-gray-500 font-bold md:text-2xl  text-center bg-gray-100" style={{ padding: 16 }}>
                        Documentation Requirements <br></br> <span style={{ color: '#eab308' }}>from Clients</span>
                    </h3>
                    <div class="overlay">
                        <div class="overlay-content">
                            <div class="heading-container">
                                <h3 class="text-3xl text-gray-500 font-bold md:text-3xl">
                                    Documentation Requirements <br></br> <span style={{ color: '#eab308' }}>from Clients</span>
                                </h3>
                            </div>
                            <hr class="line" />
                            <div class="paragraph-container">
                                <p class="text-gray-500  leading-relaxed font-semibold mt-1">
                                    Bank Statements
                                </p>
                                <p class="text-gray-500 leading-relaxed font-semibold mt-1">
                                    Sales Invoices
                                </p>
                                <p class="text-gray-500 leading-relaxed font-semibold mt-1">
                                    Expense Receipts
                                </p>
                                <p class="text-gray-500 leading-relaxed font-semibold mt-1">
                                    Other Schedules
                                </p>
                                <p class="text-gray-500 leading-relaxed font-semibold mt-1">
                                    Any and all relevant documents
                                </p>
                            </div>
                            <div class="paragraph-container mt-5" style={{ marginTop: 30 }}>
                                <a href="javascript:void(0)" className="block py-3 px-4 font-medium text-center text-white bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600 active:shadow-none rounded-lg shadow md:inline">
                                    Enquire Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="image-container" style={{ boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
                    <img src="https://media.theeverygirl.com/wp-content/uploads/2020/02/6-Attitudes-That-Are-Holding-You-Back-at-Work-the-everygirl-1.jpg" alt="Image 2" class="image" />
                    <h3 class="text-3xl text-gray-500  font-bold md:text-2xl text-center bg-gray-100" style={{ padding: 20 }}>
                        Summary of Monthly Client<br></br> <span style={{ color: '#eab308' }}>Reporting</span>
                    </h3>
                    <div class="overlay">
                        <div class="overlay-content">
                            <div class="heading-container">
                                <h3 class="text-3xl text-gray-500  font-bold md:text-3xl " >
                                    Summary of Monthly Client<br></br> <span style={{ color: '#eab308' }}>Reporting</span>
                                </h3>
                            </div>
                            <hr class="line" />
                            <div class="paragraph-container">
                                <p class="text-gray-500 leading-relaxed font-semibold mt-1">
                                    Clients who avail our Accounting and Bookkeeping services will receive a clear quotation outlining the reports that our team will prepare and submit on a monthly basis. These will include:
                                </p>
                                <p class="text-gray-500 leading-relaxed font-semibold mt-5">
                                    Profit & Loss Account (Monthly)
                                </p>
                                <p class="text-gray-500 leading-relaxed font-semibold mt-1">
                                    Balance Sheet
                                </p>
                                <p class="text-gray-500 leading-relaxed font-semibold mt-1">
                                    Cash Flow Statement
                                </p>
                                <p class="text-gray-500 leading-relaxed font-semibold mt-1">
                                    Trial Balance
                                </p>
                                <p class="text-gray-500 leading-relaxed font-semibold mt-1">
                                    Receivables Aging Statement
                                </p>
                                <p class="text-gray-500 leading-relaxed font-semibold mt-1">
                                    Accounts Payable Aging Statement
                                </p>
                            </div>
                            <div class="paragraph-container mt-5" style={{ marginTop: 30 }}>
                                <a href="javascript:void(0)" className="block py-3 px-4 font-medium text-center text-white bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600 active:shadow-none rounded-lg shadow md:inline">
                                    Enquire Now
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="image-container" style={{ boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
                    <img src="https://img.freepik.com/premium-photo/businessman-using-laptop-taking-notes_107420-30769.jpg" alt="Image 3" class="image" />
                    <h3 class="text-3xl text-gray-500  font-bold md:text-2xl text-center bg-gray-100" style={{ padding: 20 }}>
                        Proposed Scope of Work for Accounting and <span style={{ color: '#eab308' }}>VAT Services</span>
                    </h3>
                    <div class="overlay">
                        <div class="overlay-content">
                            <div class="heading-container">
                                <h3 class="text-3xl text-gray-500  font-bold md:text-3xl">
                                    Proposed Scope of Work for Accounting and  <br></br> <span style={{ color: '#eab308' }}>VAT Submission Services</span>
                                </h3>
                            </div>
                            <hr class="line" />
                            <div class="paragraph-container">
                                <p class="text-gray-500 leading-relaxed font-semibold mt-1">
                                    Prepare monthly financial statements using a cloud-based system
                                </p>
                                <p class="text-gray-500 leading-relaxed font-semibold mt-1">
                                    VAT return filing on behalf of the company
                                </p>
                                <p class="text-gray-500 leading-relaxed font-semibold mt-1">
                                    Set up Chart of Accounts (COA)
                                </p>
                                <p class="text-gray-500 leading-relaxed font-semibold mt-1">
                                    Record all transactions on a monthly basis
                                </p>
                                <p class="text-gray-500 leading-relaxed font-semibold mt-1">
                                    Maintain cash, bank and execute account reconciliations
                                </p>
                                <p class="text-gray-500 leading-relaxed font-semibold mt-1">
                                    Reporting will be delivered in our standard format
                                </p>
                                <p class="text-gray-500 leading-relaxed font-semibold mt-1">
                                    The Company will carry out the necessary reporting
                                </p>
                                <p class="text-gray-500 leading-relaxed font-semibold mt-1">
                                    obligations, imposed by the UAE regulatory authorities,
                                </p>
                                <p class="text-gray-500 leading-relaxed font-semibold mt-1">
                                    excluding VAT quarterly submission
                                </p>
                                <p class="text-gray-500 leading-relaxed font-semibold mt-1">
                                    The Company will provide all the necessary related documents
                                </p>
                            </div>
                            <div class="paragraph-container mt-5" style={{ marginTop: 30 }}>
                                <a href="javascript:void(0)" className="block py-3 px-4 font-medium text-center text-white bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600 active:shadow-none rounded-lg shadow md:inline">
                                    Enquire Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="py-14 max-w-screen-xl mx-auto mt-5">
                <div className="relative overflow-hidden mx-4 px-4 py-14 rounded-2xl bg-blue-600 md:px-8 md:mx-8 main-contact">
                    <div className="relative z-10 max-w-xxl mx-auto sm:text-center">
                        <div className="space-y-3">

                            <h3 className="text-2xl text-yellow-500 font-bold">
                                Have a question? get in touch with us
                            </h3>
                            <h3 className="text-1xl text-white font-bold" style={{ fontSize: 18 }}>
                                Get started with your business needs, we reach out with free and qualified guidance
                            </h3>
                            <h3 className="text-2xl text-white font-bold">
                                Call us today : +971 50 766 8212
                            </h3>
                        </div>
                    </div>
                    <div className="absolute inset-0 w-full h-full" style={{
                        background: "linear-gradient(268.24deg, rgba(31, 41, 55, 0.84) 50%, rgb(102, 102, 102, 0.79) 80.61%, rgba(55, 48, 163, 0) 117.35%, rgba(169, 169, 169, 0.5))"
                    }}></div>

                </div>
            </section>

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
