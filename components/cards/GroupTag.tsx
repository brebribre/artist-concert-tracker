import { connectToDB } from '@/lib/mongoose';
import GirlGroupBio from "@/lib/models/gg-bios";
import { useRouter } from 'next/navigation'
import BoyGroupBio from '@/lib/models/bg-bios';
import { getGirlGroupNameById } from '@/lib/actions/gg-bios.actions';
import { getBoyGroupNameById } from '@/lib/actions/bg-bios.actions';

const GroupTag = (props:any) => {
    const router = useRouter()

    async function handleClick(){
        console.log(props.id)
        let name = await getGirlGroupNameById(props.id);
        if(name){
            router.push("/girlgroup/" + name)
        }
        name = await getBoyGroupNameById(props.id);
        if(name){
            router.push("/boygroup/" + name)
        }
    }

    return (
    <div className = "text-xs md:text-sm mb-1 font-semibold text-slate-500 hover:text-slate-400">
        <button onClick={handleClick} >{props.name}</button>
    </div>
    )
  }


  export default GroupTag