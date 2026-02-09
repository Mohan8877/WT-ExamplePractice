import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';

const Landing = () => {
    return (
        <div className="bg-primary-bg min-h-screen">
            {/* Navbar */}
            <nav className="p-6">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold text-brand">ServiceBooker</div>
                    <div className="space-x-4">
                        <Link to="/login" className="font-medium hover:text-brand">Login</Link>
                        <Link to="/register" className="btn-primary">Get Started</Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="container mx-auto px-6 py-16 md:py-24 text-center">
                <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-brand bg-brand/10 rounded-full">
                    Trusted by 5,000+ neighbors
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-brand">
                    Local Services, <br />
                    <span className="text-text-main">Delivered to Your Doorstep.</span>
                </h1>
                <p className="text-lg md:text-xl text-text-light mb-8 max-w-2xl mx-auto">
                    Book trusted professionals for cleaning, repair, and maintenance tasks.
                    Track your service in real-time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/dashboard" className="btn-primary flex items-center justify-center gap-2">
                        Book a Service <ArrowRight size={20} />
                    </Link>
                    <button className="btn-secondary">Learn More</button>
                </div>
            </section>

            {/* Features */}
            <section className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: Shield, title: 'Verified Pros', text: 'Every provider is background checked and vetted.' },
                        { icon: Clock, title: 'Real-time Tracking', text: 'Know exactly when your pro is arriving.' },
                        { icon: Star, title: 'Quality Assured', text: 'Money back guarantee if not satisfied.' }
                    ].map((feature, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-hover transition-all">
                            <div className="w-12 h-12 bg-primary-bg rounded-xl flex items-center justify-center text-brand mb-4">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-text-light">{feature.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Landing;
