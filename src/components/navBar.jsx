import React, { useState } from "react";
import { Fade as Hamburger } from 'hamburger-react';

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className="fixed">
            <Hamburger color="#4FD1C5" toggled={isOpen} toggle={setOpen} />
            {isOpen && (
                <div className="absolute mt-32  bg-gray-500 text-black font-bold flex flex-col justify-center backdrop-blur"style={{ backdropFilter: 'blur(10px)', borderRadius: '0.5rem' }} >
                    <ul className="flex flex-col items-start space-y-28 p-6"> {/* Space between items */}
                        <li className=""><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li className="mb-0"><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
