import React, { useState } from 'react';
import popover from './images/popover.png';
import FadeIn from 'react-fade-in';

export default function Popup(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


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

    const handleFullNameChange = (event) => {
        const inputValue = event.target.value;
        // Validate input to allow only alphabetic characters and spaces
        if (/^[a-zA-Z\s]*$/.test(inputValue)) {
            setName(inputValue);
        }
    };

    return (
        <>
            <FadeIn duration={5000}>
                <div className='bg-white '>
                    <main className="relative py-2 popup popupmd" style={{ position: "fixed", zIndex: 99 }}>
                        <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
                            <div className="mt-12 mx-auto px-4  bg-white sm:max-w-lg sm:px-8 sm:rounded-xl">

                                <div className="mt-12 mx-auto bg-white sm:max-w-md sm:rounded-xl">
                                    <button onClick={props.closemodel} style={{ position: "absolute", right: 40, top: 5 }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 my-popup-svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
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
                                            Full Name
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
                                        <input type="email" value={email} onChange={handleEmailChange} name="email" id="email" placeholder="you@gmail.com" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                    </div>
                                    <div>
                                        <label className="font-medium">
                                            Phone number
                                        </label>
                                        <div className="relative mt-2">
                                            <input type="number" value={phone} onChange={handlePhoneChange} name="phone" id="phone" placeholder="+1 (555) 1234-567" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
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
    )
}
