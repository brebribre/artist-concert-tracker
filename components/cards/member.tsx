import Image from "next/image";

export default function MemberCard(props:any) {
    return (
      <div className = "w-full bg-slate-900 rounded-md border-white p-5 text-slate-400 relative">
        <h1 className = "text-3xl xl:text-2xl pb-4 font-bold">{props?.stageName}</h1>
        <Image className = "rounded-md mb-5" src={props?.img} alt="group-image" width={300} height={400}/>
        <p className = "text-xs"><strong>Birth name: </strong> {props?.birthName}</p>
        <p className = "text-xs"><strong>Birthday: </strong> {props?.birthday}</p>
        <p className = "text-xs"><strong>Position: </strong>{props?.position}</p>
        <p className = "text-xs"><strong>Nationality: </strong>{props?.nationality}</p>
        <p className = "text-xs"><strong>Height: </strong>{props?.height}</p>
      </div>
    )
  }