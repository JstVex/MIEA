import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface BodyProps {
    children: ReactNode;
    className?: string;
};

const Body: React.FC<BodyProps> = ({ children, className }) => {
    return (
        <div className={cn("mx-6 md:mx-10 lg:mx-20 mt-[5vh] md:mt-[16vh] lg:mt-[20vh]", className)}>
            {children}
        </div>
    );
};

export default Body;