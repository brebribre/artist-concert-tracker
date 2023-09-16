import Link from "next/link";
import { dark } from '@clerk/themes'

function Bottombar(props:any){
    return (
        <div className = "bg-slate-800 fixed bottom-0 w-full py-2">
            <p className = "text-sm text-slate-500 flex justify-center">©Bryan Alvin 2023</p>
        </div>
    )
}

export default Bottombar;