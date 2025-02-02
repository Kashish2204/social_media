import React, { useState } from 'react';
import { Home, Search, Compass, Film, MessageSquare, Bell, PlusCircle, User, Settings, Menu, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { useNavigate } from 'react-router-dom';


const LeftSidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeItem, setActiveItem] = useState('Home');

    const navigate = useNavigate();
    
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    
    const handleItemClick = (label, path) => {
        setActiveItem(label);
        navigate(path);
    }



    return (
        <div
            className={`${
                isSidebarOpen ? 'w-64' : 'w-16'
            } h-full fixed left-0 top-0 flex flex-col items-start p-4 bg-white shadow-md transition-width duration-300 overflow-hidden`}
        >
            {/* Logo or Hamburger Menu */}
            <div
                className="mb-8 cursor-pointer flex items-center justify-center w-full"
                onClick={toggleSidebar}
            >
                {isSidebarOpen ? (
                    <h1 className="text-2xl font-bold text-gray-800">codeConnect</h1>
                ) : (
                    <Menu size={24} className="text-gray-800" />
                )}
            </div>

            {/* Sidebar Links */}
            {isSidebarOpen && (
                <div className="flex flex-col space-y-6 text-gray-800">
                    <SidebarItem
                        icon={<Home size={24} />}
                        label="Home"
                        isActive={activeItem === 'Home'}
                        onClick={() => handleItemClick('Home', '/')}
                    />
                    <SidebarItem
                        icon={<Search size={24} />}
                        label="Search"
                        isActive={activeItem === 'Search'}
                        onClick={() => handleItemClick('Search', '/search')}
                    />
                    <SidebarItem
                        icon={<Film size={24} />}
                        label="Feed"
                        isActive={activeItem === 'Feed'}
                        onClick={() => handleItemClick('Feed', '/feed')}
                    />
                    <SidebarItem
                        icon={<MessageSquare size={24} />}
                        label="Messages"
                        isActive={activeItem === 'Messages'}
                        onClick={() => handleItemClick('Messages', '/message')}
                    />
                    <SidebarItem
                        icon={<Bell size={24} />}
                        label="Notifications"
                        isActive={activeItem === 'Notifications'}
                        onClick={() => handleItemClick('Notifications', '/notification')}
                    />
                    <SidebarItem
                        icon={<PlusCircle size={24} />}
                        label="Create"
                        isActive={activeItem === 'Create'}
                        onClick={() => handleItemClick('Create', '/create')}
                    />
                    <SidebarItem
                        icon={<User size={24} />}
                        label="Profile"
                        isActive={activeItem === 'Profile'}
                        onClick={() => handleItemClick('Profile', '/profile')}
                    />
                    <SidebarItem
                        icon={<Settings size={24} />}
                        label="Setting"
                        isActive={activeItem === 'Setting'}
                        onClick={() => handleItemClick('Setting', '/setting')}
                    />
                    <SidebarItem
                        icon={<LogOut size={24} />}
                        label="Logout"
                        isActive={activeItem === 'Logout'}
                        onClick={() => handleItemClick('Logout', '/logout')}
                    />
                </div>
            )}
        </div>
    );
};

// Sidebar item component for consistency
const SidebarItem = ({ icon, label, isActive, onClick }) => (
    <Button
        variant="ghost"
        className={`flex items-center space-x-3 justify-start w-full text-lg font-medium ${
            isActive ? 'bg-gray-200 text-blue-600' : 'text-gray-800'
        }`}
        onClick={onClick}
    >
        {icon}
        {label && <span>{label}</span>}
    </Button>
);

export default LeftSidebar;

