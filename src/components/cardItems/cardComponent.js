import React from "react";

export default function CardComponent({ children }) {
    return (
        <div className="flex justify-between border-b-8 border-[#E4ECF5] h-44">
            {children}
        </div>
    );
}
