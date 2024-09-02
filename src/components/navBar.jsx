import React, { useState } from "react";
import { Fade as Hamburger } from 'hamburger-react';

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className="fixed">
            <Hamburger color="#4FD1C5" toggled={isOpen} toggle={setOpen} />
            {isOpen && (
                <div className="absolute mt-16  text-black font-bold flex flex-col justify-center " >
                    <ul className="flex flex-col items-start space-y-14 p-6"> {/* Space between items */}
                        <li className="flex items-center justify-center w-20 h-20 rounded-full  backdrop-blur"><a href="#home">Home</a></li>
                        <li className="flex items-center justify-center w-20 h-20 rounded-full  backdrop-blur"><a href="#about">About</a></li>
                        <li className="flex items-center justify-center w-20 h-20 rounded-full  backdrop-blur"><a href="#services">Services</a></li>
                        <li className="mb-0 flex items-center justify-center w-20 h-20 rounded-full  backdrop-blur"><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
