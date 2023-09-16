'use client'

import Input from "@/components/forms/input";
import Alert from "@/components/ui/alert";
import { useEffect, useState } from "react";
import {getGirlGroups} from '@/lib/actions/girl-groups.actions'
import {getBoyGroups} from '@/lib/actions/boy-groups.actions'


interface Group {
  name:string,
  link:string
}

export default function Artists() {
  const [input, setInput] = useState("");
  const [displayed, setDisplayed] = useState(true);
  const [boyGroups, setBoyGroups] = useState<Group[]>([]);
  const [girlGroups, setGirlGroups] = useState<Group[]>([]);
  
  useEffect(() => {
    handleInitial();
  }, [])

  const handleInitial = async () => {
    const tmp:Group[] = await getBoyGroups();


    setBoyGroups(tmp);

    const tmp2:Group[] = await getGirlGroups();
    setGirlGroups(tmp2);
  }

  return (
    <div className = "ml-5 mr-5 pt-1 mb-10">
        <Alert tag="Coming soon" text="Bookmark artists and get notified for new concerts!" className = "md:w-1/2"/>
        <div className = "">
          <div className = "">
            <h1 className = "text-2xl font-semibold pb-2">Know your favorite artists more.</h1>
            <p className = "text-sm text-slate-500 mb-4">Get a detailed bio of your favorite artist and get live updates on news regarding them.</p>  
          </div> 
          
          <div className = "flex gap-8 py-2 mb-4 mt-2 border-b-2 border-purple-500 w-1/2">
            {displayed?<h1 className = "font-semibold text-sm text-purple-500 hover:underline" onClick= {() => {setDisplayed(true)}} >Boy Groups</h1>:<h1 className = "text-sm hover:underline" onClick= {() => {setDisplayed(true)}}>Boy Groups</h1>}
            {!displayed?<h1 className = "font-semibold text-sm text-purple-500 hover:underline" onClick= {() => {setDisplayed(false)}}>Girl Groups</h1>:<h1 className = "text-sm hover:underline" onClick= {() => {setDisplayed(false)}}>Girl Groups</h1>}
          </div>
       
            {
            !displayed?girlGroups?.map((item,index)=>{
              return (<div className = "text-xs md:text-sm mb-1 font-semibold text-slate-500 hover:text-slate-400"><a href={item.link} target='_blank'>{item.name}</a></div>)
            }):boyGroups?.map((item,index)=>{
              return (<div className = "text-xs md:text-sm mb-1 font-semibold text-slate-500 hover:text-slate-400"><a href={item.link} target='_blank'>{item.name}</a></div>)
            })
       
         
            }
        </div>
    </div>
  )
}