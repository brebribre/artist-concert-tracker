
import Image from 'next/image'
import { Button } from "@material-tailwind/react";
import Tag from '../ui/tag';

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

export default function ConcertCard(props:any) {
    return (
      <div className = "p-4 md:px-4 md:py-2 flex bg-slate-900 rounded-md border-white mt-4 xl:w-1/2">
        <div className = "my-auto flex-none hidden md:block">
            <Image
                src={props.concert?.image}
                alt={'concert image'}           
                width={230}
                height={100}
                className = "rounded-xl mx-auto p-2"
                
            />
        </div>
        <div className = "flex-auto md:p-4">
            <p className ="pb-1 text-slate-400 text-sm"><b>{props.concert?.eventName}</b> | {props.concert?.startDate}</p>
            <p className = "text-sm text-slate-400"><b>Venue:</b> {props.concert?.venue}, {props.concert?.city}, {props.concert?.country}</p>
            <p className = "text-sm text-slate-400 font-bold">Performers: </p>
            <div className = "flex flex-wrap py-1">
                {
                  props.concert.performer?.map((item:string,index:number)=>{
                  return <Tag 
                      text= {item}
                      key = {index}
                  />
                })
              }
            </div>
            {
              props.concert.offer===""?<p className = "pt-3 text-red-500 text-sm">No ticket found</p>:<a href={props.concert?.offer} target="_blank">
              <button className="border-solid border-2 border-purple-600 text-sm mt-3 py-1 px-2 text-slate-300 bg-purple-600 rounded transform transition duration-200 hover:bg-black hover:border-white" >
                      Find Offer 
              </button>
            </a>
            }
           
        </div>
      </div>
    )
  }