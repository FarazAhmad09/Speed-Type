import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Ceo from './images/Ceo.png';
import manager from './images/Manger.png';
import adeel from './images/Business consultant.png';
import ahsan from './images/SR Business Consultant.png';
import aswar from './images/Public relation officer.png';
import girl from './images/girl-img.png';



export default function Ourteam() {

    const team = [
        {
            avatar: Ceo,
            name: "Adv Ali Abbas janjua",
            title: "CEO",
            desc: "Adv Ali Abbas Janjua, CEO, fosters growth and positivity through transparent leadership.",
        },
        {
            avatar: manager,
            name: "Muhammad ikram",
            title: "Office Manager",
            desc: "Muhammad Ikram, Office Manager, supports CEO Adv Ali Abbas Janjua's vision seamlessly.",
        },
        {
            avatar: adeel,
            name: "Muhammad Adeel",
            title: "Business consultant",
            desc: "Muhammad Adeel, Business Consultant, collaborates with CEO Adv Ali Abbas Janjua.",
        },
        {
            avatar: ahsan,
            name: "M Ahsan",
            title: " SR Business Consultant",
            desc: "M Ahsan, SR Business Consultant, collaborates closely with CEO Adv Ali Abbas Janjua.",
        },
        {
            avatar: aswar,
            name: "Aswar Shah",
            title: "Public relation officer",
            desc: "Aswar Shah, Public Relations Officer, aligns with CEO Adv Ali Abbas Janjua's strategies.",
        },
        {
            avatar: girl,
            name: "Cristina Jorge",
            title: "Public relation manager",
            desc: "Cristina Jorge, PR Manager, echoes CEO Adv Ali Abbas Janjua's vision externally.",
        },
    ];

    return (
        <>

            <div className='bg-gray-100'>
                <section className="py-14">
                    <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                        <div className="max-w-xxl mx-auto">
                            <ScrollAnimation animateIn="fadeIn">
                                <h3 className="text-gray-800 text-3xl font-bold sm:text-5xl mb-5">
                                    Meet our <span className="text-yellow-500">Team</span>
                                </h3>
                                <p className="text-gray-500 leading-relaxed mt-3">
                                    Our highly-qualified and friendly team has extensive experience in Tax & Accounting, and is well-versed in a wide range of financial reporting services. These include Accounting, Bookkeeping, Auditing, VAT Registration, and Tax Returns filing. We also provide customised outsourced solutions by request and welcome you to explore our co-working solutions in Downtown Dubai.
                                </p>
                            </ScrollAnimation>

                        </div>
                        <div className="mt-12" style={{ marginTop: 60 }}>
                            <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                                {team.map((item, idx) => (
                                    <li key={idx} className="bg-white rounded-lg shadow-md p-6 ">
                                        <div className="w-24 h-24 mx-auto mb-5">
                                            <img
                                                src={item.avatar}
                                                className="w-full rounded-full "
                                                alt=""
                                            />
                                        </div>
                                        <div className="mt-2">
                                            <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                                            <p className="text-indigo-600">{item.title}</p>
                                            <p className="text-gray-600 mt-2">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
