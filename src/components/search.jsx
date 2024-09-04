import React, { useState } from "react";
import { FaSearch } from 'react-icons/fa';

const NavBar = () => {
    const [isSearchOpen, setSearchOpen] = useState(false);

    return (
        <nav className="fixed w-full flex justify-end pr-6 pl-6 pt-3">
            {/* Search Icon */}
            <div onClick={() => setSearchOpen(!isSearchOpen)} className="cursor-pointer p-4 pr-8 ">
                <FaSearch size={24} color="#D3D3D3" />
            </div>

            {/* Sidebar for Search Input */}
            <div
                className={`absolute top-0 right-0 mt-16 text-black font-bold p-6 pr-4 flex items-center justify-center backdrop-blur bg-white/10 rounded-xl w-64 h-full transform transition-transform duration-300 ${
                    isSearchOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <input
                    type="text"
                    placeholder="Search Location..."
                    className="w-full p-2 italic backdrop-blur bg-white/5 rounded z-40 "
                />
            </div>
        </nav>
    );
};

export default NavBar;
