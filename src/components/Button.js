import React from "react";

const Button = ({ children, className }) => (
    <button
        className={`
            ${className || ""}
            bg-gradient-to-br from-black via-gray-600 to-gray-800
            text-white font-medium
            hover:bg-gradient-to-br hover:from-gray-800 hover:via-gray-600 hover:to-gray-500
            shadow-md
            rounded-full
            transition-transform duration-150
            hover:scale-105
            active:scale-95
            focus:outline-none focus:ring-2 focus:ring-gray-500
            before:inset-0 before:shadow-[0_4px_20px_rgba(0,0,0,0.5)] before:pointer-events-none
        `}
    >
        {children}
    </button>
);

export default Button;