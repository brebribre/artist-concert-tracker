
import Image from 'next/image'
import { Button } from "@material-tailwind/react";

interface Concert {
    eventName:string,
    startDate:string,
    venue:string,
    city:string,
    country:string,
    image:string
  }

export default function ConcertCard(props:any) {
    return (
      <div className = "flex bg-slate-900 rounded-md border-white mt-4">
        <div className = "my-auto flex-none hidden md:block">
            <Image
                src={props.concert?.image}
                alt={'concert image'}           
                width={230}
                height={100}
                className = "rounded-xl mx-auto p-2"
            />
        </div>
        <div className = "flex-auto p-3 md:p-4">
            <p className ="font-bold py-1 text-slate-400 text-sm">{props.concert?.eventName}</p>
            <p className = "text-sm text-slate-400">Start date: {props.concert?.startDate}</p>
            <p className = "text-sm text-slate-400">Venue: {props.concert?.venue}</p>
            <p className = "text-sm text-slate-400">{props.concert?.city}, {props.concert?.country}</p>
            <button className="px-3 py-1 text-sm mt-2 text-slate-200 bg-purple-600 rounded-sm " >
                    Find Offer
            </button>
        </div>
      </div>
    )
  }