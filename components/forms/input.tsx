import React, { useState } from "react";

export default function Input(props:any) {
    const [value, setValue] = useState("");


    return (
        <div className="flex items-center">
            <div className="flex gap-1 rounded">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search by name..."
                    onChange = {e => setValue(e.target.value)}
                />
            
            </div>
        </div>
    );
}