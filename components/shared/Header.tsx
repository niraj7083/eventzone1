
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"
import { cookies } from "next/headers"
import { features } from "process"
import { logout } from "@/app/api/logout/route"

const Header = () => {

  


  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image 
            src="/assets/images/logo.svg" width={128} height={38}
            alt="Evently logo" 
          />
        </Link>

         {cookies().has("userid") &&
          <nav className="md:flex-between text-center justify-center hidden w-full max-w-xs">
            <NavItems />
          </nav>
}



{/*cookies().has("userid") &&
        <div onClick={logout} className="flex w-32 justify-end gap-3">
   <Button>logout</Button>
           </div>
*/}



     <div className="flex w-32 justify-end gap-3">
       
     {!cookies().has("userid")  &&  
            <Button asChild className="rounded-full" size="lg">
              <a href="/signin">
                Login
              </a>
            </Button>
}
{cookies().has("userid")  &&  
            <Button asChild className="rounded-full" size="lg">
              <a href="/signin">
               logout
              </a>
            </Button>
}
        </div>
      </div>
    </header>
  )
}
export default Header