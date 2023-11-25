import { cn } from "@/lib/utils";
import React from "react";

interface TitleProps {
    title: string;
    className?: string;
}

const Title: React.FC<TitleProps> = ({ title, className }) => {
    return (
        <h1 className={cn("text-4xl md:text-5xl text-slate-700 font-black border-l-[6px] border-green-700 pl-5", className)}>
            {title}
        </h1>
    );
}

export default Title;