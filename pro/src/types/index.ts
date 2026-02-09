export interface Service {
    id: string;
    name: string;
    category: string;
    price: number;
    rating: number;
}

export interface Booking {
    id: string;
    serviceName: string;
    providerName?: string;
    date: string;
    amount: number;
    status: 'pending' | 'accepted' | 'in-progress' | 'completed' | 'cancelled';
}
