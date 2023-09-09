'use client'

import ArtistCard from "@/components/cards/artist";
import SearchComponent from "@/components/forms/search";
import { getGirlGroupByName } from "@/lib/artist";
//app/page.tsx
import { getCity } from "@/lib/utils";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useEffect, useState } from "react";

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

export default function Home() {
  const [input, setInput] = useState("");
  const [displayedGroup, setDisplayedGroup] = useState<ArtistBio | null>({
      groupName : "Twice",
      koreanGroupName : "Placeholder",
      debutDate : "Placeholder",
      company : "Placeholder",
      members : "Placeholder",
      originalMembers : "Placeholder",
      fanName : "Placeholder",
      active : "Placeholder"
  });

  async function handleInput(childData:string){
    setInput(childData);
    let group = await getGirlGroupByName(childData);

    setDisplayedGroup({
      groupName : group["Group Name"],
      koreanGroupName : group["Korean Name"],
      debutDate : group["Date of Debut"],
      company : group["Company"],
      members : group["Members"],
      originalMembers : group["Original Members"],
      fanName : group["Fanclub Name"],
      active : group["Active"]
    })

    if(displayedGroup){
      console.log(displayedGroup.company)
    }
  
  }

  return (
    <div className = "pl-5 pt-5">
      <SearchComponent handleCallback={handleInput}/>
      <ArtistCard 
        artist = {displayedGroup}
      />
    </div>
  )
}