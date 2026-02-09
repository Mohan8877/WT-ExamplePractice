import { Card } from '../../components/common/Card';
import { Users, ShoppingBag, DollarSign } from 'lucide-react';

const AdminDashboard = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-text-main">Admin Overview</h2>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
                        <Users size={24} />
                    </div>
                    <div>
                        <p className="text-text-light text-sm">Total Users</p>
                        <p className="text-2xl font-bold">1,204</p>
                    </div>
                </Card>
                <Card className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
                        <ShoppingBag size={24} />
                    </div>
                    <div>
                        <p className="text-text-light text-sm">Total Bookings</p>
                        <p className="text-2xl font-bold">845</p>
                    </div>
                </Card>
                <Card className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 text-green-600 rounded-xl">
                        <DollarSign size={24} />
                    </div>
                    <div>
                        <p className="text-text-light text-sm">Platform Revenue</p>
                        <p className="text-2xl font-bold">$12,450</p>
                    </div>
                </Card>
            </div>

            {/* Recent Users Table */}
            <Card title="New Users">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-text-light border-b border-gray-100">
                            <th className="py-3">Name</th>
                            <th className="py-3">Role</th>
                            <th className="py-3">Joined</th>
                            <th className="py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[1, 2, 3].map(i => (
                            <tr key={i} className="border-b border-gray-50 last:border-none">
                                <td className="py-3 font-medium">User {i}</td>
                                <td className="py-3 capitalize text-text-light">Customer</td>
                                <td className="py-3 text-text-light">2 hours ago</td>
                                <td className="py-3"><span className="text-green-600 text-sm font-semibold">Active</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    );
};

export default AdminDashboard;
