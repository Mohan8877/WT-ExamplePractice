import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type UserRole = 'customer' | 'provider' | 'admin' | null;

interface User {
    id: string;
    name: string;
    role: UserRole;
    email: string;
}

interface AuthContextType {
    user: User | null;
    login: (role: UserRole) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = (role: UserRole) => {
        // Mock login logic
        setUser({
            id: '1',
            name: role === 'customer' ? 'Alex Johnson' : role === 'provider' ? 'Sarah Jenkins' : 'Admin User',
            role: role,
            email: 'test@example.com'
        });
    };

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
