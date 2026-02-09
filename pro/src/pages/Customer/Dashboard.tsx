import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import type { StatusType } from '../../components/common/Badge';
import type { Booking } from '../../types';
import { Calendar, Clock, CreditCard, Plus } from 'lucide-react';

const mockBookings: Booking[] = [
    { id: '1', serviceName: 'Home Cleaning - Standard', providerName: 'Sarah Jenkins', date: 'Oct 24, 2:00 PM', amount: 85, status: 'in-progress' },
    { id: '2', serviceName: 'Plumbing Repair', providerName: 'Mike Ross', date: 'Oct 22, 11:30 AM', amount: 150, status: 'completed' },
    { id: '3', serviceName: 'Electrical Inspection', date: 'Pending Arrival', amount: 90, status: 'pending' },
];

const CustomerDashboard = () => {
    return (
        <div className="space-y-6">
            {/* Welcome & Action */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-text-main">Good Morning, Alex! ☀️</h2>
                    <p className="text-text-light">Here's what's happening with your services.</p>
                </div>
                <button className="btn-primary flex items-center gap-2">
                    <Plus size={20} /> New Booking
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                        <Calendar size={24} />
                    </div>
                    <div>
                        <p className="text-text-light text-sm">Active Bookings</p>
                        <p className="text-2xl font-bold">2</p>
                    </div>
                </Card>
                <Card className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 text-green-600 rounded-xl">
                        <CreditCard size={24} />
                    </div>
                    <div>
                        <p className="text-text-light text-sm">Total Spent</p>
                        <p className="text-2xl font-bold">$235</p>
                    </div>
                </Card>
                <Card className="flex items-center gap-4">
                    <div className="p-3 bg-brand/10 text-brand rounded-xl">
                        <Clock size={24} />
                    </div>
                    <div>
                        <p className="text-text-light text-sm">Pending Requests</p>
                        <p className="text-2xl font-bold">1</p>
                    </div>
                </Card>
            </div>

            {/* Recent Bookings List */}
            <Card title="Recent Bookings" action={<button className="text-brand text-sm font-semibold hover:underline">View All</button>}>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-text-light border-b border-gray-100">
                                <th className="py-3 font-medium">Service</th>
                                <th className="py-3 font-medium">Provider</th>
                                <th className="py-3 font-medium">Date & Time</th>
                                <th className="py-3 font-medium">Amount</th>
                                <th className="py-3 font-medium">Status</th>
                                <th className="py-3 font-medium text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockBookings.map((booking) => (
                                <tr key={booking.id} className="border-b border-gray-50 last:border-none hover:bg-gray-50/50 transition-colors">
                                    <td className="py-4 font-semibold text-text-main">{booking.serviceName}</td>
                                    <td className="py-4 text-text-light">{booking.providerName || 'Assigning...'}</td>
                                    <td className="py-4 text-text-light">{booking.date}</td>
                                    <td className="py-4 font-medium">${booking.amount}</td>
                                    <td className="py-4">
                                        <Badge status={booking.status as StatusType} />
                                    </td>
                                    <td className="py-4 text-right">
                                        <button className="text-sm border border-gray-200 px-3 py-1 rounded-lg hover:bg-gray-50">Details</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default CustomerDashboard;
