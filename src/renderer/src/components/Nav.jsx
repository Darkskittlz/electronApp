import React, { useState, useEffect } from 'react'
import DarkModeButton from './DarkMode'
import Hamburger from "../assets/hamburger.svg"
import DarkHamburger from "../assets/darkHamburger.svg"

const Nav = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className="flex">
            <img
                className="z-50 h-10 w-10 ml-6 mt-4 cursor-pointer absolute"
                src={isOpen ? `${Hamburger}` : `${DarkHamburger}`}
                onClick={toggleNavbar}
                alt="Sun"
            />
            {isOpen && (
                <div className={`z-50 w-39 p-5 absolute left-0 top-0 h-full bg-white dark:bg-black dark:border-white dark:border rounded-lg transition-transform duration-600 transform ${isOpen ? '' : '-translate-x-full'}`}>
                    <nav>
                        <div className="flex">
                            <DarkModeButton onClick={toggleDarkMode} isDarkMode={isDarkMode} />
                            <img
                                className={`h-10 w-6 ml-5 cursor-pointer ${isOpen ? 'dark:hidden' : 'dark:block'}`}
                                src={`${Hamburger}`}
                                onClick={toggleNavbar}
                                alt="Sun"
                            />
                        </div>
                        <ul className="space-y-4 mt-8 justify-center">
                            <li>
                                <a href="#" className="text-black dark:text-white font-semibold">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-black dark:text-white font-semibold">
                                    Calendar
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-black dark:text-white font-semibold">
                                    Castings
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-black dark:text-white font-semibold">
                                    Photos
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-black dark:text-white font-semibold">
                                    Settings
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    )
}

export default Nav