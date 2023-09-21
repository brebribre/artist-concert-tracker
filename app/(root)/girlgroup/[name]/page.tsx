'use client'

import { getGirlGroupHeaderByName, getMembersByGroupName, getOfficialLinksByGroupName } from "@/lib/actions/gg-bios.actions"
import { useEffect, useState } from "react";
import Image from "next/image";
import MemberCard from '@/components/cards/member'

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

      const groupHeader = await getGirlGroupHeaderByName(params.name);
      const members = await getMembersByGroupName(params.name);
      const officialSites = await getOfficialLinksByGroupName(params.name);

      setTitle(groupHeader.groupName)
      setGroupImg(groupHeader.groupImg);
      setMembers(members);
      setOfficialSites(officialSites);

      
    }

 
    return (
      <div className = "mx-5">
        <div className = "">
          <h1 className = "text-white text-6xl font-bold mb-5 ">{title}</h1>
          <div className = "">
            <Image className = "rounded-md " src={groupImg} alt="group-image" width={500} height={300}/>
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