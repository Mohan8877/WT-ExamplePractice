import { Link } from 'react-router-dom';
import { Lock, Mail } from 'lucide-react';

const Register: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-primary-bg p-4">
            <div className="bg-white p-8 rounded-2xl shadow-soft w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-brand mb-2">Create Account</h1>
                    <p className="text-text-light">Join your community today</p>
                </div>

                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-text-main mb-1">First Name</label>
                            <input type="text" className="input-field" placeholder="John" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-main mb-1">Last Name</label>
                            <input type="text" className="input-field" placeholder="Doe" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-main mb-1">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3.5 text-gray-400" size={20} />
                            <input type="email" className="input-field pl-10" placeholder="you@example.com" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-main mb-1">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3.5 text-gray-400" size={20} />
                            <input type="password" className="input-field pl-10" placeholder="••••••••" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-main mb-1">I want to...</label>
                        <select className="input-field">
                            <option value="customer">Book Services</option>
                            <option value="provider">Offer Services</option>
                        </select>
                    </div>

                    <button type="button" className="btn-primary w-full shadow-lg shadow-brand/20">
                        Sign Up
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-text-light">
                    Already have an account? <Link to="/login" className="text-brand font-semibold hover:underline">Log in</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
