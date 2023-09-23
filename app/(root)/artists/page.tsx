'use client'

import Alert from "@/components/ui/alert";
import { useEffect, useState } from "react";
import { getAllGirlGroups } from "@/lib/actions/gg-bios.actions";
import { getAllBoyGroups } from "@/lib/actions/bg-bios.actions";
import GroupTag from '@/components/cards/GroupTag'

interface groupLine {
  groupName: string,
  key: string,
}

export default function Artists() {
  const [input, setInput] = useState("");
  const [displayed, setDisplayed] = useState(true);
  const [boyGroups, setBoyGroups] = useState<groupLine[]>([]);
  const [girlGroups, setGirlGroups] = useState<groupLine[]>([]);
  
  useEffect(() => {
    handleInitial();
  }, [])

  const handleInitial = async () => {

    const girlGroupList:groupLine[] = await getAllGirlGroups();
    setGirlGroups(girlGroupList);

    const boyGroupList:groupLine[] = await getAllBoyGroups();
    setBoyGroups(boyGroupList);


  }

  return (
    <div className = "ml-5 mr-5 pt-1 mb-10">
        <Alert tag="Coming soon" text="Bookmark artists and get notified for new concerts!" className = "md:w-1/2"/>
        <div className = "">
          <div className = "">
            <h1 className = "text-2xl font-semibold pb-2 text-slate-100">Know your favorite K-pop groups more.</h1>
            <p className = "text-sm text-slate-500 mb-4">Get a detailed bio of your favorite K-pop group and get live updates on news regarding them.</p>  
          </div> 
          
          <div className = "flex gap-8 py-2 mb-4 mt-2 border-b-2 border-purple-500 md:w-1/2">
            {displayed?<h1 className = "font-semibold text-sm text-purple-500 hover:underline" onClick= {() => {setDisplayed(true)}} >Boy Groups</h1>:<h1 className = "text-sm hover:underline text-slate-200" onClick= {() => {setDisplayed(true)}}>Boy Groups</h1>}
            {!displayed?<h1 className = "font-semibold text-sm text-purple-500 hover:underline" onClick= {() => {setDisplayed(false)}}>Girl Groups</h1>:<h1 className = "text-sm hover:underline text-slate-200" onClick= {() => {setDisplayed(false)}}>Girl Groups</h1>}
          </div>
       
            {
            !displayed?girlGroups?.map((item,index)=>{
              return (
                <GroupTag key={item.key} id={item.key} name={item.groupName}  />)
            }):boyGroups?.map((item,index)=>{
              return (<GroupTag key={item.key} id={item.key} name={item.groupName}  />)
            })
       
         
            }
        </div>
    </div>
  )
}