import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import logo from './images/speed type logo.png';
import facebook_logo from './images/facebook-logo.png';
import instragram_logo from './images/instragram-logo.png';
import tiktok_logo from './images/tiktok-logo.png';
import linkdin_logo from './images//linkdin-logo.png';




export default function BusinessCost() {
    const [currentStep, setCurrentStep] = useState(1);

    const handleStepChange = (step) => {
        setCurrentStep(step);
    };

    const [showMainlandOptions, setShowMainlandOptions] = useState(false);

    const [jurisdictionOption, setJurisdictionOption] = useState('');



    const handleSponsorshipChange = (value) => {
        return () => {
            setSponsorship(value);
        };
    };

    const [showVisaOptions, setShowVisaOptions] = useState(false);

    const handleOptionChange = (value) => {
        return () => {
            if (value === 'Yes') {
                setShowVisaOptions(true);
                setvisa('1');
            } else {
                setShowVisaOptions(false);
                setvisa('No');
            }
        }
    };


    const [showModal, setShowModal] = useState(false);
    const [successModal, setSuccessModal] = useState(false);


    const handleClose = () => setShowModal(false);


    const [businessActivity, setBusinessActivity] = useState('');
    const [sponsorship, setSponsorship] = useState();
    const [owner, setowner] = useState();
    const [visa, setvisa] = useState();
    const [officespace, setofficespace] = useState();
    const [businessname, setbusiessname] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [message, setMessage] = useState();

    const handlebusinessActivitChange = (event) => {
        setBusinessActivity(event.target.value);
    };

    const handleOwnerChange = (value) => {
        return () => {
            setowner(value);
            console.log(value);
        };
    };

    const handleOfficeSpaceChange = (value) => {
        return () => {
            setofficespace(value);
        };
    };


    const handleMainlandCheckboxChange = (value) => {
        return () => {
            setJurisdictionOption(value);
            if (value === 'Mainland') {
                setShowMainlandOptions(true);
            }
            else {
                setShowMainlandOptions(false);
            }
        };
    };


    const handleBusinessNameChange = (event) => {
        const inputValue = event.target.value;
        // Validate input to allow only alphabetic characters and spaces
        if (/^[a-zA-Z\s]*$/.test(inputValue)) {
            setbusiessname(inputValue);
        }
    };


    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleVisaNumberChange = (event) => {
        setvisa(event.target.value);
    };

    const handleSucessModelChange = (event) => {
        setvisa(event.target.value);
    };


    const handleSubmitForm = async () => {
        const url = 'http://www.speedtypes.com/laravel/api/cast-calculator';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    businessActivity: businessActivity,
                    owners: owner,
                    numberOfActivities: jurisdictionOption,
                    sponsorship: sponsorship,
                    numberofVisas: visa,
                    buninessName: businessname,
                    officeSpace: officespace,
                    name: name,
                    email: email,
                    phone: phone,
                    message: message,

                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                if (data.status) {
                    setShowModal(false);
                    setSuccessModal(true);
                }
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }

    };


    const handleQuestion1Change = () => {
        if (businessActivity) {
            handleStepChange(2);
        }

    };

    const handleQuestion2Change = () => {
        if (jurisdictionOption) {
            handleStepChange(3);
        }

    };

    const handleQuestion3Change = () => {
        if (owner) {
            handleStepChange(4);
        }

    };


    const handleQuestion4Change = () => {
        if (visa) {
            handleStepChange(5);
        }

    };

    const handleQuestion5Change = () => {
        if (officespace) {
            handleStepChange(6);
        }

    };

    const handleQuestion6Change = () => {
        if (businessname) {
            handleStepChange(7);
        }
    };

    const handleQuestion7Change = () => {
        if (name && email && phone && message) {
            setShowModal(true);
        }
    };


    const handleFullNameChange = (event) => {
        const inputValue = event.target.value;
        // Validate input to allow only alphabetic characters and spaces
        if (/^[a-zA-Z\s]*$/.test(inputValue)) {
            setName(inputValue);
        }
    };


    const handleCancleForm = () => {
        setShowModal(false);
        setBusinessActivity("");
        setSponsorship("");
        setJurisdictionOption("");
        setowner("");
        setvisa("");
        setofficespace("");
        setbusiessname("");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        handleStepChange(1);
    };






    return (
        <>
            <div className='bg-white' style={{ paddingTop: 40, paddingBottom: 40 }}>
                <section className="py-2 mt-5 mb-5" >
                    <div className="max-w-screen-xl mx-auto px-4">
                        <ScrollAnimation animateIn="fadeIn">
                            <h3 className="text-gray-600 text-2xl font-bold sm:text-3xl pb-1 text-center">
                                Calculate Your<br></br> <span style={{ color: "#eab308" }}>Business Setup Cost Now</span>
                            </h3>
                        </ScrollAnimation>
                        <div className='row' style={{ marginTop: 70 }}>
                            <div className='col' >
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="container">
                                        <div className="main_steper">
                                            <div className="stepper">
                                                <div className={`steps step--1 ${currentStep === 1 ? 'step-active' : ''}`}>
                                                    <span className='font-semibold'>01</span>
                                                    <emp className="text-white text-1 text-2xl font-bold sm:text-1xl pb-1" >Business Activity</emp>
                                                </div>
                                                <div className={`steps step--2 ${currentStep === 2 ? 'step-active' : ''}`}>
                                                    <span className='font-semibold'>02</span>
                                                    <emp className="text-white text-1 text-2xl font-bold sm:text-1xl pb-1" >Jurisdiction</emp>
                                                </div>
                                                <div className={`steps step--3 ${currentStep === 3 ? 'step-active' : ''}`}>
                                                    <span className='font-semibold'>03</span>
                                                    <emp className="text-white text-1 text-2xl font-bold sm:text-1xl pb-1" >Owners</emp>
                                                </div>
                                                <div className={`steps step--4 ${currentStep === 4 ? 'step-active' : ''}`}>
                                                    <span className='font-semibold'>04</span>
                                                    <emp className="text-white text-1 text-2xl font-bold sm:text-1xl pb-1" >Visa</emp>
                                                </div>
                                                <div className={`steps step--5 ${currentStep === 5 ? 'step-active' : ''}`}>
                                                    <span className='font-semibold'>05</span>
                                                    <emp className="text-white text-1 text-2xl font-bold sm:text-1xl pb-1" >Office Space</emp>
                                                </div>
                                                <div className={`steps step--6 ${currentStep === 6 ? 'step-active' : ''}`}>
                                                    <span className='font-semibold'>06</span>
                                                    <emp className="text-white text-1 text-2xl font-bold sm:text-1xl pb-1" >Business Name</emp>
                                                </div>
                                                <div className={`steps step--7 ${currentStep === 7 ? 'step-active' : ''}`}>
                                                    <span className='font-semibold'>07</span>
                                                    <emp className="text-white text-1 text-2xl font-bold sm:text-1xl pb-1" >Contact Details</emp>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col' style={{ zIndex: 9 }}  >
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className={`form form-active cost-form`} id={`form${currentStep}`}>
                                        {/* Add content for each step here */}
                                        {currentStep === 1 && (
                                            <>
                                                <h3 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-1 ">
                                                    Which Business activity are you looking for?
                                                </h3>
                                                <div className="relative w-72 max-w-full mt-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 right-3"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    <select value={businessActivity} onChange={handlebusinessActivitChange} className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
                                                        <option value="" disabled>Select a business activity</option>
                                                        <option value="Advertising">Advertising</option>
                                                        <option value="Architecture">Architecture</option>
                                                        <option value="Business Consultancy">Business Consultancy</option>
                                                        <option value="Design Services">Design Services</option>
                                                        <option value="E-Commerce">E-Commerce</option>
                                                        <option value="Event Management">Event Management</option>
                                                        <option value="Fashion Design Consultancy">Fashion Design Consultancy</option>
                                                        <option value="Food & Beverage Trading">Food & Beverage Trading</option>
                                                        <option value="General Trading">General Trading</option>
                                                        <option value="Human Resources Consultancy">Human Resources Consultancy</option>
                                                        <option value="Interior Design">Interior Design</option>
                                                        <option value="IT Consultancy">IT Consultancy</option>
                                                        <option value="Lifestyle Consultancy">Lifestyle Consultancy</option>
                                                        <option value="Beauty salon">Beauty salon</option>
                                                        <option value="Project management">Project management</option>
                                                        <option value="Online Education">Online Education</option>
                                                        <option value="Photography Services">Photography Services</option>
                                                        <option value="Production">Production</option>
                                                        <option value="Construction Company">Construction Company</option>
                                                        <option value="Building Maintenance">Building Maintenance</option>
                                                        <option value="Cafeteria">Cafeteria</option>
                                                        <option value="Sports Management">Sports Management</option>
                                                        <option value="Tax Consultancy">Tax Consultancy</option>
                                                        <option value="Training Services">Training Services</option>
                                                        <option value="Video Services">Video Services</option>
                                                        <option value="Wholesale of Household Goods">Wholesale of Household Goods</option>
                                                        <option value="Manufacturing">Manufacturing</option>
                                                        <option value="Hospitality">Hospitality</option>
                                                        <option value="Tourism and Hospitality">Tourism and Hospitality</option>
                                                        <option value="Event management">Event management</option>
                                                        <option value="Livestock Farming">Livestock Farming</option>
                                                        <option value="Fishing and fish farming">Fishing and fish farming</option>
                                                        <option value="Petroleum and metal extraction">Petroleum and metal extraction</option>
                                                        <option value="Retail licences">Retail licences</option>
                                                        <option value="Real estate">Real estate</option>
                                                        <option value="Commercial Broker">Commercial Broker</option>
                                                        <option value="Finance broker">Finance broker</option>
                                                        <option value="Trade and Logistics">Trade and Logistics</option>
                                                        <option value="Import and export">Import and export</option>
                                                        <option value="Industrial License">Industrial License</option>
                                                        <option value="Professional License">Professional License</option>
                                                        <option value="Documents clearance services">Documents clearance services</option>
                                                        <option value="Typing Shop">Typing Shop</option>
                                                        <option value="Legal advisor services">Legal advisor services</option>
                                                        <option value="Other Promising Sectors">Other Promising Sectors</option>
                                                        <option value="Other">Other</option>
                                                    </select>

                                                </div>
                                                <div className="mt-4">
                                                    <a href="javascript:void(0)" className="inline-block py-2 px-4 text-white font-medium bg-yellow-500 duration-150 hover:bg-yellow-600 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none" onClick={handleQuestion1Change} id="btn-1">
                                                        Next
                                                    </a>
                                                </div>

                                            </>
                                        )}
                                        {currentStep === 2 && (
                                            <>
                                                <h3 className="text-gray-600 text-2xl font-bold sm:text-1xl pb-1 mb-2" >
                                                    NUMBER OF ACTIVITIES
                                                </h3>
                                                <p className="text-gray-600 pb-5">
                                                    3 activities are included. Additional activities can be added at AED 1000 per activity.
                                                </p>
                                                <form>
                                                    <div className="form-group d-flex align-items-center mt-3">
                                                        <input
                                                            type="radio"
                                                            id="mainland"
                                                            name="mainland"
                                                            checked={jurisdictionOption === 'Mainland'}
                                                            onChange={handleMainlandCheckboxChange('Mainland')}
                                                        />
                                                        <label htmlFor="offshore" className="checkbox-label">
                                                            <h3 className="text-gray-600 text-2xl font-semibold sm:text-1xl pb-1 " style={{ fontSize: 20 }}>
                                                                Mainland
                                                            </h3>
                                                        </label>
                                                    </div>
                                                    {showMainlandOptions && (
                                                        <>
                                                            <h3 className="text-gray-600 text-2xl font-semibold sm:text-1xl  ml-4" style={{ fontSize: 17, marginLeft: 50 }}>
                                                                Do you require sponsorship?
                                                            </h3>
                                                            <div style={{ display: 'flex', alignItems: 'center', marginLeft: 50 }}>
                                                                <div className="form-group d-flex align-items-center mt-3">
                                                                    <input type="radio" id="offshore" name="offshore"
                                                                        onChange={handleSponsorshipChange('Yes')}
                                                                        checked={sponsorship === 'Yes'}
                                                                    />
                                                                    <label htmlFor="offshore" className="checkbox-label">
                                                                        <h3 className="text-gray-600 text-2xl font-semibold sm:text-1xl pb-1 " style={{ fontSize: 17 }}>
                                                                            Yes
                                                                        </h3>
                                                                    </label>
                                                                </div>
                                                                <div className="form-group d-flex align-items-center mt-3 ml-5">
                                                                    <input type="radio" id="offshore" name="offshore"
                                                                        onChange={handleSponsorshipChange('No')}
                                                                        checked={sponsorship === 'No'}
                                                                    />
                                                                    <label htmlFor="offshore" className="checkbox-label">
                                                                        <h3 className="text-gray-600 text-2xl font-semibold sm:text-1xl pb-1 " style={{ fontSize: 17 }}>
                                                                            No
                                                                        </h3>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                    <div className="form-group d-flex align-items-center mt-3">
                                                        <input
                                                            type="radio"
                                                            id="mainland"
                                                            checked={jurisdictionOption === 'Freezone'}
                                                            onChange={handleMainlandCheckboxChange('Freezone')}
                                                            name="mainland" />

                                                        <label htmlFor="offshore" className="checkbox-label">
                                                            <h3 className="text-gray-600 text-2xl font-semibold sm:text-1xl pb-1 " style={{ fontSize: 20 }}>
                                                                Free Zone
                                                            </h3>
                                                        </label>
                                                    </div>
                                                    <div className="form-group d-flex align-items-center mt-3">
                                                        <input
                                                            type="radio"
                                                            id="mainland"
                                                            checked={jurisdictionOption === 'Offshore'}
                                                            onChange={handleMainlandCheckboxChange('Offshore')}
                                                            name="mainland" />
                                                        <label htmlFor="offshore" className="checkbox-label">
                                                            <h3 className="text-gray-600 text-2xl font-semibold sm:text-1xl pb-1 " style={{ fontSize: 20 }}>
                                                                Offshore
                                                            </h3>
                                                        </label>
                                                    </div>
                                                </form>
                                                <div class="form-group d-flex align-items-center mt-3">
                                                    {/* <div className="mt-4">
                                                        <a href="javascript:void(0)" className="inline-block py-2 px-4 text-white font-medium bg-gray-600 duration-150 hover:bg-gray-800 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none" onClick={() => handleStepChange(4)} id="btn-2">
                                                            Previous
                                                        </a>
                                                    </div> */}
                                                    <div className="mt-4">
                                                        <a href="javascript:void(0)" className="inline-block py-2 px-4 text-white bg-gray-700 duration-150 hover:bg-gray-500 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none " onClick={() => handleStepChange(1)} id="btn-2">
                                                            Previous
                                                        </a>
                                                        <a href="javascript:void(0)" className="inline-block py-2 px-4 text-white font-medium bg-yellow-500 duration-150 hover:bg-yellow-600 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none ml-4" onClick={handleQuestion2Change} id="btn-2">
                                                            Next
                                                        </a>
                                                    </div>
                                                </div>

                                            </>
                                        )}
                                        {currentStep === 3 && (
                                            <>
                                                <h3 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-1 mb-5">
                                                    How Many Owners will be involved?
                                                </h3>
                                                <form>
                                                    <div class="form-group d-flex align-items-center">
                                                        <input
                                                            type="radio"
                                                            id="mainland"
                                                            name="mainland"
                                                            checked={owner === 'Single'}
                                                            onChange={handleOwnerChange('Single')} />
                                                        <label for="html" class="checkbox-label">
                                                            <h3 class="text-gray-600 text-2xl font-semibold sm:text-1xl pb-1 ml-4" style={{ fontSize: 20 }}>
                                                                Single
                                                            </h3>
                                                        </label>
                                                    </div>
                                                    <div class="form-group d-flex align-items-center mt-3">
                                                        <input
                                                            type="radio"
                                                            id="mainland"
                                                            name="mainland"
                                                            checked={owner === 'Multiple'}
                                                            onChange={handleOwnerChange('Multiple')} />
                                                        <label for="css" class="checkbox-label">
                                                            <h3 class="text-gray-600 text-2xl font-semibold sm:text-1xl pb-1 ml-4" style={{ fontSize: 20 }}>
                                                                Multiple
                                                            </h3>
                                                        </label>
                                                    </div>
                                                    <div class="form-group d-flex align-items-center mt-3">
                                                        <input
                                                            type="radio"
                                                            id="mainland"
                                                            name="mainland"
                                                            checked={owner === 'Not Sure'}
                                                            onChange={handleOwnerChange('Not Sure')} />
                                                        <label for="css" class="checkbox-label">
                                                            <h3 class="text-gray-600 text-2xl font-semibold sm:text-1xl pb-1 ml-4" style={{ fontSize: 20 }}>
                                                                Not Sure
                                                            </h3>
                                                        </label>
                                                    </div>
                                                </form>
                                                <div class="form-group d-flex align-items-center mt-3">
                                                    {/* <div className="mt-4">
                                                        <a href="javascript:void(0)" className="inline-block py-2 px-4 text-white font-medium bg-gray-600 duration-150 hover:bg-gray-800 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none" onClick={() => handleStepChange(4)} id="btn-2">
                                                            Previous
                                                        </a>
                                                    </div> */}
                                                    <div className="mt-4">
                                                        <a href="javascript:void(0)" className="inline-block py-2 px-4 text-white font-medium bg-gray-700 duration-150 hover:bg-gray-500 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none " onClick={() => handleStepChange(2)} id="btn-2">
                                                            Previous
                                                        </a>
                                                        <a href="javascript:void(0)" className="inline-block py-2 px-4 text-white font-medium bg-yellow-500 duration-150 hover:bg-yellow-600 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none ml-4" onClick={handleQuestion3Change} id="btn-2">
                                                            Next
                                                        </a>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                        {currentStep === 4 && (
                                            <>
                                                <h3 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-1 mb-5">
                                                    The number of visas you will need should account for your own visa.
                                                </h3>
                                                <form>
                                                    <div className="form-group d-flex align-items-center">
                                                        <input
                                                            type="radio"
                                                            id="yes"
                                                            name="visa"
                                                            value="Yes"
                                                            onChange={handleOptionChange('Yes')}
                                                        />
                                                        <label htmlFor="yes" className="checkbox-label">
                                                            <h3 className="text-gray-600 text-2xl font-semibold sm:text-1xl pb-1 ml-4" style={{ fontSize: 20 }}>
                                                                Yes
                                                            </h3>
                                                        </label>
                                                    </div>
                                                    {showVisaOptions && (
                                                        <>

                                                            <select value={visa} onChange={handleVisaNumberChange} className="w-full px-3 py-2 text-sm text-gray-600 mt-5 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
                                                                <option value={'1'}>1</option>
                                                                <option value={'2'}>2</option>
                                                                <option value={'3'}>3</option>
                                                                <option value={'4'}>4</option>
                                                                <option value={'5'}>5</option>
                                                                <option value={'6'}>6</option>
                                                                <option value={'7'}>7</option>
                                                                <option value={'8'}>8</option>
                                                                <option value={'9'}>9</option>
                                                                <option value={'10'}>10</option>

                                                            </select>

                                                        </>
                                                    )}
                                                    <div className="form-group d-flex align-items-center mt-3">
                                                        <input
                                                            type="radio"
                                                            id="no"
                                                            name="visa"
                                                            value="no"
                                                            onChange={handleOptionChange('No')}
                                                        />
                                                        <label htmlFor="no" className="checkbox-label">
                                                            <h3 className="text-gray-600 text-2xl font-semibold sm:text-1xl pb-1 ml-4" style={{ fontSize: 20 }}>
                                                                No
                                                            </h3>
                                                        </label>
                                                    </div>

                                                </form>
                                                <div class="form-group d-flex align-items-center mt-3">
                                                    {/* <div className="mt-4">
                                                        <a href="javascript:void(0)" className="inline-block py-2 px-4 text-white font-medium bg-gray-600 duration-150 hover:bg-gray-800 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none" onClick={() => handleStepChange(4)} id="btn-2">
                                                            Previous
                                                        </a>
                                                    </div> */}
                                                    <div className="mt-4">
                                                        <a href="javascript:void(0)" className="inline-block py-2 px-4 text-white font-medium bg-gray-700 duration-150 hover:bg-gray-500 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none " onClick={() => handleStepChange(3)} id="btn-2">
                                                            Previous
                                                        </a>
                                                        <a href="javascript:void(0)" className="inline-block py-2 px-4 text-white font-medium bg-yellow-500 duration-150 hover:bg-yellow-600 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none ml-4" onClick={handleQuestion4Change} id="btn-2">
                                                            Next
                                                        </a>
                                                    </div>
                                                </div>

                                            </>
                                        )}
                                        {currentStep === 5 && (
                                            <>
                                                <h3 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-1 mb-5">
                                                    Do you require an office Space?
                                                </h3>
                                                <form>
                                                    <div class="form-group d-flex align-items-center">
                                                        <input
                                                            type="radio"
                                                            id="mainland"
                                                            name="mainland"
                                                            checked={officespace === 'Yes'}
                                                            onChange={handleOfficeSpaceChange('Yes')} />
                                                        <label for="html" class="checkbox-label">
                                                            <h3 class="text-gray-600 text-2xl font-semibold sm:text-1xl pb-1 ml-4" style={{ fontSize: 20 }}>
                                                                Yes
                                                            </h3>
                                                        </label>
                                                    </div>
                                                    <div class="form-group d-flex align-items-center mt-3">
                                                        <input
                                                            type="radio"
                                                            id="mainland"
                                                            name="mainland"
                                                            checked={officespace === 'No'}
                                                            onChange={handleOfficeSpaceChange('No')} />
                                                        <label for="css" class="checkbox-label">
                                                            <h3 class="text-gray-600 text-2xl font-semibold sm:text-1xl pb-1 ml-4" style={{ fontSize: 20 }}>
                                                                No
                                                            </h3>
                                                        </label>
                                                    </div>
                                                </form>
                                                <div class="form-group d-flex align-items-center mt-3">
                                                    {/* <div className="mt-4">
                                                        <a href="javascript:void(0)" className="inline-block py-2 px-4 text-white font-medium bg-gray-600 duration-150 hover:bg-gray-800 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none" onClick={() => handleStepChange(4)} id="btn-2">
                                                            Previous
                                                        </a>
                                                    </div> */}
                                                    <div className="mt-4">
                                                        <a href="javascript:void(0)" className="inline-block py-2 px-4 text-white font-medium bg-gray-700 duration-150 hover:bg-gray-500 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none " onClick={() => handleStepChange(4)} id="btn-2">
                                                            Previous
                                                        </a>
                                                        <a href="javascript:void(0)" className="inline-block py-2 px-4 text-white font-medium bg-yellow-500 duration-150 hover:bg-yellow-600 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none ml-4 " onClick={handleQuestion5Change} id="btn-2">
                                                            Next
                                                        </a>
                                                    </div>
                                                </div>

                                            </>
                                        )}
                                        {currentStep === 6 && (
                                            <>
                                                <h3 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-1 mb-5">
                                                    Do you have a business name in mind?
                                                </h3>
                                                <form >
                                                    <div class="form-group d-flex align-items-center" >
                                                        <div class="mb-6" style={{ width: 300 }}>
                                                            <input type="text" name="businessName" value={businessname} onChange={handleBusinessNameChange} id="businessName" placeholder="" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                                        </div>
                                                    </div>
                                                </form>
                                                <div class="form-group d-flex align-items-center ">
                                                    {/* <div className="mt-4">
                                                        <a href="javascript:void(0)" className="inline-block py-2 px-4 text-white font-medium bg-gray-600 duration-150 hover:bg-gray-800 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none" onClick={() => handleStepChange(4)} id="btn-2">
                                                            Previous
                                                        </a>
                                                    </div> */}
                                                    <div className="mt-4">
                                                        <a href="javascript:void(0)" className="inline-block py-2 px-4 text-white font-medium bg-gray-700 duration-150 hover:bg-gray-500 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none " onClick={() => handleStepChange(5)} id="btn-2">
                                                            Previous
                                                        </a>
                                                        <a href="javascript:void(0)" className="inline-block py-2 px-4 text-white font-medium bg-yellow-500 duration-150 hover:bg-yellow-600 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none ml-4" onClick={handleQuestion6Change} id="btn-2">
                                                            Next
                                                        </a>
                                                    </div>
                                                </div>

                                            </>
                                        )}
                                        {currentStep === 7 && (
                                            <>
                                                <h3 className="text-gray-600 text-2xl font-bold sm:text-2xl pb-1 ">
                                                    Select Jurisdiction
                                                </h3>
                                                <form action="https://api.web3forms.com/submit" className='mt-5' method="POST" id="form" style={{ width: 300 }}>
                                                    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                                                    <input type="hidden" name="subject" value="New Submission from Web3Forms" />
                                                    <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                                                    <input type="checkbox" name="botcheck" id="" style={{ display: 'none' }} />
                                                    <div class="mb-6">
                                                        <input
                                                            type="text"
                                                            value={name}
                                                            onChange={handleFullNameChange}
                                                            placeholder="John Doe"
                                                            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                                        />
                                                    </div>
                                                    <div class="mb-6">
                                                        <input type="email" value={email} onChange={handleEmailChange} name="email" id="email" placeholder="you@company.com" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                                    </div>
                                                    <div class="mb-6">
                                                        <input type="number" value={phone} onChange={handlePhoneChange} name="phone" id="phone" placeholder="+1 (555) 1234-567" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                                    </div>
                                                    <div class="mb-6">
                                                        <textarea rows="4" name="message" onChange={handleMessageChange} id="message" placeholder="Your Message" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required>
                                                            {message}
                                                        </textarea>
                                                    </div>

                                                </form>
                                                <div class="form-group d-flex align-items-center mt-3">
                                                    {/* <div className="mt-4">
                                                        <a href="javascript:void(0)" className="inline-block py-2 px-4 text-white font-medium bg-gray-600 duration-150 hover:bg-gray-800 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none" onClick={() => handleStepChange(4)} id="btn-2">
                                                            Previous
                                                        </a>
                                                    </div> */}
                                                    <div className="mt-4">
                                                        <a href="javascript:void(0)" className="inline-block py-2 px-4 text-white font-medium bg-gray-700 duration-150 hover:bg-gray-500 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none " onClick={() => handleStepChange(6)} id="btn-2">
                                                            Previous
                                                        </a>
                                                        <button onClick={handleQuestion7Change} className="inline-block py-2 px-4 text-white font-medium bg-yellow-500 duration-150 hover:bg-yellow-600 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none ml-4">
                                                            Submit
                                                        </button>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </div>

            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        {/* <div className="text-lg leading-6 font-medium  text-gray-700 pb-5" id="modal-title" style={{ display: "flex", justifyContent: "center" }}>
                                            <img src={logo} alt="" width={170} text />
                                        </div> */}
                                        {/* Add your modal content here */}
                                    </div>
                                </div>
                            </div>
                            <div className=" bg-gray-50  px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <div className="text-lg leading-6 font-medium  text-gray-700 pb-5" id="modal-title" style={{ display: "flex", justifyContent: "center" }}>
                                            <img src={logo} alt="" width={130} text />
                                        </div>
                                        <h3 className="text-lg leading-6 font-medium text-gray-700 pb-5" id="modal-title">
                                            Business Activity: {businessActivity}
                                        </h3>
                                        {
                                            jurisdictionOption === 'Mainland' && (
                                                <h3 className="text-lg leading-6 font-medium text-gray-700 pb-5" id="modal-title">
                                                    Suponsership: {sponsorship}
                                                </h3>
                                            )
                                        }
                                        <h3 className="text-lg leading-6 font-medium text-gray-700 pb-5" id="modal-title">
                                            Jurisdiction: {jurisdictionOption}
                                        </h3>
                                        <h3 className="text-lg leading-6 font-medium text-gray-700 pb-5" id="modal-title">
                                            Owner: {owner}
                                        </h3>
                                        <h3 className="text-lg leading-6 font-medium text-gray-700 pb-5" id="modal-title">
                                            Visa: {visa}
                                        </h3>
                                        <h3 className="text-lg leading-6 font-medium text-gray-700 pb-5" id="modal-title">
                                            Office Space: {officespace}
                                        </h3>
                                        <h3 className="text-lg leading-6 font-medium text-gray-700 pb-5" id="modal-title">
                                            Business Name: {businessname}
                                        </h3>
                                        <h3 className="text-lg leading-6 font-medium text-gray-700 pb-5" id="modal-title">
                                            Name: {name}
                                        </h3>
                                        <h3 className="text-lg leading-6 font-medium text-gray-700 pb-5" id="modal-title">
                                            Email: {email}
                                        </h3>
                                        <h3 className="text-lg leading-6 font-medium text-gray-700 pb-5" id="modal-title">
                                            Phone: {phone}
                                        </h3>
                                        <h3 className="text-lg leading-6 font-medium text-gray-700 pb-5" id="modal-title">
                                            Message: {message}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">

                                <button onClick={handleSubmitForm} type="button" className="w-full inline-flex justify-center rounded-md border text-white font-semibold border-transparent shadow-sm px-4 py-2 bg-yellow-500 duration-150 hover:bg-yellow-600 active:bg-gray-900 sm:ml-3 sm:w-auto sm:text-sm">
                                    I Agree
                                </button>
                                <a href="javascript:void(0)" className="inline-block py-2 px-4 text-white font-medium bg-gray-700 duration-150 hover:bg-gray-500 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none ml-4" onClick={() => setShowModal(false)} id="btn-2">
                                    Edit
                                </a>
                                <a href="javascript:void(0)" className="inline-block py-2 px-4 text-white font-medium  border border text-yellow-500 border-yellow-500 hover:bg-yellow-500 hover:border-yellow-500 hover:text-white rounded-lg shadow-md hover:shadow-none " onClick={() => handleCancleForm()} id="btn-2">
                                    Cancel
                                </a>
                                {/* You can add additional buttons here */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {
                successModal && (
                    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                            <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            {/* <h3 className="text-lg text-center leading-6 font-medium text-gray-900" id="modal-title">
                                                Speed Type
                                            </h3> */}
                                            {/* Add your modal content here */}
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <div className="text-lg leading-6 font-medium  text-gray-700 pb-5" id="modal-title" style={{ display: "flex", justifyContent: "center" }}>
                                                <img src={logo} alt="" width={130} text />
                                            </div>
                                            <h3 className="text-lg leading-6 font-medium text-center text-gray-700 pb-5" id="modal-title">
                                                Thank you for using our Cost Calculator.
                                            </h3>
                                            <p className="text-gray-600 pb-5" style={{ fontSize: 16, fontWeight: 'normal' }}>
                                                Our expert will contact to you with suitable packages shortly.
                                            </p>
                                            <h3 className="text-lg leading-6 text-center font-medium text-gray-700 pb-5" id="modal-title">
                                                FOLLOW US ON
                                            </h3>
                                            <div className="text-lg leading-6 font-medium  text-gray-700 pb-5" id="modal-title" style={{ display: "flex", justifyContent: "center" }}>
                                                <a href="https://www.facebook.com/dubaisetupinfo.co/">
                                                    <img src={facebook_logo} alt="" width={40} className='' />
                                                </a>
                                                <a href="https://www.instagram.com/abbas_janjua_786/?igsh=ejZoODVhbWxmaWp5">
                                                    <img src={instragram_logo} alt="" width={40} className='ml-5' />
                                                </a>
                                                <a href="wa.link/j6z2no">
                                                    <img src={tiktok_logo} alt="" width={40} className='ml-5' />
                                                </a>
                                                <a href="https://www.linkedin.com/company/noorabha/">
                                                    <img src={linkdin_logo} alt="" width={40} className='ml-5' />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button onClick={() => setSuccessModal(false)} type="button" className="w-full inline-flex justify-center rounded-md border text-white font-semibold border-transparent shadow-sm px-4 py-2 bg-yellow-500 duration-150 hover:bg-yellow-600 active:bg-gray-900 sm:ml-3 sm:w-auto sm:text-sm">
                                        Close
                                    </button>
                                    {/* You can add additional buttons here */}
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }
        </>
    )
}
