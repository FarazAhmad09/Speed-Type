import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Aboutus from './pages/Aboutus';
import Mainland from './components/Mainland';
import Offshore from './components/Offshore';
import Freezone from './components/Freezone';
import Visaservice from './components/Visaservice';
import Corporatebankopening from './components/Corporatebankopening';
import Proservice from './components/Proservice';
import Tax from './components/Tax';
import Contactus from './components/Contactus';
import Technology from './components/Technology';
import Healthcare from './components/Healthcare';
import Hospitality from './components/Hospitality';
import Finance from './components/Finance';
import Realestate from './components/Realestate';
import Manufacturing from './components/Manufacturing';
import LegalandConsulting from './components/LegalandConsulting';
import Trading from './components/Trading';
import DMCC from './components/DMCC';
import DSO from './components/DSO';
import Sharjah from './components/Sharjah';
import JAFZA from './components/JAFZA';
import DAFZA from './components/DAFZA';
import OfferPromotion from './pages/OfferPromotion';
import OfferGTL from './components/OfferGTL';
import OfferMainland from './components/OfferMainland';
import OfferPorLicence from './components/OfferPorLicence';
import OfferServiceLicence from './components/OfferServiceLicence';
import ClientPortalPage from './pages/ClientPortalPage';
import DIFC from './components/DIFC';
import DSFZ from './components/DSFZ';
import BusinessConsultation from './components/BusinessConsultation';
import whatsapp_logo from './components/images/whatapp-logo.png';
import phone_icon from './components/images/phone-icon.png';
import FadeIn from 'react-fade-in';
import popover from './components/images/popover.png';
import messenger_logo from './components/images/meseenger-icon.png';
import Bot from './components/Bot';



function App(props) {



  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();



  const handleFullNameChange = (event) => {
    const inputValue = event.target.value;
    // Validate input to allow only alphabetic characters and spaces
    if (/^[a-zA-Z\s]*$/.test(inputValue)) {
      setName(inputValue);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };



  const handleSubmitForm = async () => {
    const url = 'http://www.speedtypes.com/laravel/api/home-mail';

    if (name && email && phone) {

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          if (data.status) {
            props.closemodel();
          }
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };



  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isPopupVisible2, setIsPopupVisible2] = useState(true);
  const [isPopupBot, setIsPopupBot] = useState(true);

  const togglePopupBot = () => {
    setIsPopupBot(!isPopupBot);
  };

  const togglePopupVisibility = () => {
    setIsPopupVisible(!isPopupVisible);
    setIsPopupVisible2(false);
  };

  const togglePopupVisibility2 = () => {
    setIsPopupVisible2(false);
  };


  return (
    <>
      <Navbar />
      <a onClick={togglePopupVisibility} style={{ cursor: "pointer" }}>
        <img src={phone_icon} className='phone' alt="" />
      </a>
      {isPopupVisible2 && (
        <>
          <FadeIn>
            <div className="popup-home">
              <div style={{ position: "fixed", marginLeft: 230, marginTop: -8 }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 " onClick={() => setIsPopupVisible2(false)} style={{ cursor: "pointer" }}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-gray-600 text-1xl font-bold sm:text-1xl pb-1">
                Speed Type
              </h3>
              <p className="mt-5 text-gray-500 font-medium" style={{ lineHeight: 2, fontSize: 10 }}>
                Let's Talk! Click here and we'll call you within <span className='font-bold'>1 minute!</span>
              </p>
            </div>
          </FadeIn>

        </>
      )}
      {isPopupVisible && (
        <>

          <FadeIn duration={5000}>
            <div className='bg-white'>
              <main className="relative py-2 popup popupmd" style={{ position: "fixed", zIndex: 99 }}>
                <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
                  <div className="mt-12 mx-auto px-4  bg-white sm:max-w-lg sm:px-8 sm:rounded-xl">

                    <div className="mt-12 mx-auto bg-white sm:max-w-md sm:rounded-xl">
                      <button onClick={props.closemodel} style={{ position: "absolute", right: 40, top: 5 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 appsvg" style={{ position: "absolute", right: 0, top: 5, cursor: "pointer" }} onClick={togglePopupVisibility}>
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                      </button>
                      <div className="flex justify-center">
                        <img src={popover} className="sm:max-w-1xl sm:max-w-sm sm:rounded-lg" alt="" />
                      </div>
                    </div>
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="space-y-5" style={{ marginTop: 20 }}>
                      <div>
                        <label className="font-medium">
                          Full name
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={handleFullNameChange}
                          placeholder="John Doe"
                          className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                        />
                      </div>
                      <div>
                        <label className="font-medium">
                          Email
                        </label>
                        <input type="email" value={email} onChange={handleEmailChange} name="email" id="email" placeholder="you@gmail.com" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />

                      </div>
                      <div>
                        <label className="font-medium">
                          Phone number
                        </label>
                        <div className="relative mt-2">
                          <input type="number" value={phone} onChange={handlePhoneChange} name="phone" id="phone" placeholder="+1 (555) 1234-567" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                        </div>
                      </div>
                      <button
                        onClick={handleSubmitForm} className="w-full px-4 py-2 text-white font-medium bg-yellow-500 hover:bg-yellow-700 active:bg-gray-900 rounded-lg duration-150" style={{ marginBottom: 30 }}>
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </main>
            </div>
          </FadeIn>


        </>
      )}
      <a href="https://wa.me/+971507668212" target='_blank'>
        <img src={whatsapp_logo} className='float' alt="" />
      </a>
      <a href="http://m.me/122174248488373" target='_blank'>
        <img src={messenger_logo} className='messenger-float' alt="" />
      </a>
    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/mainland" element={<Mainland />} />
        <Route path="/offshore" element={<Offshore />} />
        <Route path="/freezone" element={<Freezone />} />
        <Route path="/visaservice" element={<Visaservice />} />
        <Route path="/corporate" element={<Corporatebankopening />} />
        <Route path="/proservice" element={<Proservice />} />
        <Route path="/tax" element={<Tax />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/offers" element={<OfferPromotion />} />
        <Route path="/offersgtl" element={<OfferGTL />} />
        <Route path="/offermainland" element={<OfferMainland />} />
        <Route path="/Offerprolicence" element={<OfferPorLicence />} />
        <Route path="/Offerservicelicence" element={<OfferServiceLicence />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/hospitality" element={<Hospitality />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/realestate" element={<Realestate />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/legalandconsulting" element={<LegalandConsulting />} />
        <Route path="/trading" element={<Trading />} />
        <Route path="/dmcc" element={<DMCC />} />
        <Route path="/dso" element={<DSO />} />
        <Route path="/sharjah" element={<Sharjah />} />
        <Route path="/jafza" element={<JAFZA />} />
        <Route path="/dafza" element={<DAFZA />} />
        <Route path="/clientportalpage" element={<ClientPortalPage />} />
        <Route path="/difc" element={<DIFC />} />
        <Route path="/dsfz" element={<DSFZ />} />
        <Route path="/businessConsultation" element={<BusinessConsultation />} />
      </Routes>
      <Bot/>
      <Footer />
    </>
  );
}

export default App;



