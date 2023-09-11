'use client'

import ArtistCard from "@/components/cards/artist";
import ConcertCard from "@/components/cards/concert";
import SearchComponent from "@/components/forms/search";
import Alert from "@/components/ui/alert";
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
  image:string,
  offer:string,
  performer:string[]
}

export default function Home() {
  const [input, setInput] = useState("");
  const [alert, setAlert] = useState(false);
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
    setAlert(true);
    
    let tmp = await getConcertByGroupName(childData);
    setConcerts(tmp);
    console.log(tmp.length)
    if(tmp.length > 0){
      setConcertExist(true);
    }else{
      setConcertExist(false);
   
    }
    
  }


  return (
    <div className = "ml-5 mr-5 pt-1">
      <Alert tag="Coming soon" text="Bookmark artists and get notified for new concerts!" className = "md:w-1/2"/>
      <div className = "">
        <div className = "sm:w-1/3">
          <h1 className = "text-2xl font-semibold pb-2">Find Upcoming Concerts.</h1>
          <p className = "text-sm text-slate-500 mb-4">Never miss another concert again! Look up your favorite artists' upcoming concerts and find the best ticket offers.</p>  
        </div> 
        <SearchComponent handleCallback={handleInput}/>
      </div>
    

      {concertExist?<h1 className = "text-md font-light text-slate-300 pt-4">Searching for "{input}"</h1>:<h1></h1>}

      {concertExist?<p></p>:<p className="pt-4 text-red-500 text-sm">No results found. Check your spelling or try writing the original name of the artist instead of acronyms.</p>}

      {concerts?.map((item,index)=>{
            return <ConcertCard 
                concert = {item}
                key = {index}
            />
          })
      }
     
    </div>
  )
}