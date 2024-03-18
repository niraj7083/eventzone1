'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"
import { useState,useEffect } from "react"
import { handleError } from "@/lib/utils"
import { useRouter } from "next/navigation"



const Header = () => {
  const router = useRouter()
const [user, setuser] = useState(false)
useEffect(() => {
     if(localStorage.userid){
      setuser(true)
     }else{
      setuser(false)
     }
  },[])


  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
      <Link href="/" className="w-36 flex items-center ">
          <Image 
            src="/assets/images/logo.svg" width={68} height={48}
            alt="eventzone logo" 
          />
          <p className="text-4xl font-serif font-semibold">Event<span className="text-blue-600 ">Zone</span></p>
        </Link>

         {user &&
          <nav className="md:flex-between text-center justify-center hidden w-full max-w-xs">
            <NavItems />
          </nav>
}



     <div className="flex w-32 justify-end gap-3">
       
     {!user &&  
            <Button asChild className="rounded-full" size="lg">
              <a href="/signin">
                Login
              </a>
            </Button>
}
{user &&  
          <Button className="rounded-full" onClick={() => {
            const userid = localStorage.userid
            const data = {
              userid
            }
            fetch('/api/logout', {
              method: 'POST', // or 'PUT'
              body: JSON.stringify(data),
              headers: {
                  'Content-Type': 'application/json',
              }
  
          }).then(res => res.json()).then(data => {
              console.log(data)
              if (data.success) {
                localStorage.removeItem("userid")
                window.location.reload()
              }
              else {
                  console.log(data.error)
                  handleError(data.error)
              }
          })
          
          }}>Logout</Button>
}
        </div>
      </div>
    </header>
  )
}
export default Header