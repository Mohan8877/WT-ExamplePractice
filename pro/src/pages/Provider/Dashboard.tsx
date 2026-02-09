import { useState } from 'react';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import type { StatusType } from '../../components/common/Badge';
import type { Booking } from '../../types';
import { Calendar, DollarSign, CheckCircle, XCircle } from 'lucide-react';

const initialJobs: Booking[] = [
    { id: '101', serviceName: 'Leaky Faucet Repair', date: 'Today, 2:00 PM', amount: 85, status: 'pending' },
    { id: '102', serviceName: 'Pipe Replacement', date: 'Tomorrow, 10:00 AM', amount: 200, status: 'accepted' },
];

const ProviderDashboard = () => {
    const [jobs, setJobs] = useState<Booking[]>(initialJobs);

    const updateStatus = (id: string, newStatus: StatusType) => {
        setJobs(jobs.map(job => job.id === id ? { ...job, status: newStatus } : job));
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-text-main">Job Requests</h2>
                    <p className="text-text-light">Manage your incoming bookings</p>
                </div>
                <div className="bg-white px-4 py-2 rounded-xl shadow-soft font-bold text-brand">
                    Total Earnings: $1,250
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map(job => (
                    <Card key={job.id} className="relative overflow-hidden border-t-4 border-brand">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="font-bold text-lg">{job.serviceName}</h3>
                            <Badge status={job.status as StatusType} />
                        </div>

                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-2 text-text-light">
                                <Calendar size={18} />
                                <span>{job.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-text-light">
                                <DollarSign size={18} />
                                <span>${job.amount}</span>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            {job.status === 'pending' && (
                                <>
                                    <button
                                        onClick={() => updateStatus(job.id, 'accepted')}
                                        className="flex-1 bg-green-100 text-green-700 py-2 rounded-lg font-semibold hover:bg-green-200 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <CheckCircle size={18} /> Accept
                                    </button>
                                    <button
                                        onClick={() => updateStatus(job.id, 'cancelled')}
                                        className="flex-1 bg-red-100 text-red-700 py-2 rounded-lg font-semibold hover:bg-red-200 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <XCircle size={18} /> Reject
                                    </button>
                                </>
                            )}
                            {job.status === 'accepted' && (
                                <button
                                    onClick={() => updateStatus(job.id, 'in-progress')}
                                    className="w-full btn-primary py-2 text-sm"
                                >
                                    Start Job
                                </button>
                            )}
                            {job.status === 'in-progress' && (
                                <button
                                    onClick={() => updateStatus(job.id, 'completed')}
                                    className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600"
                                >
                                    Complete Job
                                </button>
                            )}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ProviderDashboard;
