import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import CustomisedSolutions from './images/customized solution icon.png';
import ExperiencedConsultants from './images/Experienced Consultation icon.png';
import HassleFreeProcedure from './images/hustle free icon.png';
import MultiplePaymentOptions from './images/Multiple Payment icon.png';


export default function Visaservice() {

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
      <div className='container-fluid bg-visa-img main-Offshore ' id='visaservice'>
        <section className="mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
          <div className="space-y-4 flex-1 sm:text-center lg:text-left" >
            <ScrollAnimation animateIn="fadeIn">
              <h1 className="text-white font-bold text-4xl text-center">
                Visa Service
              </h1>
            </ScrollAnimation>

          </div>
        </section>
      </div>


      <section className="py-2 mt-5">
        <div className="max-w-screen-xl mx-auto px-4  gap-x-12 justify-between md:flex md:px-8">
          <div className="max-w-xxl">

            <ScrollAnimation animateIn="fadeIn">
              <h3 className="text-gray-600 text-3xl font-bold sm:text-3xl pb-1">
                Visa Service
              </h3>
            </ScrollAnimation>
            <p className="mt-5 text-gray-500 font-medium" style={{ lineHeight: 2 }}>

              Getting visa in UAE is not easier due to the stringent verification and documentation processing. And, for most people getting a visa in UAE means a dream of better opportunities, job, prosperity and future growth.  Our unyielding endeavors to provide our customers with speedy procurement of visa have placed us in a position envious to all other visa service providing companies. Through many years of serving different clients, we have understood that some want to bring their families where they are and they need assistance in getting dependent visa. Some others want to get employment visa to enroll for a job that they have been dreaming of for several years and for someone else, it means getting a professional domestic help to look after their family members and the home.
            </p>
            <p className="mt-2 text-gray-500 font-medium" style={{ lineHeight: 2 }}>
              Over these years, our relentless efforts to provide best and affordable services to people of different walks of lives have made us understand that each person has their unique requirements and concerns even though their needs may look similar. Our professionally qualified staffs have been trained to attend to these concerns in the best way possible and leave the customers awed by the quality of our services.
            </p>
            <p className="mt-5 text-gray-500 font-medium" style={{ lineHeight: 2 }}>
              We have dedicated staffs working to help you get dependent, employment or maid visa in the least time frames possible.
              Our staffs will closely work with you to educate about the requirements and that criteria that you have to fulfill to get any of these visa and will make sure that you are able to pass the verification with highest possible compliancy to the legal requirements demanded by the General Directorate of Residency and Foreigners Affairs.
              Being a resident, if you plan to bring your family down with you, our dependent visa wing is just a call away and they will educate you about all the necessary formalities that you have to clear to procure the visa through us.
            </p>
            <p className="mt-5 text-gray-500 font-medium" style={{ lineHeight: 2 }}>
              Our employment visa wing closely monitors the labor and visa norms that the government enforces from time to time to make sure that every application that goes through us complies with all the rules and regulations that prevail at that point of time. This makes us to keep the visa rejection rate at considerably low figures.  Our close associations and strategic relationship with the Ministry of Labor and Immigration helps us toward off any unnecessary hindrance to get approval and clearance for visa in no time.
            </p>
            <p className="mt-5 text-gray-500 font-normal pb-5" style={{ lineHeight: 2 }}>
              We also support families to get approval for a maid visa. Taking care of all lengthy and complex procedures and formalities, we will get the maid visa in no time.
              We educate and entertain all our customers to strictly abide by the rules of the government of UAE while applying for the visa. During the visa application and procurement process, we assume different roles to guide and facilitate you to get visa easily. Our dependent visa services have helped thousands of people to successfully get dependent visa without needing to worry about the intricacies of the entire process.
            </p>
            <p className=" text-gray-500 font-medium" style={{ lineHeight: 2 }}>
              We have been authorized by and working closely with the General Directorate of Residency and Foreigners Affairs to get your visa approved and we never leave any doors open for errors to slither in while we take care of the entire visa procurement process.
            </p>
          </div>
        </div>
      </section>


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
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
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

      <section className="py-14 max-w-screen-xl mx-auto ">
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
