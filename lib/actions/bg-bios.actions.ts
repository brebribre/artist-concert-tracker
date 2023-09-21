"use server"
import { connectToDB, disconnectToDB } from "../mongoose"
import BoyGroupBio from "../models/bg-bios";
import GirlGroupBio from "../models/gg-bios";
import { toNamespacedPath } from "path";

interface Member {
    stageName:string
    birthName:string
    position:string
    birthday:string
    nationality:string
    height:string
    img:string
}

interface Group{
    groupName:string,
    groupImg:string,
    members: Member[],
    officialSites: [
        {
            type:string,
            links:string[]
        }
    ]
}

interface Link{
    type:string,
    links:string[]
}

export async function getAllBoyGroups(){
    try {
        connectToDB();
        const girlGroup = await BoyGroupBio.find();
 

        const girlGroupNames = []

        for(let i = 0 ; i < girlGroup.length ; i++){
            
            const tmp = girlGroup[i].toJSON()
            console.log(tmp.groupName)
            girlGroupNames.push(tmp.groupName);
          
        }
        
        return girlGroupNames;
    } catch (error: any) {
        throw new Error(`Failed to fetch user: ${error.message}`)
    } 
}
