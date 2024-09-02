import React, { useState } from "react";
import { Fade as Hamburger } from 'hamburger-react';
import { SocialIcon } from 'react-social-icons';

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className="fixed pr-6">
            <div className="pl-6 pt-3"> 
                <Hamburger color="#4FD1C5" toggled={isOpen} toggle={setOpen} />
            </div>
            <div
                className={`absolute mt-16 text-black font-bold flex flex-col justify-center transform transition-transform duration-300 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <ul className="flex flex-col items-start space-y-14 p-6">
                    <li className="flex items-center justify-center w-20 h-20 rounded-full backdrop-blur">
                        <SocialIcon url="https://www.linkedin.com/in/maneesha-yasinth/" />
                    </li>
                    <li className="flex items-center justify-center w-20 h-20 rounded-full backdrop-blur">
                        <SocialIcon url="https://github.com/maneeshaYasinth" />
                    </li>
                    <li className="flex items-center justify-center w-20 h-20 rounded-full backdrop-blur">
                        <SocialIcon url="https://www.instagram.com/maneesha_yasinth/" />
                    </li>
                    <li className="mb-0 flex items-center justify-center w-20 h-20 rounded-full backdrop-blur">
                        <SocialIcon url="https://web.facebook.com/maneesha.gunarathna.7" />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
