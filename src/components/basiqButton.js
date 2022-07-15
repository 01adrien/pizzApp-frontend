import React from "react";

export default function BasiqButton({ text, setState }) {
    return (
        <div>
            <button
                onClick={() => setState()}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded w-[90px] mb-2 mt-3"
            >
                <p className="text-center">{text}</p>
            </button>
        </div>
    );
}
