
import { getConcertByGroupName } from "@/lib/jambase";
import React, { useState } from "react";


export default function Button(props:any) {
    

    //onClick = {() => handleInput()}
    return (
        <button 
         className="px-4 py-2 mt-4 text-white bg-purple-600 rounded transform transition duration-200 hover:bg-white hover:text-black" 
         onClick = {() => props.handleCallback()}
        >
            {props.text}
        </button>
 
    );
}