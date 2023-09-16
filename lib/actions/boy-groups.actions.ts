"use server"
import { connectToDB } from "../mongoose"
import BoyGroup from "../models/boy-groups";

interface Group {
    name:string,
    link:string
}

//connect to mongoose
export async function getBoyGroups(){
    try {
        connectToDB();
        const boyGroups = await BoyGroup.find();
        console.log("fetching boy groups...")
        const output = [];
        for(let i = 0; i < boyGroups.length; i++){
            const tmp = boyGroups[i];
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