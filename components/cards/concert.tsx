
import Image from 'next/image'

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
      <div className = "mr-2 grid grid-cols-12 p-2 border-2 rounded-md border-white mt-4">
        <div className = "col-span-3 md:col-span-2 relative">
            <Image
                src={props.concert?.image}
                alt={'concert image'}           
                layout='fill'
                objectFit='contain'
                sizes="(max-width: 768px) 100vw"
            />
        </div>
        <div className = "col-span-9 pl-2">
            <p className ="font-bold pb-2">{props.concert?.eventName}</p>
            <p className = "text-sm">Start date: {props.concert?.startDate}</p>
            <p className = "text-sm">Venue: {props.concert?.venue}</p>
            <p className = "text-sm">{props.concert?.city}, {props.concert?.country}</p>
        </div>
      </div>
    )
  }