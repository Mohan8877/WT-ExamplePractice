import React from 'react';
import { clsx } from 'clsx';

export type StatusType = 'pending' | 'accepted' | 'in-progress' | 'completed' | 'cancelled';

interface BadgeProps {
    status: StatusType;
    label?: string;
}

const styles: Record<StatusType, string> = {
    'pending': 'bg-yellow-100 text-yellow-700',
    'accepted': 'bg-blue-100 text-blue-700',
    'in-progress': 'bg-brand/10 text-brand',
    'completed': 'bg-green-100 text-green-700',
    'cancelled': 'bg-red-100 text-red-700',
};

const labels: Record<StatusType, string> = {
    'pending': 'Requested',
    'accepted': 'Accepted',
    'in-progress': 'On the Way',
    'completed': 'Completed',
    'cancelled': 'Cancelled',
};

export const Badge: React.FC<BadgeProps> = ({ status, label }) => {
    return (
        <span className={clsx(
            "px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap",
            styles[status]
        )}>
            {label || labels[status]}
        </span>
    );
};
