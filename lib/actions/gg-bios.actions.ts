"use server"
import { connectToDB, disconnectToDB } from "../mongoose"
import GirlGroupBio from "../models/gg-bios";
import BoyGroupBio from "../models/bg-bios";
import { toNamespacedPath } from "path";
import mongoose, { Schema } from "mongoose";

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

interface groupLine {
    groupName: string,
    key: string,
  }

export async function getAllGirlGroups(){
    try {
        connectToDB();
        const girlGroupDB = await GirlGroupBio.find();
        const girlGroups = []

        for(let i = 0 ; i < girlGroupDB.length ; i++){
            const tmp = girlGroupDB[i];
            let group:groupLine = {
                groupName: tmp.groupName,
                key: tmp._id.toString()
            }
            girlGroups.push(group);
            
        }

        return girlGroups;
    } catch (error: any) {
        throw new Error(`Failed to fetch user: ${error.message}`)
    } 
    
}

export async function getGirlGroupHeaderByName(input:string){
    try {
        connectToDB();
        const girlGroup = await GirlGroupBio.find({ groupName: { $regex: input, $options: 'i' } });
        let group = {
            groupName : "",
            groupImg : "",
            members : [],
            officialSites : []
        }


        for(let i = 0 ; i < girlGroup.length ; i++){
            const tmp = girlGroup[i];
            if(tmp.groupName.toLowerCase() === input.toLowerCase()){
                group = {
                    groupName : tmp.groupName,
                    groupImg : tmp.groupImg,
                    members : [],
                    officialSites : []
                }
                
                return group;
            }
          
        }
      

        return group;
    } catch (error: any) {
        throw new Error(`Failed to create/update user: ${error.message}`)
    }
    
    
}

export async function getGirlGroupNameById(input:string){
    try {
        connectToDB();
        const girlGroup = await GirlGroupBio.findOne({ _id: new mongoose.Types.ObjectId(input) });
        if(girlGroup){
            return girlGroup.groupName;
        }else{
            return null;
        }
        
    } catch (error: any) {
        throw new Error(`Failed to create/update user: ${error.message}`)
    }
    
    
}

export async function getMembersByGroupName(input:string){
    try {
        connectToDB();
        const girlGroup = await GirlGroupBio.find({ groupName: { $regex: input, $options: 'i' } });
  

        let members:Member[] = [];
        const output = []
        for(let i = 0 ; i < girlGroup.length ; i++){
            const tmp = girlGroup[i];
            if(tmp.groupName.toLowerCase() === input.toLowerCase()){
                members = tmp.members
            }
        }

        for(let i = 0; i < members.length ; i++){
            let tmp = members[i];

            let member = {
                stageName:tmp.stageName,
                birthName:tmp.birthName,
                position:tmp.position,
                birthday:tmp.birthday,
                nationality:tmp.nationality,
                height:tmp.height,
                img:tmp.img
            }
            if(member.stageName ){
                output.push(member)
            }
            
        }



        return output;
    } catch (error: any) {
        throw new Error(`Failed to create/update user: ${error.message}`)
    }
    
    
}

export async function getOfficialLinksByGroupName(input:string){
    try {
        connectToDB();
        const girlGroup = await GirlGroupBio.find({ groupName: { $regex: input, $options: 'i' } });

        let links:Link[] = [];
        const output:Link[] = [];

        for(let i = 0 ; i < girlGroup.length ; i++){
            const tmp = girlGroup[i];
            if(tmp.groupName.toLowerCase() === input.toLowerCase()){
                links = tmp.officialSites
            }
        }

        for(let i = 0; i < links.length ; i++){
            let tmp = links[i];

            let link:Link = {
                type: tmp.type,
                links: tmp.links
            }
            output.push(link)
        }


        

        return output;
    } catch (error: any) {
        throw new Error(`Failed to create/update user: ${error.message}`)
    }
    
    
}