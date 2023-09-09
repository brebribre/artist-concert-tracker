import Link from "next/link";
import Image from "next/image";
import { OrganizationSwitcher, SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { dark } from '@clerk/themes'

function Topbar(){
    return (
     <nav className = "topbar px-5 pt-5">
     
        <div className = "grid grid-cols-4">
            <div className = "col-start-1 col-end-3">
                <Link href="/" className = "flex items-center gap-4">
                    <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
                    <p className = "font-bold text-xl max-xs:hidden">Cracker</p>
                </Link>
            </div>
            <div className = "col-start-5 items-end">
                <SignedOut>
                    <Link href="/sign-in">
                        <button className = "btn btn-blue rounded-sm bg-blue-500 py-1 px-4 hover:bg-blue-600">Sign in</button>
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