import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Overview() {
  return (
    <>

      <section className="py-14">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1 sm:hidden lg:block">
              <ScrollAnimation animateIn="fadeInLeft">
                <img src="https://blackswanbss.com/wp-content/uploads/2023/03/Things-to-Know-About-Business-Licenses-in-Dubai.jpg" className="md:max-w-lg sm:rounded-lg" alt="" />
              </ScrollAnimation>
            </div>
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
              <ScrollAnimation animateIn="fadeInRight">
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

      <section className="py-2">
        <div className="max-w-screen-xl mx-auto px-4  gap-x-12 justify-between md:flex md:px-8">
          <div className="max-w-xxl">
            <ScrollAnimation animateIn="fadeIn">
              <h3 className="text-gray-600 text-3xl font-semibold sm:text-3xl pb-1">
                Business <span style={{ color: "#eab308" }}>Setup in Dubai </span>
              </h3>
            </ScrollAnimation>
            <h3 className="text-gray-600 mt-3 text-2xl font-semibold sm:text-2xl pb-3">
              Learn more about company setup <span style={{ color: "#eab308" }}>in Dubai, UAE  </span>
            </h3>
            <p className="mt-5 text-gray-500 font-medium">
              If you are looking for a truly dynamic business hub to set up your new company, Dubai is the right place for you – and for many reasons.
            </p>
            <p className="mt-5 text-gray-500 font-medium" style={{ lineHeight: 2 }}>
              Dubai caters to entrepreneurs, start-ups, small businesses, and giant multinational corporations with the same levels of ease, efficiency, speed, and service. Furthermore, multiple choices are available for every aspect of business setup in Dubai, UAE: budget, license, location, and premises.
            </p>
            <p className="mt-5 text-gray-500 font-semibold pb-5" style={{ lineHeight: 2 }}>
              Company Formation in Dubai spells out several big benefits that include tax savings, good governance, superior infrastructure, premium lifestyle, and constantly developing opportunities. Another unique offering is the easy access to more than 2 billion consumers in multiple markets, all located within a 4-hour flight. Dubai’s enviable location also results in an international and vastly multicultural workforce.
            </p>
            <ScrollAnimation animateIn="fadeIn">
              <h3 className=" text-gray-600 text-3xl font-semibold sm:text-3xl mt-5 pb-3">
                Why Set Up Your <span style={{ color: "#eab308" }}>Business in the UAE? </span>
              </h3>
            </ScrollAnimation>
            <p className="mt-5 text-gray-500 font-medium" style={{ lineHeight: 2 }}>
              Setting up a business in Dubai is a smart decision in today’s global economy. The UAE offers a thriving business environment, a strategic location, world-class infrastructure, and a dynamic market. A&A Associate LLC is here to assist you every step of the way. Our team of experts will provide customized and reliable solutions to help you establish your business in Dubai or anywhere else in the UAE. With our support, you will gain access to a range of services, including company incorporation, and more. Let A&A Associate LLC help you set up your business in Dubai and take advantage of all the benefits that the UAE has to offer.
            </p>
            <ScrollAnimation animateIn="fadeIn">
              <h3 className=" text-gray-600 text-3xl font-semibold sm:text-3xl mt-5 pb-3">
                What are the advantages of setting up a  <span style={{ color: "#eab308" }}>business in Dubai? </span>
              </h3>
            </ScrollAnimation>
            <p className="mt-5 text-gray-500 font-medium" style={{ lineHeight: 2 }}>
              Dubai is popularly known as the ‘Silicon Valley of the Middle East’. It is the hub of entrepreneurs, startups, agency owners, and conglomerates. Setting up a business in Dubai comes with various advantages:
              <ul style={{ listStyle: 'disc', marginLeft: 50 }}>
                <li>Offshore and free zones companies are awarded with 0% corporate taxes.</li>
                <li>Dubai company set up cost is very meager as compared to other regions in the Middle East.</li>
                <li>Any new company registration in Dubai has the advantage of gaining access to a large market.</li>
                <li>Women entrepreneurs can start their dream business without any hassle.</li>
              </ul>
            </p>
          </div>
        </div>
      </section>


    </>
  )
}
