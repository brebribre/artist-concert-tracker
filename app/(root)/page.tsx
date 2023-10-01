'use client'

import ConcertCard from "@/components/cards/concert";
import SearchComponent from "@/components/forms/search";
import Alert from "@/components/ui/alert";
import { ArtistExist, getConcertByGroupName } from "@/lib/jambase";
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
  const [initialAlert, setInitialAlert] = useState(false);
  const [concerts, setConcerts] = useState<Concert[]>([]);
  const [concertExist, setConcertExist] = useState(true);
  const [artistExist, setArtistExist] = useState(1);
  
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
    setInitialAlert(true);
    
    let tmp = await getConcertByGroupName(childData);
    let tmp2 = await ArtistExist(childData);

    setConcerts(tmp);
   
    if(tmp.length > 0){
      console.log("concert exist, therefore artist exist")
      setArtistExist(1)
      setConcertExist(true);
    }
    else if(tmp2 < 1){//artist doesn't exist
      console.log("no artist found, therefore no concert exist")
      setArtistExist(0)
      setConcertExist(true);
    }
    else{
      console.log("artist exist, but no concert exist")
      setConcertExist(false);
      setArtistExist(1);
    }
    
  }


  return (
    <div className = "ml-5 mr-5 pt-1">
      <Alert tag="Coming soon" text="Bookmark artists and get notified for new concerts!" className = "md:w-1/2"/>
      <div className = "">
        <div className = "sm:w-1/2">
          <h1 className = "text-2xl font-semibold pb-2 text-slate-100">Find Upcoming Concerts.</h1>
          <p className = "text-sm text-slate-500 mb-4">Never miss another concert again! Look up your favorite artists' upcoming concerts and find the best ticket offers.</p>  
        </div> 
        <SearchComponent handleCallback={handleInput}/>
        <p className = "text-xs text-slate-500 mt-2">Don't know who to search yet? Try looking up "Taylor Swift"!</p>
      </div>
    

      {initialAlert?<h1 className = "text-md font-light text-slate-300 pt-4">Searching for "{input}"</h1>:<h1></h1>}
      {concertExist?<p></p>:<p className="pt-4 text-red-500 text-sm">No upcoming concerts found for the artist. </p>}
      {artistExist?<p></p>:<p className="pt-4 text-red-500 text-sm">No artist found in database, Check your spelling or try writing the original name of the artist instead of acronyms.</p>}
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