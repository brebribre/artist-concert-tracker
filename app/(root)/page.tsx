'use client'

import SearchComponent from "@/components/forms/search";
import { getGirlGroupByName } from "@/lib/artist";
//app/page.tsx
import { getCity } from "@/lib/utils";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useEffect, useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [displayedGroup, setDisplayedGroup] = useState("");

  function handleInput(childData:string){
    setInput(childData);
  }

  return (
    <div className = "pl-5 pt-5">
      <SearchComponent handleCallback={handleInput}/>
      <h1>{input}</h1>
    </div>
  )
}