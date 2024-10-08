import Link from "next/link";
import Image from "next/image";
import { OrganizationSwitcher, SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { dark } from '@clerk/themes'

function Topbar(props:any){
    return (
     <nav className = "topbar px-5 py-3 mb-4 bg-slate-800 ">
     
        <div className = "grid grid-cols-4">
            <div className = "flex col-start-1 col-end-4">
                <Link href="/" className = "flex items-center gap-4">
                    <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
                    <p className = "font-bold text-md hidden">Cracker</p>
                </Link>
                <Link href="/" className = "flex items-center ml-8 text-slate-400 text-sm transform transition duration-200 hover:text-slate-300">
                    Concerts
                </Link>
                <Link href="/artists" className = "flex items-center ml-8 text-slate-400 text-sm transform transition duration-200 hover:text-slate-300">
                    Artists
                </Link>
              
               
                
            </div>
        
            <div className = "col-start-5 items-end">
                <SignedOut>
                    <Link href="/sign-in">
                        <button className = "btn btn-blue rounded-sm bg-purple-600 py-1 px-4 hover:bg-blue-600 text-slate-200">Sign in</button>
                    </Link>            
                </SignedOut>
                <SignedIn>
                    
                    <SignOutButton>
                        <div className = "cursor-pointer">
                            <Image src="/assets/logout.svg" alt="logout" width={24} height={24} />
                        </div> 
                    </SignOutButton>
                </SignedIn>
                <OrganizationSwitcher 
                    appearance={{
                        baseTheme: dark,
                        elements: {
                            organizationSwitcherTrigger: "py-2 px-4"
                        }
                    }}
                />

            </div>
        </div>

        
        

        

     </nav>
    )
}

export default Topbar;