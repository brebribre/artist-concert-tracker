"use server"
import { connectToDB } from "../mongoose"
import BoyGroup from "../models/boy-groups";
import GirlGroup from "../models/girl-groups";

interface Group {
    name:string,
    link:string
}

//connect to mongoose
export async function getGroups(){
    try {
        connectToDB();
        let boyGroups = await BoyGroup.find();
        let girlGroups = await GirlGroup.find();
        
        console.log("fetching all groups...");

        let groups = boyGroups.concat(girlGroups);
        let output = [];

        for(let i = 0; i < groups.length; i++){
            const tmp = groups[i];
            const name = tmp.name;
            const link = tmp.link;
            const group = {
                name:name,
                link:link
            }
            output.push(group)
        }

        output = output.sort();
  
        return output;
        

    } catch (error: any) {
        throw new Error(`Failed to create/update user: ${error.message}`)
    }
    
    
}