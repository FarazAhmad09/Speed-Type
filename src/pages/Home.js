import React, {useState} from 'react'
import Herosection from '../components/Herosection'
import Overview from '../components/Overview'
import Whydubai from '../components/Whydubai'
import Testiminials from '../components/Testiminials'
import Faq from '../components/Faq'
import Businesscost from '../components/Businesscost'
import Whyus from '../components/Whyus'
import Popup from '../components/Popup'




export default function Home() {

    const [isOpen, setisOpen] = useState(true);

    const handleCloseModel = () => {
            setisOpen(false);
    };
    


    return (
        <>
        {
            isOpen && (
                <Popup  closemodel={handleCloseModel} faraz="hello" />
            )
        }
            <Herosection />
            <Overview />
            <Whydubai />
            <Whyus/>
            <Businesscost/>
            <Faq/>
            <Testiminials />


        </>
    )
}
