import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Menu, Bell, Search, User } from 'lucide-react';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-primary-bg overflow-hidden">
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-20 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`fixed lg:static inset-y-0 left-0 z-30 transform transition-transform duration-300 lg:transform-none ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <Sidebar onClose={() => setSidebarOpen(false)} />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-full w-full">
                {/* Header */}
                <header className="h-16 bg-white shadow-soft flex items-center justify-between px-6 z-10">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg text-text-light"
                        >
                            <Menu size={24} />
                        </button>
                        <h1 className="text-xl font-bold text-brand hidden sm:block">ServiceBooker</h1>
                    </div>

                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="hidden md:flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg w-64">
                            <Search size={20} className="text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search services..."
                                className="bg-transparent border-none outline-none text-sm w-full"
                            />
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="relative p-2 hover:bg-gray-100 rounded-full text-text-light transition-colors">
                                <Bell size={24} />
                                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                            </button>

                            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                                <div className="text-right hidden md:block">
                                    <p className="text-sm font-semibold text-text-main">Alex Johnson</p>
                                    <p className="text-xs text-text-light">Customer</p>
                                </div>
                                <div className="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center text-brand">
                                    <User size={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Scrollable Content Area */}
                <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};
