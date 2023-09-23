'use client'

import { getBoyGroupHeaderByName, getMembersByGroupName, getOfficialLinksByGroupName } from "@/lib/actions/bg-bios.actions"
import { useEffect, useState } from "react";
import Image from "next/image";
import MemberCard from '@/components/cards/MemberCard'

interface Link{
  type:string,
  links:string[]
}
interface Member {
  stageName:string
  birthName:string
  position:string
  birthday:string
  nationality:string
  height:string
  img:string
}

export default function GroupDetail({
    params,
  }: {
    params: { name: string };
  }) {
    const [title, setTitle] = useState("");
    const [groupImg, setGroupImg] = useState("");
    const [members, setMembers] = useState<Member[]> ([])
    const [officialSites, setOfficialSites] = useState<Link[]>([])

    useEffect(() => {
      handleInitial();
    }, [])
  
    const handleInitial = async () => {
      let name = decodeURI(params.name);
      const groupHeader = await getBoyGroupHeaderByName(name);
      const membersTmp = await getMembersByGroupName(name);
      const officialSites = await getOfficialLinksByGroupName(name);
      
      setTitle(groupHeader.groupName)
      setGroupImg(groupHeader.groupImg);
      setMembers(membersTmp);
      setOfficialSites(officialSites);
      console.log(name);
    }

 
    return (
      <div className = "mx-5 mb-10">
        <div>
          <div className = "header">
            <h1 className = "text-white text-6xl font-bold mb-5 ">{title}</h1>
            {groupImg?<Image className = "rounded-md " src={groupImg} alt="group-image" width={400} height={400}/>:<div></div>}   
          </div>
          
          <div className = "border-t-2 mt-10 border-purple-500">
              <h1 className = "text-white text-3xl font-bold mt-8 mb-5 ">Members</h1>
              <div className = "grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
                {members?.map((item,index)=>{
                  return (
                  
                    <MemberCard 
                        stageName = {item.stageName}
                        birthName = {item.birthName}
                        nationality = {item.nationality}
                        position = {item.position}
                        birthday = {item.birthday}
                        height = {item.height}
                        img = {item.img}
                    />
                  )
                })}
              </div>
              

          </div>
        </div> 
        <div>

        </div>
        
      </div>)
  }