import React, { useState } from 'react';
import bot_logo from './images/bot-icon.png';
import FadeIn from 'react-fade-in';

export default function Bot(props) {
    const [isPopupBot, setIsPopupBot] = useState(true);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [showQuestions, setShowQuestions] = useState([]);
    const [showAnswers, setShowAnswers] = useState([]);
    const [loadingAnswer, setLoadingAnswer] = useState(false);
    const [optionSelected, setOptionSelected] = useState(false);
    const [questionsAsked, setQuestionsAsked] = useState(0);
    const [showOtherQuestionsButton, setShowOtherQuestionsButton] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleFullNameChange = (event) => {
        const inputValue = event.target.value;
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

    const handleSubmitForm = async (answer,question) => {
        const url = 'http://www.speedtypes.com/laravel/api/chat-bot-mail';

        if (name && email && phone && question && answer) {
            try {
                console.log('Submitting form:', { name, email, phone, question, answer });
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        phone: phone,
                        question: question,
                        answer: answer
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Form submitted successfully:', data);
                    
                } else {
                    console.error('Error:', response.statusText);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            console.warn('Form validation failed. Missing required fields.');
        }
    };


    const togglePopupBot = () => {
        setIsPopupBot(!isPopupBot);
        if (!isPopupBot) {
            // Reset form fields when the bot is opened
            setShowQuestions([]);
            setShowAnswers([]);
            setOptionSelected(false);
            setQuestionsAsked(0);
            setShowOtherQuestionsButton(false);
        }
    };

    const handleFormSubmit = (answer,question) => {
        console.log('Form is being submitted...');
        handleSubmitForm(answer,question);
    };


    const showDescription = (section) => {
        let answer = '';
        switch (section) {
            case 'Mainland':
                answer = 'Kindly use the cost calculator for your business (link of Cost calculator)';
                break;
            case 'Offshore':
                answer = 'Kindly use the cost calculator for your business (link of Cost calculator)';
                break;
            case 'Visa Service':
                answer = `We are providing all types of visa services in Dubai:
                    1. Employment visas
                    2. Tourist visas
                    3. Family visas`;
                break;
            case 'PRO Services':
                answer = 'We are providing all type of visa Services in Dubai free for Companies. please share your contact details with us to know more details.';
                break;
            case 'Bank account opening':
                answer = 'We are expert to open your company and personal bank account. please share your contact details with us to know more details.';
                break;
            case 'Office Space':
                answer = 'Are you looking on monthy or yearly basis. Speciflylocation and area. please share your contact details with us to know more details.';
                break;
            case 'Referal and Earn':
                answer = 'Referal any your friend to register the company in UAE and earn reasonable profit for you.';
                break;
            case 'Business Setup':
                answer = 'Okay. I just need a little bit of more information. What type of Business setup services are your looking for? please share your contact details with us to know more details.';
                break;
            case 'Company Setup':
                answer = 'You want to set up a new company or simply establish a wholly owned subsidiary in NA BUSINESS, we make the process as quick, easy, and clear as possible. Our friendly team of experts will guide you through every step, to get you up and running fast.';
                break;
            default:
                answer = '';
        }
        setShowAnswers(prev => [...prev, answer]);
        setLoadingAnswer(false);
        handleFormSubmit(answer,section);
    };

    const handleQuestionLoading = (value) => {
        setShowQuestions(prev => [...prev, value]);
        setLoadingAnswer(true);
        setQuestionsAsked(questionsAsked + 1);
        setTimeout(() => {
            showDescription(value);
            setOptionSelected(true);
            setShowOtherQuestionsButton(true);
        }, 1000);
    };

  
    const handleExit = () => {
        setName('');
        setEmail('');
        setPhone('');
        setShowQuestions([]);
        setShowAnswers([]);
        setIsPopupBot(false);
        setFormSubmitted(false);
        setOptionSelected(false);
        setQuestionsAsked(0);
        setShowOtherQuestionsButton(false);
    };

    const handleShowOtherQuestions = () => {
        setOptionSelected(false);
        setShowOtherQuestionsButton(false);
    };

    return (
        <>
            <a onClick={togglePopupBot} style={{ cursor: "pointer" }}>
                <img src={bot_logo} className='bot-float-2' alt="bot-icon" />
            </a>


            {isPopupBot && (
                <>
                    <FadeIn>
                        <div>
                            {!formSubmitted ? (
                                <div className="popup-Bot">
                                    <div className="space-y-5" style={{ marginTop: 20 }}>
                                        <div>
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={handleFullNameChange}
                                                placeholder="John Doe"
                                                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500 dark:bg-gray-700 dark:text-white
                                                dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={handleEmailChange}
                                                name="email"
                                                id="email"
                                                placeholder="you@gmail.com"
                                                required
                                                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="number"
                                                value={phone}
                                                onChange={handlePhoneChange}
                                                name="phone"
                                                id="phone"
                                                placeholder="+1 (555) 1234-567"
                                                required
                                                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                            />
                                        </div>
                                        <button onClick={() => setFormSubmitted(true) } type="button" className="w-full px-4 py-2 text-white font-medium bg-yellow-500 hover:bg-yellow-700 active:bg-gray-900 rounded-lg duration-150">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="popup-Bot-text">
                                    <div className="flex items-center min-h-screen dark:bg-gray-900" style={{ width: "100%" }}>
                                        <div className="container mx-auto">
                                            <div className="max-w-lg mx-auto my-10 rounded-md shadow-lg">
                                                <div className="p-5 bg-blue-500" style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <h3 className="text-white text-1xl font-bold sm:text-1xl pb-1" style={{ fontSize: 17 }}>
                                                        Build Business in Dubai
                                                    </h3>
                                                    <svg
                                                        style={{ cursor: "pointer" }}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="#ffffff"
                                                        className="size-6"
                                                        onClick={togglePopupBot}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M6 18 18 6M6 6l12 12"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="p-5 bg-white" style={{ maxHeight: 480, overflow: "auto" }}>
                                                    <div className="p-5 mb-3 rounded-md" style={{ backgroundColor: "#f2f2f2" }}>
                                                        <h3 className="text-gray-600 text-1xl font-bold sm:text-1xl pb-1">Disclaimer</h3>
                                                        <p className="text-gray-500 max-w-xl leading-relaxed" style={{ fontSize: 13 }}>
                                                            Please note that the AI chatbot provides responses based on the information available on this website. It is not a substitute for consulting with qualified experts and should not be taken as professional advice. Any decisions or actions taken based on the information provided by the AI chatbot are solely at the user's discretion and risk. Additionally, the AI chatbot may not always provide accurate or complete responses.
                                                        </p>
                                                    </div>
                                                    <div className="p-5 mb-3 rounded-md" style={{ backgroundColor: "#f2f2f2" }}>
                                                        <p className="text-gray-500 max-w-xl leading-relaxed" style={{ fontSize: 13 }}>
                                                            Please click any question below to continue.
                                                        </p>
                                                    </div>
                                                    {showQuestions.map((question, index) => (
                                                        <div key={index}>
                                                            <div className="mb-3" style={{ display: "flex", justifyContent: 'space-between' }}>
                                                                <div></div>
                                                                <h3 className="text-white text-center text-1xl font-normal sm:text-1xl rounded-md p-2" style={{ backgroundColor: "#3b82f6", fontSize: 13 }}>
                                                                    {question}
                                                                </h3>
                                                            </div>
                                                            <div className="p-5 mb-3 rounded-md" style={{ backgroundColor: "#f2f2f2" }}>
                                                                <p className="text-gray-500 max-w-xl leading-relaxed" style={{ fontSize: 13 }}>
                                                                    {loadingAnswer && index === showQuestions.length - 1 ? 'Loading...' : showAnswers[index]}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                    {!optionSelected && (
                                                        <div className="mb-3">
                                                            <button onClick={() => handleQuestionLoading('Mainland')} className="w-full Send text-left p-3 mb-2 rounded-md bg-gray-100">
                                                                Mainland
                                                            </button>
                                                            <button onClick={() => handleQuestionLoading('Offshore')} className="w-full Send text-left p-3 mb-2 rounded-md bg-gray-100">
                                                                Offshore
                                                            </button>
                                                            <button onClick={() => handleQuestionLoading('Visa Service')} className="w-full Send text-left p-3 mb-2 rounded-md bg-gray-100">
                                                                Visa Service
                                                            </button>
                                                            <button onClick={() => handleQuestionLoading('PRO Services')} className="w-full Send text-left p-3 mb-2 rounded-md bg-gray-100">
                                                                PRO Services
                                                            </button>
                                                            <button onClick={() => handleQuestionLoading('Bank account opening')} className="w-full Send text-left p-3 mb-2 rounded-md bg-gray-100">
                                                                Bank account opening
                                                            </button>
                                                            <button onClick={() => handleQuestionLoading('Office Space')} className="w-full Send text-left p-3 mb-2 rounded-md bg-gray-100">
                                                                Office Space
                                                            </button>
                                                            <button onClick={() => handleQuestionLoading('Referal and Earn')} className="w-full Send text-left p-3 mb-2 rounded-md bg-gray-100">
                                                                Referal and Earn
                                                            </button>
                                                            <button onClick={() => handleQuestionLoading('Business Setup')} className="w-full Send text-left p-3 mb-2 rounded-md bg-gray-100">
                                                                Business Setup
                                                            </button>
                                                            <button onClick={() => handleQuestionLoading('Company Setup')} className="w-full Send text-left p-3 mb-2 rounded-md bg-gray-100">
                                                                Company Setup
                                                            </button>
                                                        </div>
                                                    )}
                                                    <div className='text-end'>
                                                        <div className="text-end mb-3">
                                                            <button onClick={handleExit} className="text-red-500 exit text-sm ml-2">
                                                                Exit
                                                            </button>
                                                        </div>
                                                        {questionsAsked > 0 && showOtherQuestionsButton && (
                                                            <div className="text-end mb-3">
                                                                <button onClick={handleShowOtherQuestions} className="text-green-500 show-other-question text-sm ml-3">
                                                                    Any Other
                                                                </button>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </FadeIn>
                </>
            )}
        </>
    );
}
