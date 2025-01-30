import React, { useState, useRef, useEffect } from "react";

const SettingPage = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const mainAreaRef = useRef(null);
    const sidebarRef = useRef(null);


    // Functionality for Logout
    const handleLogout = () => {
        alert("You have been logged out!");
        setSelectedOption(null); // Reset state
        // Add your logout logic here (e.g., clear tokens, redirect to login page, etc.)
    };

    // Functionality for Account Delete
    const handleDeleteAccount = () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete your account? This action is irreversible."
        );
        if (confirmDelete) {
            alert("Account deleted!");
            setSelectedOption(null); // Reset state
            // Add your delete account logic here (e.g., API call to delete account, etc.)
        }
    };

    // Handle click outside the content area
    const handleClickOutside = (event) => {
        if (mainAreaRef.current && !mainAreaRef.current.contains(event.target) &&
            sidebarRef.current && !sidebarRef.current.contains(event.target)  ) {
            setSelectedOption(null); // Reset to show the default message
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);


    return (
        <div className="flex h-screen">

            {/* Main Area */}
            <div className="flex-1 relative p-6 bg-gray-50" >

                {selectedOption && (
                    <div ref={mainAreaRef} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded p-6 w-96 text-center">

                        {selectedOption === "logout" && (
                            <>
                                <h2 className="text-2xl font-bold mb-4">Logout</h2>
                                <p className="text-gray-700 mb-4">
                                    Are you sure you want to log out? 
                                </p>
                                <button
                                    onClick={handleLogout}
                                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-blue-600"
                                >
                                    Confirm Logout
                                </button>
                            </>
                        )}

                        {selectedOption === "deleteAccount" && (
                            <>    
                                <h2 className="text-2xl font-bold mb-4 text-gray-700">Delete Account</h2>
                                <p className="text-gray-700 mb-4">
                                    Deleting your account is a permanent action. All your data will be erased.
                                </p>
                                <button
                                    onClick={handleDeleteAccount}
                                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Confirm Delete Account
                                </button>
                            </>
                        )}
                    </div>
                )}

                {!selectedOption && (
                    <div className="text-gray-600 italic absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded p-6 w-96 text-center">
                        Select an option from the right to proceed.
                    </div>
                )}
            </div>

            {/* Right Sidebar */}
            <div className="w-64 border-r bg-gray-100" ref={sidebarRef} >
                <h2 className="text-lg font-bold p-4">Settings</h2>
                <ul>
                    <li
                        onClick={() => setSelectedOption("logout")}
                        className={`p-4 cursor-pointer ${
                            selectedOption === "logout" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-200"
                        }`}
                    >
                        Logout
                    </li>
                    <li
                        onClick={() => setSelectedOption("deleteAccount")}
                        className={`p-4 cursor-pointer ${
                            selectedOption === "deleteAccount" ? "bg-red-100 text-gray-700" : "hover:bg-gray-200"
                        }`}
                    >
                        Delete Account
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SettingPage;
