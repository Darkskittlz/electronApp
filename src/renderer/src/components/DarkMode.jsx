import React, { useState, useEffect } from 'react'
import Sun from "../assets/sun.png"
import Moon from "../assets/moon.png"


const DarkModeButton = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(isDarkMode ? 'light' : 'dark');
        root.classList.add(isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <button
                className={`px-4 rounded ${isDarkMode ? 'bg-gray-dark text-white' : 'bg-gray-light text-gray-dark'
                    }`}
                onClick={toggleDarkMode}
            >
                {isDarkMode
                    ? <img alt="Sun" className="h-6 w-6" src={`${Moon}`} />
                    : <img alt="Sun" className="h-6 w-6" src={`${Sun}`} />
                }
            </button>
            {/* <a href="https://www.flaticon.com/free-icons/brightness" title="brightness icons">Brightness icons created by Freepik - Flaticon</a> */}
            {/* <a href="https://www.flaticon.com/free-icons/brightness" title="brightness icons">Brightness icons created by Freepik - Flaticon</a> */}
        </>
    );
};

export default DarkModeButton;
