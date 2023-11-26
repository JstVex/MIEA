import React from "react";

interface CardProps {
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
    return (
        <div className="relative mx-4 mt-1 w-[22rem] h-[15rem] hover:-translate-y-2 transition-all">
            <div className="border-2 bg-white border-green-700 rounded-xl p-4 relative z-10">
                <h2 className="font-semibold text-lg">
                    {title}
                </h2>
                <div className="border-b-2 my-4 border-green-700 border-dotted"></div>
                <p className="font-light text-sm">
                    {description}
                </p>
            </div>
            <div
                className="absolute inset-0 bg-green-700 rounded-xl transform translate-x-2 translate-y-2"
                style={{ height: 'calc(100% - 40px)' }}
            ></div>
        </div>
    );
}

export default Card;