import React from "react";
import { BgColor, BorderColor, TextColor } from "../models/tailwind-models";

const Box: React.FC<{
    header?: string;
    bgColor?: BgColor;
    textColor?: TextColor;
    borderColor: BorderColor;
    children: React.ReactNode;
}> = ({ header, bgColor, textColor, children, borderColor }) => {
    return (
        <div className={`border-[1px] ${borderColor}`}>
            {header && (
                <div
                    className={`w-full ${bgColor} ${textColor} text-2xl font-semibold tracking-wider uppercase leading-loose text-center h-12`}
                >
                    <h1>{header}</h1>
                </div>
            )}
            <div className={`p-4 ${bgColor} bg-opacity-10 space-y-4`}>
                {children}
            </div>
        </div>
    );
};

export default Box;
