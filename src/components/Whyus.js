import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import CustomisedSolutions from './images/customized solution icon.png';
import ExperiencedConsultants from './images/Experienced Consultation icon.png';
import HassleFreeProcedure from './images/hustle free icon.png';
import MultiplePaymentOptions from './images/Multiple Payment icon.png';



export default function Whyus() {
    return (
        <>

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
        </>
    )
}
