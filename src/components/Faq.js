import { useRef, useState } from "react";
import ScrollAnimation from 'react-animate-on-scroll';


const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? { height: answerH } : { height: '0px' }}
            >
                <div>
                    <p className="text-gray-500">
                        {faqsList.a}
                        {faqsList.options && (
                            faqsList.options.map((option, idx) => (
                                <li key={idx} className='flex items-center gap-5'>
                                    {option}
                                </li>
                            ))
                        )}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default function Faq() {

    const faqsList = [
        {
            q: "How much does it cost to run a business in Dubai?",
            a: "The cost of setting up a company in a Free Zone can start at a mere AED 4000. A Trading, Service, or Industrial licence costs from AED 10,000 to AED 50,000 per year."
        },
        {
            q: "How much does it cost to set up an LLC in Dubai?",
            a: "The cost of registering your limited liability company in Dubai ranges from AED 20,000 to 30,000. However, the fees vary depending on the industry type and services."
        },
        {
            q: "What is the cheapest business license in Dubai?",
            a: "List of Cheapest Free Zones in UAE based on the Trade license cost",
            options: [
                "Sl No.	Free Zones           Trade License Cost",
                "1. IFZA	AED 12,900",
                "2. SRTIP Free Zone	AED 5,500",
                "3. RAKEZ	AED 11,440",
                "4. Meydan Free Zone	AED 12,500",
            ],
        },
        {
            q: "How much money do I need to start a business in UAE?",
            a: " For instance, let's take the example of a Service-based Company, where the Minimum investment to start a business in Dubai could be specified in different business activities."
        },
        {
            q: "Is Dubai tax-free for business?",
            a: "Is Dubai a tax-free country? Yes, Dubai is a tax-free nation when it comes to imposing income tax on most of its citizens. However, if you own an oil business, there is a tax rate of 55%. There are entertainment taxes and import duties."
        },
        {
            q: "How much money is required to start a shop in Dubai?",
            a: "The minimum investment required to start a business in Dubai varies depending on the type of business and the location. However, the Dubai Department of Economic Development (DED) has set a minimum capital requirement of AED 300,000 (approximately $82,000) for most businesses."
        },
        {
            q: "Which business is easy to do in Dubai?",
            a: "A short answer is Digital Marketing. In Dubai's highly competitive business landscape, digital marketing has become a critical component for success, and entrepreneurs can explore many business ideas in the sector as digital marketing agencies, social media consulting firms, or content creation services."
        },
        {
            q: "Startup business cost calculator in dubai?",
            a: "Start your Company in UAE from AED 1,000/month. Includes Licence, Coworking Lease and Visa. Start your UAE Business with our AED 1,000/month Package."
        },
        {
            q: "How much does it cost to start a small business in Dubai?",
            a: "A Free Zone business in Dubai can start with as little as AED 10,000 and go up to AED 50,000 or more, based on the free zone and type of business. In particular, this investment could cover office space and extra services in some Free Zone deals, which would change the total cost."
        },
        {
            q: "Can you own 100% business in Dubai?",
            a: "100% foreign ownership of enterprises based in the UAE is permitted, as long as they abide by the rules set forth in a cabinet resolution that was approved by the UAE cabinet."
        },
        {
            q: "Which is the most profitable business in Dubai?",
            a: "Some of the most profitable new business ideas in Dubai:",
            options: [
                "Real Estate Development.",
                "Tourism and Hospitality.",
                "E-commerce and Online Marketplaces.",
                "Fintech and Digital Payments.",
                "Health and Wellness.",
                "Education and Training.",
                "Event Management.",
                "Renewable Energy."
            ],
        }
    ]

    return (
        <div className="container-fluid" style={{ marginBottom: 70 }}>
            <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
                <div className="space-y-3 text-center">
                    <ScrollAnimation animateIn="fadeIn">
                        <h1 className="text-4xl text-gray-600 font-bold">
                            <span style={{ color: "#eab308" }}>FAQ</span>
                        </h1>
                    </ScrollAnimation>
                </div>
                <div className="mt-14 max-w-8xl mx-auto">
                    {
                        faqsList.map((item, idx) => (
                            <div key={idx}>
                                {/* Render options if they exist */}

                                {/* Render FaqsCard */}
                                <FaqsCard
                                    idx={idx}
                                    faqsList={item}
                                />
                            </div>
                        ))
                    }

                </div>
            </section>
        </div>
    )
}