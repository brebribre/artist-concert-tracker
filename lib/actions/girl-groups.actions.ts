"use server"
import { connectToDB } from "../mongoose"
import GirlGroup from "../models/girl-groups";

interface Group {
    name:string,
    link:string
}

//connect to mongoose
export async function getGirlGroups(){
    try {
        connectToDB();
        const girlGroups = await GirlGroup.find();
        console.log("fetching girl groups...")
        const output = [];
        for(let i = 0; i < girlGroups.length; i++){
            const tmp = girlGroups[i];
            const name = tmp.name;
            const link = tmp.link;
            const group = {
                name:name,
                link:link
            }
            output.push(group)
        }
  
        return output;
        

    } catch (error: any) {
        throw new Error(`Failed to create/update user: ${error.message}`)
    }
    
    
}