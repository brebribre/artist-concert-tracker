import { groupExist } from "@/lib/artist";
import React, { useState } from "react";

interface ArtistBio {
    groupName:string,
    koreanGroupName:string,
    debutDate:string,
    company:string,
    members:string,
    originalMembers:string,
    fanName:string,
    active:string
  }

export default function SearchComponent(props:any) {
    const [value, setValue] = useState("");

    const handleInput = () => {
        props.handleCallback(value);
    }

    return (
        <div className="flex items-center">
            <div className="flex gap-1 rounded">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search by name..."
                    onChange = {e => setValue(e.target.value)}
                />
                <button className=" border-solid border-2 border-purple-600 px-4 text-white bg-purple-600 rounded transform transition duration-200 hover:bg-black hover:border-white " onClick = {handleInput}>
                    Search
                </button>
            </div>
        </div>
    );
}