import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Lock, Mail } from 'lucide-react';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // For demo purposes, we'll just log in as a customer by default, 
        // or maybe based on email hint? 
        // Let's add role selection buttons for the demo.
    };

    const demoLogin = (role: 'customer' | 'provider' | 'admin') => {
        login(role);
        navigate(role === 'admin' ? '/admin' : '/dashboard');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-primary-bg p-4">
            <div className="bg-white p-8 rounded-2xl shadow-soft w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-brand mb-2">Welcome Back</h1>
                    <p className="text-text-light">Sign in to continue</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-text-main mb-1">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3.5 text-gray-400" size={20} />
                            <input
                                type="email"
                                className="input-field pl-10"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-text-main mb-1">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3.5 text-gray-400" size={20} />
                            <input
                                type="password"
                                className="input-field pl-10"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn-primary w-full shadow-lg shadow-brand/20">
                        Sign In
                    </button>
                </form>

                <div className="mt-8 text-center text-sm text-text-light">
                    <p className="mb-4">Or use demo accounts:</p>
                    <div className="flex gap-2 justify-center">
                        <button onClick={() => demoLogin('customer')} className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors">Customer</button>
                        <button onClick={() => demoLogin('provider')} className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors">Provider</button>
                        <button onClick={() => demoLogin('admin')} className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors">Admin</button>
                    </div>
                </div>

                <p className="mt-6 text-center text-sm text-text-light">
                    Don't have an account? <Link to="/register" className="text-brand font-semibold hover:underline">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
