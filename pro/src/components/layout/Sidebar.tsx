import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Calendar,
    MapPin,
    CreditCard,
    MessageSquare,
    Settings,
    LogOut,
    X,
    Briefcase
} from 'lucide-react';
import { clsx } from 'clsx';

interface SidebarProps {
    onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
        { icon: Calendar, label: 'Bookings', path: '/bookings' },
        { icon: MapPin, label: 'Track Service', path: '/track' },
        { icon: Briefcase, label: 'Providers', path: '/providers' },
        { icon: MessageSquare, label: 'Messages', path: '/messages' },
        { icon: CreditCard, label: 'Payments', path: '/payments' },
        { icon: Settings, label: 'Settings', path: '/settings' },
    ];

    return (
        <div className="bg-white w-64 h-full flex flex-col shadow-soft border-r border-gray-100">
            <div className="h-16 flex items-center justify-between px-6 border-b border-gray-100">
                <span className="text-2xl font-bold text-brand">LocalSvc</span>
                <button onClick={onClose} className="lg:hidden p-1 text-gray-400 hover:text-gray-600">
                    <X size={24} />
                </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={onClose}
                        className={({ isActive }) => clsx(
                            "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                            isActive
                                ? "bg-brand text-white shadow-md shadow-brand/20"
                                : "text-text-light hover:bg-primary-bg hover:text-brand"
                        )}
                    >
                        <item.icon size={20} />
                        <span className="font-medium">{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-gray-100">
                <button className="flex items-center gap-3 w-full px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors">
                    <LogOut size={20} />
                    <span className="font-medium">Sign Out</span>
                </button>
            </div>
        </div>
    );
};
