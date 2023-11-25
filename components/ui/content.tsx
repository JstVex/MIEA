import React, { ReactNode } from "react";

interface ContentProps {
    heading: string;
    children: ReactNode;
}

const Content: React.FC<ContentProps> = ({ heading, children }) => {
    return (
        <div className="my-10">
            <h2 className="text-3xl md:text-4xl text-slate-700 font-extrabold underline decoration-green-700 underline-offset-4">
                {heading}
            </h2>
            {children}
        </div>
    );
}

export default Content;