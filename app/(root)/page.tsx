'use client'

import ArtistCard from "@/components/cards/artist";
import ConcertCard from "@/components/cards/concert";
import SearchComponent from "@/components/forms/search";
import Button from "@/components/ui/button";
import { getConcertByGroupName, getGirlGroupByName } from "@/lib/artist";
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

interface Concert {
  eventName:string,
  startDate:string,
  venue:string,
  city:string,
  country:string,
  image:string
}

export default function Home() {
  const [input, setInput] = useState("");
  const [concerts, setConcerts] = useState<Concert[]>([]);
  const [concertExist, setConcertExist] = useState(false);
  
  const [displayedGroup, setDisplayedGroup] = useState<ArtistBio | null>({
    groupName : "",
    koreanGroupName : "",
    debutDate : "",
    company : "",
    members : "",
    originalMembers : "",
    fanName : "",
    active : ""
  });

  const handleInput = async (childData:string) => {
    setInput(childData);
    
    setDisplayedGroup({
      groupName : childData,
      koreanGroupName : "",
      debutDate : "",
      company : "",
      members : "",
      originalMembers : "",
      fanName : "",
      active : ""
    })

    /*let group = await getGirlGroupByName(childData);

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
    */

    let tmp = await getConcertByGroupName(childData);
    setConcerts(tmp);
    setConcertExist(true);
  }



 

  return (
    <div className = "ml-5 mr-5 pt-1">
      <h1 className = "text-2xl font-semibold pb-4">Find Upcoming Concerts</h1>
      <SearchComponent handleCallback={handleInput}/>

      {concertExist?<h1 className = "text-xl font-bold pt-4">Searching for "{input}"</h1>:<h1></h1>}
      
      {concertExist?concerts?.map((item,index)=>{
            return <ConcertCard 
                concert = {item}
                key = {index}
            />
          }):<p className="pt-2 text-red-500"></p>}
     
    </div>
  )
}